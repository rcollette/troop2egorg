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

- This repository is deployed by Cloudflare Pages as `troop2eg-demo`.
- A Worker serves that Pages deployment only for `/demo` and `/demo/*` on the apex and `www` hostnames.
- All other paths redirect to the existing TroopWebHost site.

## Rollback

1. Disable the two `/demo*` Worker routes.
2. Remove the non-demo redirect rule.
3. Restore the DNS and SSL values above if they were changed.

No credentials or API tokens belong in this repository.
