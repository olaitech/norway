import {
  type RouteFinderAnswers,
  type RouteFinderAnswerValue,
  type RouteFinderQuestionId,
  type RouteFinderRecommendation,
  routeFinderRecommendations,
} from "@/src/data/route-finder";

const categoryWeights: Record<RouteFinderQuestionId, number> = {
  duration: 4,
  experience: 5,
  transport: 3,
  season: 2,
};

function categoryMatches(
  recommendation: RouteFinderRecommendation,
  category: RouteFinderQuestionId,
  answer: RouteFinderAnswerValue | undefined,
) {
  const compatibleAnswers: ReadonlyArray<RouteFinderAnswerValue> =
    recommendation.matches[category];

  return answer ? compatibleAnswers.includes(answer) : false;
}

export function matchRoutes(answers: RouteFinderAnswers) {
  return routeFinderRecommendations
    .map((recommendation, index) => ({
      recommendation,
      score: (Object.keys(categoryWeights) as RouteFinderQuestionId[]).reduce(
        (total, category) =>
          categoryMatches(recommendation, category, answers[category])
            ? total + categoryWeights[category]
            : total,
        0,
      ),
      index,
    }))
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .map(({ recommendation }) => recommendation);
}
