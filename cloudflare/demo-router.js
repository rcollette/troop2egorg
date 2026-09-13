const PAGES_ORIGIN = "https://troop2eg-demo.pages.dev";
const DEMO_PREFIX = "/demo";

export default {
  async fetch(request) {
    const requestUrl = new URL(request.url);
    const upstreamUrl = new URL(PAGES_ORIGIN);

    const pagePath = requestUrl.pathname === DEMO_PREFIX
      ? "/"
      : requestUrl.pathname.slice(DEMO_PREFIX.length) || "/";

    upstreamUrl.pathname = pagePath;
    upstreamUrl.search = requestUrl.search;

    const upstreamRequest = new Request(upstreamUrl, request);
    const response = await fetch(upstreamRequest);
    return response;
  },
};
