const GITHUB_ORIGIN = "https://raw.githubusercontent.com/rcollette/troop2egorg/main";
const DEMO_PREFIX = "/demo";

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const requestUrl = new URL(request.url);
    const upstreamUrl = new URL(GITHUB_ORIGIN);

    const pagePath = requestUrl.pathname === DEMO_PREFIX || requestUrl.pathname === `${DEMO_PREFIX}/`
      ? "/index.html"
      : requestUrl.pathname.slice(DEMO_PREFIX.length);

    upstreamUrl.pathname = pagePath;

    const upstreamRequest = new Request(upstreamUrl, request);
    const response = await fetch(upstreamRequest);
    return response;
  },
};
