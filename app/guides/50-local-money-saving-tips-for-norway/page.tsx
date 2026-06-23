import type { Metadata } from "next";

import { GuideArticleLayout } from "@/src/components/guides/GuideArticleLayout";

type Tip = {
  number: number;
  title: string;
  details: readonly string[];
};

type TipSection = {
  title: string;
  intro?: string;
  tips: readonly Tip[];
};

const tipSections: readonly TipSection[] = [
  {
    title: "Food & Groceries",
    intro:
      "Food costs can swing a Norway budget fast. The biggest savings usually come from where you shop and how you structure everyday meals.",
    tips: [
      {
        number: 1,
        title: "Shop at Kiwi, Rema 1000 and Coop Extra",
        details: [
          "These chains are usually better for everyday prices and reliable basic groceries.",
          "Meny, Coop Mega, Joker and smaller convenience stores are often more expensive for similar products.",
        ],
      },
      {
        number: 2,
        title: "Look for budget/private-label brands",
        details: [
          "Check shelves for First Price, Eldorado, R, Xtra and each store's own basic labels.",
          "Store-brand staples can reduce food costs significantly over a one- or two-week trip.",
        ],
      },
      {
        number: 3,
        title: "Make breakfast yourself",
        details: [
          "Simple grocery breakfasts are much cheaper than daily cafe stops.",
          "If your room has even a small kitchen corner, use it every morning.",
        ],
      },
      {
        number: 4,
        title: "Pack a simple lunch before leaving for the day",
        details: [
          "A matpakke (packed lunch) is one of the easiest local habits for avoiding expensive tourist lunch zones.",
          "Bread, cheese, fruit and thermos coffee often beat buying food in town or at roadside stops.",
        ],
      },
      {
        number: 5,
        title: "Buy bread from grocery stores, not cafes",
        details: [
          "Bread and basic pastries are usually cheaper in supermarkets than in cafe counters.",
          "Save cafe spending for places where the experience itself matters.",
        ],
      },
      {
        number: 6,
        title: "Use Too Good To Go",
        details: [
          "In cities, Too Good To Go can help you find discounted surplus food from bakeries and shops.",
          "Availability varies by location and day, but it can deliver strong value when timing works.",
        ],
      },
      {
        number: 7,
        title: "Eat your main restaurant meal at lunch",
        details: [
          "Lunch offers are often cheaper than equivalent dinner menus.",
          "You still get a quality meal but reduce the daily restaurant hit.",
        ],
      },
      {
        number: 8,
        title: "Choose bakeries carefully",
        details: [
          "Norwegian bakeries can be excellent, but impulse pastry-and-coffee combos add up quickly.",
          "Use bakeries strategically instead of treating them as default meal stops.",
        ],
      },
      {
        number: 9,
        title: "Avoid buying food at gas stations unless necessary",
        details: [
          "Gas stations are convenient but usually expensive for snacks, drinks and basic meal items.",
          "Stock up in towns before long scenic drives.",
        ],
      },
      {
        number: 10,
        title: "Buy local basics instead of imported snacks",
        details: [
          "Imported specialty products often carry noticeably higher prices.",
          "Local basics are usually the better-value route for daily supplies.",
        ],
      },
    ],
  },
  {
    title: "Drinks & Water",
    intro:
      "Drink choices are a classic budget leak. Norway rewards simple local habits.",
    tips: [
      {
        number: 11,
        title: "Drink tap water",
        details: [
          "Norwegian tap water is safe, clean and usually excellent.",
          "A reusable bottle can save a meaningful amount across a full trip.",
        ],
      },
      {
        number: 12,
        title: "Avoid bottled water",
        details: [
          "Buying bottled water repeatedly is an easy way to overspend on something you do not need.",
          "Refill from tap sources in hotels, rentals and public spaces.",
        ],
      },
      {
        number: 13,
        title: "Return bottles and cans for pant",
        details: [
          "Pant is Norway's bottle/can deposit system.",
          "Return containers in supermarket machines and claim the deposit back as cash or a receipt discount.",
        ],
      },
      {
        number: 14,
        title: "Buy coffee from convenience-store deals instead of cafes",
        details: [
          "When you need caffeine on the move, chain convenience deals can be cheaper than cafe pricing.",
          "Use cafes for atmosphere moments, not every coffee stop.",
        ],
      },
      {
        number: 15,
        title: "Be careful with alcohol costs",
        details: [
          "Alcohol is heavily taxed in Norway and bar prices are far above supermarket levels.",
          "Beer and low-alcohol drinks are sold in supermarkets, while wine and spirits are sold through Vinmonopolet.",
        ],
      },
    ],
  },
  {
    title: "Transport",
    intro:
      "Transport planning is one of the biggest differences between an expensive and efficient Norway trip.",
    tips: [
      {
        number: 16,
        title: "Use Entur for public transport planning",
        details: [
          "Entur helps combine buses, trains, ferries, trams, metro and local boats in one planning flow.",
          "Use it early when building your itinerary, not only on travel day.",
        ],
      },
      {
        number: 17,
        title: "Use regional transport apps",
        details: [
          "Regional apps like Ruter, Skyss, AtB, Reis Nordland and Svipper often provide local schedules, ticket options and disruption updates.",
          "Install the relevant app before you arrive in each region.",
        ],
      },
      {
        number: 18,
        title: "Buy tickets before boarding",
        details: [
          "Some routes are cheaper or smoother when tickets are bought in advance through apps.",
          "It also reduces boarding stress in unfamiliar transport systems.",
        ],
      },
      {
        number: 19,
        title: "Use day passes if you take several trips",
        details: [
          "Day passes can be better value than multiple single fares in city-based days.",
          "Check break-even pricing quickly before defaulting to single tickets.",
        ],
      },
      {
        number: 20,
        title: "Avoid taxis whenever possible",
        details: [
          "Taxis in Norway are expensive and can distort your daily budget quickly.",
          "Use walking, buses, trams, metro or trains first when practical.",
        ],
      },
      {
        number: 21,
        title: "In Oslo, compare Vy/local trains with airport express options",
        details: [
          "Airport express services are convenient, but regular train options can be cheaper.",
          "Check route time differences before paying premium rates automatically.",
        ],
      },
      {
        number: 22,
        title: "Book train tickets early",
        details: [
          "Long-distance train pricing can be much better when bought ahead.",
          "Last-minute booking often removes lower fare categories.",
        ],
      },
      {
        number: 23,
        title: "Travel outside peak season",
        details: [
          "Shoulder-season travel can reduce both transport and accommodation pressure.",
          "It also improves availability on popular routes.",
        ],
      },
      {
        number: 24,
        title: "Do not rent a car for city-only trips",
        details: [
          "For Oslo, Bergen, Trondheim or Tromso city-focused trips, public transport is often simpler and cheaper.",
          "City parking, tolls and congestion can make car rental poor value.",
        ],
      },
      {
        number: 25,
        title: "If renting a car, plan tolls and ferries in advance",
        details: [
          "Rental cost alone is not the full picture: tolls, ferries, parking and fuel matter.",
          "Price road segments and ferry crossings before finalizing a driving route.",
        ],
      },
      {
        number: 26,
        title: "Use ferries as transport, not sightseeing cruises",
        details: [
          "Regular ferries often give beautiful scenery for far less than dedicated sightseeing cruises.",
          "When route timing works, treat them as functional scenic legs.",
        ],
      },
      {
        number: 27,
        title: "Consider buses for long-distance routes",
        details: [
          "Buses can be competitive on cost where train routes are limited or expensive.",
          "Compare both options before locking your long transfer days.",
        ],
      },
      {
        number: 28,
        title: "Walk more in cities",
        details: [
          "Many urban core areas are very walkable and scenic.",
          "Walking cuts transport spending and often improves travel experience.",
        ],
      },
    ],
  },
  {
    title: "Accommodation",
    intro:
      "Where and how you stay determines a large part of total Norway costs.",
    tips: [
      {
        number: 29,
        title: "Stay slightly outside the most famous areas",
        details: [
          "One bus stop, ferry stop or nearby town away can reduce nightly rates materially.",
          "Balance savings with travel time, especially for short stays.",
        ],
      },
      {
        number: 30,
        title: "Compare cabins, hostels, guesthouses and apartments",
        details: [
          "Hotels are only one part of the market.",
          "Cabins and simple guesthouses can deliver better value depending on group size and season.",
        ],
      },
      {
        number: 31,
        title: "Choose accommodation with a kitchen",
        details: [
          "A kitchen can save more overall than a slightly cheaper room without cooking options.",
          "This matters most on multi-day stays and road trips.",
        ],
      },
      {
        number: 32,
        title: "Check whether breakfast is included",
        details: [
          "Breakfast-included rates can be good value in Norway.",
          "Always compare total daily food impact, not only the room price line.",
        ],
      },
      {
        number: 33,
        title: "Book refundable early, then re-check prices",
        details: [
          "Refundable bookings help lock availability while keeping flexibility.",
          "Re-checking prices later can uncover better deals without risking no-room scenarios.",
        ],
      },
      {
        number: 34,
        title: "Avoid arriving without accommodation in peak season",
        details: [
          "In high season, last-minute inventory can be limited and expensive.",
          "Secure core nights in advance for Lofoten, fjords and other high-demand regions.",
        ],
      },
      {
        number: 35,
        title: "Use campsites strategically",
        details: [
          "Many campsites offer cabins, shared kitchens, laundry and showers.",
          "They can be practical value hubs for road trips and nature-focused travel.",
        ],
      },
    ],
  },
  {
    title: "Nature, Hiking & Free Experiences",
    intro:
      "Norway's best value often comes from free nature rather than stacked paid activities.",
    tips: [
      {
        number: 36,
        title: "Build the trip around free nature",
        details: [
          "Viewpoints, beaches, fjords, forests, trails, waterfalls and scenic roads are often free.",
          "Design your itinerary around these strengths first.",
        ],
      },
      {
        number: 37,
        title: "Learn the right to roam rules",
        details: [
          "Allemannsretten (right to roam) gives broad access but comes with responsibilities.",
          "Understanding the rules helps you travel responsibly and avoid local friction.",
        ],
      },
      {
        number: 38,
        title: "Do not treat wild camping as free accommodation everywhere",
        details: [
          "Some popular areas are under pressure and local rules may be stricter.",
          "Check local guidance before assuming every scenic spot is a valid camp location.",
        ],
      },
      {
        number: 39,
        title: "Bring proper hiking gear from home",
        details: [
          "Buying outdoor gear in Norway can be expensive.",
          "Pack layers and core hiking items before departure whenever possible.",
        ],
      },
      {
        number: 40,
        title: "Choose one paid activity, then surround it with free days",
        details: [
          "Instead of multiple expensive tours back-to-back, use one highlight activity and several free nature days.",
          "This keeps budget and energy balanced.",
        ],
      },
      {
        number: 41,
        title: "Use visitor centres for free advice",
        details: [
          "Local visitor centres can suggest practical low-cost routes, weather-aware alternatives and lesser-known viewpoints.",
          "Good advice can save both money and time.",
        ],
      },
      {
        number: 42,
        title: "Respect parking rules near popular hikes",
        details: [
          "Improper parking can lead to fines and tension in local communities.",
          "Use designated areas and factor parking fees into daily planning.",
        ],
      },
    ],
  },
  {
    title: "City Passes, Museums & Attractions",
    intro:
      "City cards and attraction bundles can be good value, but only with a realistic usage plan.",
    tips: [
      {
        number: 43,
        title: "Calculate whether city cards are worth it",
        details: [
          "Cards like Oslo Pass and Bergen Card only pay off if you use the included transport and attractions.",
          "Do a quick cost comparison with your actual itinerary before buying.",
        ],
      },
      {
        number: 44,
        title: "Group paid museums on the same day",
        details: [
          "Stacking paid entries within one pass-validity window can increase card value.",
          "This also leaves other days open for free walks and viewpoints.",
        ],
      },
      {
        number: 45,
        title: "Look for free museums, churches and viewpoints",
        details: [
          "Outdoor sculpture parks, harbour walks, old neighborhoods and public viewpoints are often free.",
          "Mix these with selected paid attractions for better overall value.",
        ],
      },
      {
        number: 46,
        title: "Check family and child pricing",
        details: [
          "Family tickets and child discounts can materially change attraction costs.",
          "Always check official pricing pages before buying standard adult tickets.",
        ],
      },
    ],
  },
  {
    title: "Shopping, Practical Costs & Local Habits",
    intro:
      "Small practical choices make a cumulative difference over a longer Norway itinerary.",
    tips: [
      {
        number: 47,
        title: "Bring reusable bags",
        details: [
          "Grocery bags cost money in Norway and repeated purchases add up.",
          "Keep one foldable bag with you day-to-day.",
        ],
      },
      {
        number: 48,
        title: "Use card payments and avoid unnecessary cash exchange",
        details: [
          "Norway is highly card-friendly, even for small purchases.",
          "Frequent cash exchange can add avoidable fees.",
        ],
      },
      {
        number: 49,
        title: "Do laundry instead of overpacking or buying clothes",
        details: [
          "On longer trips, one laundry cycle can be cheaper than emergency clothing purchases.",
          "Many campsites and apartments provide laundry access.",
        ],
      },
      {
        number: 50,
        title: "Ask locals for the normal option, not the tourist option",
        details: [
          "The best money-saving question is simple: What would locals do?",
          "Locals often know practical alternatives for meals, transport and daily shopping.",
        ],
      },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "50 Local Money-Saving Tips for Norway | Practical Norway Travel Guide",
  description:
    "A practical guide for tourists visiting Norway, with 50 local-style money-saving tips for groceries, transport, accommodation, ferries, hiking, city passes and everyday travel costs.",
  keywords: [
    "money saving tips Norway",
    "Norway budget travel tips",
    "how to save money in Norway",
    "cheap travel Norway",
    "Norway tourist budget tips",
    "local Norway travel tips",
    "Norway travel costs",
  ],
  alternates: {
    canonical: "/guides/50-local-money-saving-tips-for-norway",
  },
};

export default function LocalMoneySavingTipsForNorwayPage() {
  return (
    <GuideArticleLayout
      title="50 Local Money-Saving Tips for Norway"
      subtitle="A practical guide for tourists who want to experience Norway without burning through their travel budget."
      category="Money & Budget"
      readTime="12 min read"
      lastUpdated="May 2026"
      canonicalPath="/guides/50-local-money-saving-tips-for-norway"
      sources={[
        {
          label: "Visit Norway",
          href: "https://www.visitnorway.com/",
        },
        {
          label: "Entur",
          href: "https://entur.no/",
        },
        {
          label: "Ruter",
          href: "https://ruter.no/en/",
        },
        {
          label: "Vy",
          href: "https://www.vy.no/en",
        },
        {
          label: "Visit Oslo",
          href: "https://www.visitoslo.com/en/",
        },
        {
          label: "Visit Bergen",
          href: "https://en.visitbergen.com/",
        },
        {
          label: "Too Good To Go",
          href: "https://www.toogoodtogo.com/",
        },
      ]}
      relatedLinks={[
        {
          label: "Budget",
          title: "How Expensive Is Norway for Tourists?",
          href: "/guides/how-expensive-is-norway-for-tourists",
          description: "Compare the costs before you decide where to save and where to spend.",
        },
        {
          label: "Transport",
          title: "How to Travel Northern Norway Without a Car",
          href: "/guides/how-to-travel-northern-norway-without-a-car",
          description: "Cut transport costs by leaning on buses, ferries and city bases.",
        },
        {
          label: "Planning",
          title: "Norway Ferry Guide for Tourists",
          href: "/guides/norway-ferry-guide-for-tourists",
          description: "Build ferry crossings into the budget before the route is fixed.",
        },
      ]}
    >
      <h2>Intro</h2>
      <p>
        Norway is not a cheap country, but it is possible to travel smarter by
        behaving less like a rushed tourist and more like a local: using public
        transport, buying food in the right places, avoiding unnecessary taxis,
        choosing nature-based experiences and understanding the small systems
        that save Norwegians money every day.
      </p>

      {tipSections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          {section.intro ? <p>{section.intro}</p> : null}
          <div className="mt-7 space-y-8">
            {section.tips.map((tip) => (
              <div key={tip.number}>
                <h3>
                  {tip.number}. {tip.title}
                </h3>
                {tip.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2>Quick Local Cheat Sheet</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[38rem]">
          <thead>
            <tr>
              <th>Need</th>
              <th>Smart local choice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cheap groceries</td>
              <td>Kiwi, Rema 1000, Coop Extra</td>
            </tr>
            <tr>
              <td>Cheap food rescue</td>
              <td>Too Good To Go</td>
            </tr>
            <tr>
              <td>Public transport planning</td>
              <td>Entur</td>
            </tr>
            <tr>
              <td>Oslo transport</td>
              <td>Ruter</td>
            </tr>
            <tr>
              <td>Bergen/Vestland transport</td>
              <td>Skyss</td>
            </tr>
            <tr>
              <td>Northern Norway local routes</td>
              <td>Reis Nordland, Svipper and local operators</td>
            </tr>
            <tr>
              <td>Free drink</td>
              <td>Tap water</td>
            </tr>
            <tr>
              <td>Bottle/can refund</td>
              <td>Pant machines in supermarkets</td>
            </tr>
            <tr>
              <td>Budget meal style</td>
              <td>Matpakke / packed lunch</td>
            </tr>
            <tr>
              <td>Best value trip style</td>
              <td>Fewer paid tours, more nature</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Suggested Signup Hook</h2>
      <div className="mt-6 rounded-[1rem] border border-[#d8c9a7]/24 bg-[#d8c9a7]/6 p-5 sm:p-6">
        <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#d8c9a7]/84">
          Downloadable Guide
        </p>
        <p className="mt-3 text-lg font-light leading-[1.6] text-[#f4efe2]/86 sm:text-xl">
          Download the free guide: 50 Local Money-Saving Tips for Norway
        </p>
        <p className="mt-3 text-base font-light leading-[1.8] text-[#f4efe2]/72">
          Learn how locals avoid tourist prices on food, transport, ferries,
          hiking, city travel and road trips before your first expensive
          mistake.
        </p>
      </div>

      <h2>Useful Official Links</h2>
      <ul>
        <li>
          <a
            href="https://www.visitnorway.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Norway
          </a>
        </li>
        <li>
          <a href="https://entur.no/" target="_blank" rel="noopener noreferrer">
            Entur
          </a>
        </li>
        <li>
          <a
            href="https://ruter.no/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ruter
          </a>
        </li>
        <li>
          <a
            href="https://www.vy.no/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vy
          </a>
        </li>
        <li>
          <a
            href="https://www.visitoslo.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Oslo
          </a>
        </li>
        <li>
          <a
            href="https://en.visitbergen.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Bergen
          </a>
        </li>
        <li>
          <a
            href="https://www.toogoodtogo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Too Good To Go
          </a>
        </li>
      </ul>
    </GuideArticleLayout>
  );
}
