import { NextResponse, type NextRequest } from "next/server";

const INDEXABLE_HOSTS = new Set(["tripsnorway.com", "www.tripsnorway.com"]);
const CANONICAL_HOST = "tripsnorway.com";

export function middleware(request: NextRequest) {
  const host =
    request.headers.get("host")?.toLowerCase().replace(/:\d+$/, "") ?? "";

  if (host === "www.tripsnorway.com") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.hostname = CANONICAL_HOST;
    redirectUrl.protocol = "https:";
    redirectUrl.port = "";

    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = NextResponse.next();

  if (!INDEXABLE_HOSTS.has(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\..*).*)",
  ],
};
