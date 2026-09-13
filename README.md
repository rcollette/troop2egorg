# Troop 2 East Greenwich demo site

This is a small, static site intended for deployment at `www.troop2eg.org/demo`.

## Editing guide

- Edit page copy and links in `index.html`.
- Edit reusable visual styles in `assets/css/site.css`.
- Put shared browser behavior in `assets/js/site.js`.
- Place image, font, and icon files under `assets/`, then reference them with relative paths.

The HTML deliberately has no embedded style or script blocks.

## Content source

The home page is based on the content selected from the public TroopWebHost page on 2026-09-13. Its ten referenced images are stored locally in `assets/images/`.

## Formatting

- Requires Node.js `24.21.0` (the current LTS release line); `.nvmrc` selects it for nvm users.
- `npm run format:check` checks formatting and exits nonzero when formatting is needed.
- `npm run format:write` formats supported files in place.
- Both scripts use Prettier's experimental fast CLI mode.
- `npm install` activates the repository's pre-commit hook. It formats supported staged files and adds those formatting changes to the commit.
- GitHub Actions runs `format:check` on every pull request.
