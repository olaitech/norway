import Link from "next/link";

import { GuideArticleLayout } from "@/src/components/guides/GuideArticleLayout";
import { AnswerBlock } from "@/src/components/shared/AnswerBlock";
import { createPageMetadata } from "@/src/lib/metadata";

const famousHikes = [
  ["Preikestolen", "Lysefjord, Rogaland", "Around 4 hours", "Moderate"],
  ["Trolltunga", "Hardanger", "8–12 hours", "Very demanding"],
  ["Kjerag and Kjeragbolten", "Lysefjord, Rogaland", "6–10 hours", "Demanding"],
  ["Besseggen", "Jotunheimen", "6–8 hours", "Demanding"],
  ["Romsdalseggen", "Åndalsnes", "7–8 hours", "Demanding"],
  ["Reinebringen", "Lofoten", "2–3 hours", "Moderate, but extremely steep"],
  ["Ryten and Kvalvika", "Lofoten", "4–6 hours", "Moderate"],
  ["Gaustatoppen", "Telemark", "4–5 hours", "Moderate"],
  ["Dronningstien", "Hardanger", "6–8 hours", "Demanding"],
  ["Galdhøpiggen", "Jotunheimen", "5–10 hours", "Demanding"],
  ["Aurlandsdalen", "Sognefjord region", "6–8 hours", "Moderate to demanding"],
  ["Segla or Hesten", "Senja", "3–5 hours", "Moderate to demanding"],
  ["Dronningruta", "Vesterålen", "5–8 hours", "Demanding"],
  ["Rødøyløva", "Helgeland coast", "2–4 hours", "Moderate"],
  ["Torghatten", "Brønnøysund", "1–2 hours", "Easy to moderate"],
  ["The Seven Sisters", "Sandnessjøen", "From 3 hours to a full day", "Demanding"],
  ["Fløya and Djevelporten", "Svolvær, Lofoten", "3–5 hours", "Demanding"],
  ["Flørli’s 4,444 steps", "Lysefjord", "4–6 hours", "Demanding"],
  ["Fosseråsa and Storsæterfossen", "Geiranger", "3–5 hours", "Moderate"],
  ["Husedalen and the four waterfalls", "Hardanger", "3–6 hours", "Moderate"],
  ["Måtind", "Andøya, Vesterålen", "3–5 hours", "Moderate"],
  ["Ulriken", "Bergen", "2–4 hours", "Moderate"],
  ["Stoltzekleiven", "Bergen", "1–2 hours", "Short, but steep"],
  ["Tromsdalstinden", "Tromsø", "7–10 hours", "Demanding"],
  ["Helgelandstrappa to Øyfjellet", "Mosjøen", "2–4 hours", "Moderate to demanding"],
] as const;

export const metadata = createPageMetadata({
  title: "25 Famous Hikes in Norway: Time, Difficulty & Area",
  description:
    "Compare 25 of Norway’s most famous hikes by area, estimated time and difficulty, from Preikestolen and Trolltunga to Lofoten, Senja and Helgeland.",
  canonical: "/guides/best-hikes-in-norway",
  type: "article",
});

