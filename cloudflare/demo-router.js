// Cloudflare Pages deploys this repository from GitHub. The Worker only mounts
// that Pages site below /demo; it never serves content from GitHub itself.
const PAGES_ORIGIN = "https://troop2eg-demo.pages.dev";
const DEMO_PREFIX = "/demo";

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const requestUrl = new URL(request.url);
    const pagePath = requestUrl.pathname === DEMO_PREFIX || requestUrl.pathname === `${DEMO_PREFIX}/`
      ? "/"
      : requestUrl.pathname.slice(DEMO_PREFIX.length);

    const upstreamUrl = new URL(PAGES_ORIGIN);
    upstreamUrl.pathname = pagePath;
    upstreamUrl.search = requestUrl.search;

    const upstreamRequest = new Request(upstreamUrl, request);
    const response = await fetch(upstreamRequest);
    return response;
  },
};
