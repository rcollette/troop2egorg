# Deployment and recovery record

## Captured configuration — 2026-09-13

- Zone: `troop2eg.org` (`57596881e878e78ed5b92aefb8706fdb`)
- SSL mode: `full`
- Apex DNS: proxied CNAME `troop2eg.org` → `www.troop2eg.com`
- `www` DNS: proxied CNAME `www.troop2eg.org` → `troop2eg.com`
- Dynamic redirect rule: `/wreaths` → `https://omt.sffwa.com/minisite/troop2eg` (302; query string preserved)

## Live `/demo` deployment

- Cloudflare Pages project: `troop2eg-demo`
- Git source: `rcollette/troop2egorg`, branch `main`
- Production Pages origin: `https://troop2eg-demo.pages.dev`
- First successful Git deployment: `fb1dfd3eb654e262f6816eb14fe0a165cd27607e`
- Worker: `troop2eg-demo-router`
- Active Worker routes:
  - `www.troop2eg.org/demo*` (`52da0b3d39f64f66bc1078d1cef8d7a4`)
  - `troop2eg.org/demo*` (`71c8a715cc384d8fb8d00a696b7b0bf0`)
- The zone redirect rule sends every path not starting with `/demo` to `https://www.troopwebhost.org/Troop2EastGreenwich/` with a 302 status and the original query string preserved.

## Intended deployment

- This repository is deployed automatically by Cloudflare Pages as `troop2eg-demo` from its `main` branch.
- The Pages origin is `https://troop2eg-demo.pages.dev`.
- A Worker serves that Pages deployment only for `/demo` and `/demo/*` on the apex and `www` hostnames.
- All other paths redirect to the existing TroopWebHost site.
- The Worker is a path router only; it must never retrieve website content directly from GitHub.

## Rollback

1. Disable the two `/demo*` Worker routes listed above. This immediately returns `/demo` traffic to the pre-deployment origin behavior.
2. Remove the non-demo redirect rule only if restoring the original CNAME-based behavior is intentional.
3. Restore the DNS and SSL values above only if they were changed separately.

No credentials or API tokens belong in this repository.
