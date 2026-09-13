# Deployment and recovery record

## Captured configuration — 2026-09-13

This snapshot was recorded before the `/demo` deployment was added.

- Zone: `troop2eg.org` (`57596881e878e78ed5b92aefb8706fdb`)
- SSL mode: `full`
- Apex DNS: proxied CNAME `troop2eg.org` → `www.troop2eg.com`
- `www` DNS: proxied CNAME `www.troop2eg.org` → `troop2eg.com`
- Worker routes: none
- Dynamic redirect rule: `/wreaths` → `https://omt.sffwa.com/minisite/troop2eg` (302; query string preserved)

## Intended deployment

- This repository is deployed automatically by Cloudflare Pages as `troop2eg-demo` from its `main` branch.
- The Pages origin is `https://troop2eg-demo.pages.dev`.
- A Worker serves that Pages deployment only for `/demo` and `/demo/*` on the apex and `www` hostnames.
- All other paths redirect to the existing TroopWebHost site.
- The Worker is a path router only; it must never retrieve website content directly from GitHub.

## Rollback

1. Disable the two `/demo*` Worker routes. This immediately returns `/demo` traffic to the pre-deployment origin behavior.
2. Remove the non-demo redirect rule only if restoring the original CNAME-based behavior is intentional.
3. Restore the DNS and SSL values above only if they were changed separately.

No credentials or API tokens belong in this repository.
