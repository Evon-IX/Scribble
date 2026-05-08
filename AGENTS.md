# Scribble — Landing Page

Next.js 16 (App Router) landing page for the Scribble desktop typing automation app. Built with React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Cursor Cloud specific instructions

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port 3000) |
| Build | `pnpm build` |
| Lint | Not configured — ESLint is not installed as a dependency |

### Environment variables

The app requires two Supabase env vars in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Without real Supabase credentials, the `/api/stats` and `/api/stats/heartbeat` routes will return 500 errors, but the rest of the landing page (hero, features, CTA, footer) renders normally — the Stats section gracefully shows "Stats temporarily unavailable."

### Source code history note

The source code (app/, components/, hooks/, lib/, public/, styles/) was originally uploaded as a zip archive in the repo. The config files (package.json, tsconfig.json, etc.) were committed separately. These files were subsequently deleted from the repo. The setup branch restores all source files so the project can build and run.

### Build behavior

- `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so TypeScript errors won't fail the build.
- `images.unoptimized: true` is set, meaning no `sharp` image optimization is used.
- The `pnpm install` step warns about `sharp` build scripts being ignored — this is fine since unoptimized images are configured.

### UX notes

- The "Download" / "Download Free" buttons open a **support dialog** (donation modal with $5–$50 tiers) before allowing the download. The actual download link is a placeholder (`https://github.com/your-repo/scribble/releases`).
- The typing demo in the hero section can be restarted by clicking "Watch Demo."
- No automated test framework is configured (no Jest, Vitest, or Playwright).

### Package manager

The project uses **pnpm** (lockfile: `pnpm-lock.yaml`). Do not use npm or yarn.
