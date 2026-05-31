import {
  guidedSearchIndex,
  type GuidedSearchEntry,
} from "./guidedSearchIndex";

export type RankedGuidedSearchResult = GuidedSearchEntry & {
  score: number;
  strongMatch: boolean;
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "at",
  "by",
  "do",
  "for",
  "from",
  "get",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "my",
  "of",
  "on",
  "or",
  "the",
  "to",
  "with",
  "you",
]);

function tokenize(value: string) {
  return value.split(" ").filter(Boolean);
}

export function normalizeGuidedSearchText(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9/#\s-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toTokenSet(value: string) {
  return new Set(tokenize(value));
}

function getQueryTokens(normalizedQuery: string) {
  const rawTokens = tokenize(normalizedQuery);
  const meaningfulTokens = rawTokens.filter((token) => !STOP_WORDS.has(token));

  if (meaningfulTokens.length >= 2) {
    return meaningfulTokens;
  }

  return rawTokens;
}

function scoreGuidedEntry(entry: GuidedSearchEntry, normalizedQuery: string) {
  if (!normalizedQuery) {
    return { score: 0, strongMatch: false };
  }

  const title = normalizeGuidedSearchText(entry.title);
  const description = normalizeGuidedSearchText(entry.description);
  const category = normalizeGuidedSearchText(entry.category);
  const href = normalizeGuidedSearchText(entry.href);
  const keywords = entry.keywords.map(normalizeGuidedSearchText);
  const queryTokens = getQueryTokens(normalizedQuery);
  const keywordTokenSet = toTokenSet(keywords.join(" "));
  const titleTokenSet = toTokenSet(title);
  const descriptionTokenSet = toTokenSet(description);
  const categoryTokenSet = toTokenSet(category);
  const hrefTokenSet = toTokenSet(href.replace(/\//g, " "));

  let score = 0;
  let strongSignals = 0;

  if (title === normalizedQuery) {
    score += 220;
    strongSignals += 2;
  }
  if (keywords.some((keyword) => keyword === normalizedQuery)) {
    score += 260;
    strongSignals += 3;
  }
  if (title.includes(normalizedQuery)) {
    score += 140;
    strongSignals += 1;
  }
  if (description.includes(normalizedQuery)) {
    score += 80;
  }
  if (category.includes(normalizedQuery)) {
    score += 32;
  }
  if (href.includes(normalizedQuery)) {
    score += 45;
  }
  if (keywords.some((keyword) => keyword.includes(normalizedQuery))) {
    score += 150;
    strongSignals += 1;
  }
  if (
    keywords.some(
      (keyword) =>
        normalizedQuery.includes(keyword) && tokenize(keyword).length >= 2,
    )
  ) {
    score += 130;
    strongSignals += 1;
  }

  const matchedTokens = new Set<string>();

  for (const token of queryTokens) {
    let tokenMatched = false;

    if (titleTokenSet.has(token)) {
      score += 22;
      tokenMatched = true;
    }
    if (keywordTokenSet.has(token)) {
      score += 26;
      tokenMatched = true;
    }
    if (descriptionTokenSet.has(token)) {
      score += 10;
      tokenMatched = true;
    }
    if (hrefTokenSet.has(token)) {
      score += 14;
      tokenMatched = true;
    }
    if (categoryTokenSet.has(token)) {
      score += 7;
      tokenMatched = true;
    }

    if (tokenMatched) {
      matchedTokens.add(token);
    }
  }

  const tokenCoverage =
    queryTokens.length > 0 ? matchedTokens.size / queryTokens.length : 0;

  if (queryTokens.length >= 2 && tokenCoverage === 1) {
    score += 60;
    strongSignals += 1;
  } else if (queryTokens.length >= 3 && tokenCoverage >= 0.75) {
    score += 28;
  } else if (queryTokens.length >= 2 && tokenCoverage >= 0.5) {
    score += 12;
  }

  if (typeof entry.priority === "number") {
    score += entry.priority * 7;
  }

  const strongMatch =
    strongSignals >= 2 ||
    score >= 240 ||
    (score >= 190 && tokenCoverage >= 0.8 && queryTokens.length >= 2);

  return { score, strongMatch };
}

export function getGuidedSearchResults(
  query: string,
  entries: GuidedSearchEntry[] = guidedSearchIndex,
) {
  const normalizedQuery = normalizeGuidedSearchText(query);

  if (!normalizedQuery) {
    return [] as RankedGuidedSearchResult[];
  }

  return entries
    .map((entry) => {
      const { score, strongMatch } = scoreGuidedEntry(entry, normalizedQuery);
      return {
        ...entry,
        score,
        strongMatch,
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

export function getGuidedSearchRecommendation(
  results: RankedGuidedSearchResult[],
) {
  if (results.length === 0) {
    return null;
  }

  const [bestResult, secondResult] = results;
  const secondScore = secondResult?.score ?? 0;
  const gap = bestResult.score - secondScore;
  const isStrongRecommendation =
    bestResult.strongMatch || gap >= 45 || (bestResult.score >= 180 && !secondResult);

  if (!isStrongRecommendation) {
    return null;
  }

  return { bestResult, gap };
}
