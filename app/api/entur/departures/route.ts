import { getFerryDepartures } from "@/src/lib/entur/client";

export async function GET() {
  try {
    const departures = await getFerryDepartures();

    return Response.json(departures, {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=60",
      },
    });
  } catch {
    return Response.json(
      { error: "Live departure data is temporarily unavailable." },
      {
        status: 502,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
