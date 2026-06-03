# AGENTS.md

## Project Overview

This is a Vite + React SPA for WebModeLS. The app uses custom URL-based routing in [src/App.jsx](src/App.jsx) instead of React Router, and Firebase for Auth, Realtime Database, and Storage.
There is no automated test suite in this repo, so validation is command-based plus manual flows.

## Where to Look First

- [src/main.jsx](src/main.jsx) and [src/App.jsx](src/App.jsx) for app boot and routing.
- [src/auth/AuthContext.jsx](src/auth/AuthContext.jsx) and [src/auth/firebaseConfig.js](src/auth/firebaseConfig.js) for auth and Firebase setup.
- [src/dashboard/Welcome.jsx](src/dashboard/Welcome.jsx) for dashboard shell state, app mounting, and profile header behavior.
- [src/dashboard/apps/apps.roles.config.js](src/dashboard/apps/apps.roles.config.js) and [src/config/appsConfig.js](src/config/appsConfig.js) for role-gated app access.
- [data/README.md](data/README.md) for Firebase rule intent and deployment notes.
- [.env.example](.env.example) for required Vite env vars.

## Working Conventions

- Keep routing changes aligned with the pathname map in [src/App.jsx](src/App.jsx); the app uses `window.history.pushState` and `popstate` handling.
- Keep both maps in sync in [src/App.jsx](src/App.jsx): `PATH_TO_APP` (path -> app id) and `APP_TO_PATH` (app id -> path).
- Preserve the role model: `perfil` is public, and other dashboard apps are gated through [src/dashboard/apps/apps.roles.config.js](src/dashboard/apps/apps.roles.config.js).
- Treat Firebase fields guarded by rules as read-only from the client unless the repo already updates them in the auth flow.
- Do not change Firebase rule semantics in instructions; link to [data/README.md](data/README.md) and [data/database.rules.json](data/database.rules.json) instead.
- Keep UI copy in Spanish unless you are editing a clearly external-facing or technical file.
- Prefer small, localized changes inside the relevant app folder under [src/dashboard/apps/](src/dashboard/apps/) or the page folder under [src/](src/).

## Adding Or Updating Apps

- Register app metadata in [src/config/appsConfig.js](src/config/appsConfig.js) (`id`, `icon`, `titulo`, `rolesPermitidos`).
- Update role access in [src/dashboard/apps/apps.roles.config.js](src/dashboard/apps/apps.roles.config.js) and keep `publicApps` aligned.
- Add or update route mapping in [src/App.jsx](src/App.jsx) for both direction maps.
- Mount the app in [src/dashboard/Welcome.jsx](src/dashboard/Welcome.jsx) and verify back-navigation behavior.
- Verify component contract before wiring props; some apps use props from `Welcome`, while others read auth data directly via hooks.

## Environment And Validation

- Use the Firebase env keys defined in [.env.example](.env.example); they are read in [src/auth/firebaseConfig.js](src/auth/firebaseConfig.js).
- Run `npm run build` before finishing changes that affect the app shell, routing, or shared config.
- Use `npm run dev` for local manual checks when route or auth behavior changes.
- Use `npm run preview` to validate the production build locally when behavior differs from dev mode.
- Build output is `dist` (used by [netlify.toml](netlify.toml) and [vercel.json](vercel.json)).
- For Firebase CLI deploys, keep [.firebaserc](.firebaserc) and [firebase.json](firebase.json) consistent with the target project.
- Firebase rule context lives in [data/README.md](data/README.md); deploy rules with `firebase deploy --only database,storage` when needed.

## Notes For Agents

- Do not duplicate the rule explanations from [data/README.md](data/README.md); link to it instead.
- Public profile links currently point to `https://lindasgt.com/{username}` in [src/App.jsx](src/App.jsx) and [src/dashboard/Welcome.jsx](src/dashboard/Welcome.jsx); preserve this behavior unless explicitly asked to change it.
- In [src/dashboard/Welcome.jsx](src/dashboard/Welcome.jsx), status text visibility depends on a 24-hour window (`STATUS_MAX_AGE`), so profile header changes should preserve timestamp logic.
- If you need to add more guidance later, keep it specific to a repeated workflow or a non-obvious repo convention.