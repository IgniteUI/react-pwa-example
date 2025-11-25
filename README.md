React PWA Dashboard (Ignite UI)
================================

Modern React PWA dashboard built with Ignite UI for React (data grid + pie chart), Vite, and React Router. The sample now includes a manifest, installable icons, and a cache-first service worker for basic offline support.

Live application - https://igniteui.github.io/react-pwa-example

This project was generated with [App Builder Code Gen](https://www.appbuilder.dev/platform).

What's inside
-------------
- React 19 + Vite 7 for fast HMR and optimized builds.
- Ignite UI components (`IgrGrid`, `IgrPieChart`, `IgrNavbar`) rendering support ticket data from hooks.
- React Router v7 layout with a support dashboard page.
- TypeScript, ESLint, Vitest configuration baked in.

Quick start
-----------
1) Install dependencies  
`npm install`

2) Run the dev server (Vite)  
`npm run start`  
Opens at `http://localhost:3003` (or the port Vite assigns).

3) Production build  
`npm run build`

4) Preview the build output  
`npm run preview`

Testing & linting
-----------------
- Unit tests: `npm run test`
- Lint: `npm run lint`

Project structure (key paths)
-----------------------------
- `src/main.tsx`: Entry point, router initialization, service worker registration.
- `src/app/app.tsx`: Layout shell with navbar and routed outlet.
- `src/app/app-routes.tsx`: Route definitions (redirect + support page).
- `src/app/support/support.tsx`: Pie chart and grid using Ignite UI components.
- `public/static-data`: Mock datasets consumed by hooks.
- `public/manifest.webmanifest`, `public/icons/`: PWA manifest and installable icons.
- `public/service-worker.js`: Cache-first service worker.
- `vite.config.ts`: Vite configuration.

PWA notes
---------
- Serve over HTTPS to enable installation and offline caching.
- The service worker caches navigation requests and static assets; update `CACHE_NAME` in `public/service-worker.js` when you change caching behavior.
- Adjust `import.meta.env.VITE_BASENAME` if hosting under a subpath.

Deployment tips
---------------
- Build with `npm run build`; deploy the `dist/` folder to your static host/CDN.
- If your environment requires licensed Ignite UI packages, run `npm run infragistics-login` to authenticate against the licensed feed.
