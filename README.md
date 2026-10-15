# Launch check

A minimal Next.js App Router deployment test with TypeScript, a responsive home page, and a dynamic health endpoint. No database, external services, or environment variables required.

## Local development

Use Node.js 22 or newer and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Visit `/api/health` for a JSON response with `status: "ok"` and the current server timestamp.

## Validate and run production

```sh
pnpm typecheck
pnpm build
pnpm start
```

## Deploy

Import this folder's Git repository into a Next.js-compatible host such as Vercel. Select the Next.js preset, the repository root, `pnpm build` as the build command, and Node.js 22 or newer. No environment variables are needed.

For a Node.js server, run `pnpm install --frozen-lockfile`, `pnpm build`, then `pnpm start`. Set `PORT` through the hosting environment if needed (default: 3000). The server must stay running; static-only hosting does not support this app's health endpoint.

After deployment, check the home page and `/api/health`. Reload the health endpoint to confirm its timestamp changes. A successful response confirms the application server responds; it does not monitor external services.

No automated test suite or linter is configured for this small starter. Use type checking, a production build, and HTTP smoke checks. Roll back using your host's previous deployment or redeploy the previous revision.
