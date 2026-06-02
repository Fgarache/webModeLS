# AGENTS.md

## Project Overview

This is a Vite + React SPA for WebModeLS. The app uses custom URL-based routing in [src/App.jsx](src/App.jsx) instead of React Router, and Firebase for Auth, Realtime Database, and Storage.

## Where to Look First

- [src/main.jsx](src/main.jsx) and [src/App.jsx](src/App.jsx) for app boot and routing.
- [src/auth/AuthContext.jsx](src/auth/AuthContext.jsx) and [src/auth/firebaseConfig.js](src/auth/firebaseConfig.js) for auth and Firebase setup.
- [src/dashboard/apps/apps.roles.config.js](src/dashboard/apps/apps.roles.config.js) and [src/config/appsConfig.js](src/config/appsConfig.js) for role-gated app access.
- [data/README.md](data/README.md) for Firebase rule intent and deployment notes.
- [.env.example](.env.example) for required Vite env vars.

## Working Conventions

- Keep routing changes aligned with the pathname map in [src/App.jsx](src/App.jsx); the app uses `window.history.pushState` and `popstate` handling.
- Preserve the role model: `perfil` is public, and other dashboard apps are gated through [src/dashboard/apps/apps.roles.config.js](src/dashboard/apps/apps.roles.config.js).
- Treat Firebase fields guarded by rules as read-only from the client unless the repo already updates them in the auth flow.
- Keep UI copy in Spanish unless you are editing a clearly external-facing or technical file.
- Prefer small, localized changes inside the relevant app folder under [src/dashboard/apps/](src/dashboard/apps/) or the page folder under [src/](src/).

## Environment And Validation

- Use the Firebase env keys defined in [.env.example](.env.example); they are read in [src/auth/firebaseConfig.js](src/auth/firebaseConfig.js).
- Run `npm run build` before finishing changes that affect the app shell, routing, or shared config.
- Use `npm run dev` for local manual checks when route or auth behavior changes.
- Firebase rule context lives in [data/README.md](data/README.md); deploy rules with `firebase deploy --only database,storage` when needed.

## Notes For Agents

- Do not duplicate the rule explanations from [data/README.md](data/README.md); link to it instead.
- If you need to add more guidance later, keep it specific to a repeated workflow or a non-obvious repo convention.