export default function BestHikesInNorwayPage() {
  return (
    <GuideArticleLayout
      title="25 of Norway’s Most Famous Hikes"
      subtitle="From exposed fjord viewpoints and long mountain ridges to short coastal climbs, these are 25 of the Norwegian hikes international visitors most often plan their journeys around."
      category="Hiking in Norway"
      metaLabel="Hiking guide"
      readTime="25 trails"
      lastUpdated="July 2026"
      dateModified="2026-07-31"
      canonicalPath="/guides/best-hikes-in-norway"
      answerBlock={
        <AnswerBlock
          title="Which hikes is Norway best known for?"
          summary="Preikestolen, Trolltunga, Kjerag, Besseggen and Romsdalseggen are among Norway’s best-known mountain hikes. In Northern Norway, Reinebringen, Ryten and Kvalvika, Segla or Hesten, Dronningruta and Rødøyløva are some of the most recognisable choices."
          bullets={[
            "Choose by available time and experience, not only the view.",
            "Consider height exposure, weather, snow, transport, parking and season.",
            "Match the hike to your fitness and the route you are already taking.",
          ]}
        />
      }
      sources={[
        {
          label: "Norwegian Environment Agency — National Tourist Trails",
          href: "https://www.miljodirektoratet.no/ansvarsomrader/friluftsliv/turiststier/nasjonale-turiststier/",
        },
        {
          label: "Visit Norway — Mountain safety",
          href: "https://www.visitnorway.com/safe-travel/mountain-safety/",
        },
        { label: "UT.no — local route information", href: "https://ut.no/" },
        { label: "Yr", href: "https://www.yr.no/" },
        { label: "Varsom", href: "https://www.varsom.no/" },
      ]}
      relatedLinks={[
        {
          label: "Destination",
          title: "Lofoten Islands",
          href: "/destinations/lofoten-islands",
          description: "Place Lofoten hikes within a route that leaves room for weather and parking.",
        },
        {
          label: "Destination",
          title: "Senja",
          href: "/destinations/senja",
          description: "Compare Segla or Hesten with the rest of a slower Senja road trip.",
        },
        {
          label: "Destination",
          title: "Helgeland Coast",
          href: "/destinations/helgeland-coast",
          description: "Build coastal walks around ferry timing and the wider Helgeland journey.",
        },
        {
          label: "Outdoor travel",
          title: "Camping Rules in Norway",
          href: "/guides/camping-rules-in-norway",
          description: "Pair mountain plans with responsible overnight and outdoor choices.",
        },
      ]}
    >
      <h2>10 headline hikes for international visitors</h2>
      <ol className="grid gap-x-8 gap-y-1 border-y border-white/10 py-5 md:grid-cols-2">
        <li>Preikestolen</li>
        <li>Trolltunga</li>
        <li>Kjerag</li>
        <li>Besseggen</li>
        <li>Romsdalseggen</li>
        <li>Reinebringen</li>
        <li>Ryten and Kvalvika</li>
        <li>Dronningstien</li>
        <li>Gaustatoppen</li>
        <li>Segla or Hesten</li>
      </ol>
      <p>
        If this is your first hiking trip to Norway, choose one or two hikes
        that fit naturally into your route instead of planning the entire
        journey around a checklist.
      </p>

      <h2>25 famous hikes in Norway compared</h2>
      <p>
        This is an editorial Trips Norway overview, not an official ranking.
        Times and difficulty levels are approximate. Weather, snow, trail
        conditions, parking, ferries, chosen route and personal experience can
        change the duration and difficulty significantly.
      </p>
      <div className="mt-7 hidden lg:block">
        <table>
          <caption className="sr-only">
            Comparison of 25 famous hikes in Norway by area, estimated time and typical difficulty.
          </caption>
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Hike</th>
              <th scope="col">Area</th>
              <th scope="col">Estimated time</th>
              <th scope="col">Typical difficulty</th>
            </tr>
          </thead>
          <tbody>
            {famousHikes.map(([hike, area, time, difficulty], index) => (
              <tr key={hike}>
                <td>{index + 1}</td>
                <td>{hike}</td>
                <td>{area}</td>
                <td>{time}</td>
                <td>{difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dl className="mt-7 grid gap-3 lg:hidden">
        {famousHikes.map(([hike, area, time, difficulty], index) => (
          <div
            key={hike}
            className="rounded-[0.9rem] border border-white/10 bg-white/[0.025] p-4"
          >
            <dt className="font-serif text-lg leading-tight text-[#f4efe2]">
              {index + 1}. {hike}
            </dt>
            <dd className="mt-3 grid gap-2 text-sm font-light leading-relaxed text-[#f4efe2]/68">
              <span><strong className="font-medium text-[#f4efe2]/82">Area:</strong> {area}</span>
              <span><strong className="font-medium text-[#f4efe2]/82">Estimated time:</strong> {time}</span>
              <span><strong className="font-medium text-[#f4efe2]/82">Typical difficulty:</strong> {difficulty}</span>
            </dd>
          </div>
        ))}
      </dl>

      <h2>Norway’s authorised National Tourist Trails</h2>
      <p>
        As of July 2026, seven trails are authorised as National Tourist
        Trails: Trolltunga, Preikestolen, Kjerag, Besseggen, Fosseråsa,
        Rødøyløva and Torghatten.
      </p>
      <p>
        The authorisation is used for heavily visited trails where visitor
        management, safety, information, nature protection and local value
        creation require particular attention. It is distinct from receiving
        project funding: a trail can receive support without being formally
        authorised.
      </p>
      <p>
        Read the current status from the{" "}
        <a href="https://www.miljodirektoratet.no/ansvarsomrader/friluftsliv/turiststier/nasjonale-turiststier/">
          Norwegian Environment Agency
        </a>
        .
      </p>

      <h2>Best-known hikes in Northern Norway</h2>
      <p>
        Northern Norway combines short coastal climbs with steep mountain
        routes rising directly above fjords, fishing villages and open sea.
        Distances can appear modest, but exposed terrain, changing weather and
        limited parking can make these hikes more demanding than expected.
      </p>
      <ul>
        <li>Reinebringen</li>
        <li>Ryten and Kvalvika</li>
        <li>Segla or Hesten</li>
        <li>Dronningruta</li>
        <li>Måtind</li>
        <li>Rødøyløva</li>
        <li>The Seven Sisters</li>
        <li>Torghatten</li>
        <li>Fløya and Djevelporten</li>
        <li>Helgelandstrappa to Øyfjellet</li>
      </ul>
      <p>
        Use the regional guides for <Link href="/destinations/lofoten-islands">Lofoten</Link>,{" "}
        <Link href="/destinations/senja">Senja</Link>,{" "}
        <Link href="/destinations/helgeland-coast">the Helgeland Coast</Link>{" "}
        and <Link href="/destinations/tromso">Tromsø</Link> to place a hike
        within the journey. The <Link href="/guides/what-to-pack-for-norway">packing guide</Link>{" "}
        and <Link href="/guides/camping-rules-in-norway">camping guide</Link>{" "}
        can help with the practical side of an outdoor trip.
      </p>
      <blockquote>
        <strong>Planning a Northern Norway hiking trip?</strong> Choose hikes
        that fit the road trip you are already taking. Ferry schedules, weather
        and long driving distances often matter more than fitting one
        additional summit into the itinerary.
      </blockquote>

      <h2>Before choosing a hike</h2>
      <p>
        The time estimates on this page are planning guides, not guarantees.
        Conditions in the Norwegian mountains can change quickly, and snow can
        remain on high routes well into summer.
      </p>
      <ul>
        <li>Check current local trail information before setting out.</li>
        <li>Check the weather forecast at <a href="https://www.yr.no/">Yr</a>.</li>
        <li>Check <a href="https://www.varsom.no/">Varsom</a> for avalanche, flood, landslide or unsafe-ice hazards.</li>
        <li>Confirm closures, seasonal restrictions, parking and transport before departure.</li>
        <li>Bring suitable clothing, food, water, a map and the safety equipment the route requires.</li>
        <li>Turn around before conditions or fitness make the situation unsafe.</li>
        <li>Use a local guide when your experience or the conditions call for one.</li>
      </ul>
      <blockquote>
        <strong>A famous hike is not automatically the right hike for today’s conditions.</strong>
      </blockquote>
      <p>
        Read <a href="https://www.visitnorway.com/safe-travel/mountain-safety/">Visit Norway’s mountain-safety guidance</a>{" "}
        before departure, then apply the same care to overnight stops in the{" "}
        <Link href="/guides/camping-rules-in-norway">camping guide</Link>.
      </p>

      <h2>Sources and editorial note</h2>
      <p>
        This is an editorial Trips Norway overview. Times are approximate and
        typical difficulty levels are simplified comparisons, not official
        grades. Current local advice, route information and safety notices
        always take precedence over this page.
      </p>
      <ul>
        <li>Norwegian Environment Agency — National Tourist Trails</li>
        <li>Visit Norway — Mountain safety</li>
        <li>UT.no or DNT for checked local route information</li>
        <li>Local destination and land-management pages where needed</li>
      </ul>
    </GuideArticleLayout>
  );
}
