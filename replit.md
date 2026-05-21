# אלוגברה (Alogbra)

A Hebrew math education platform for Israeli middle school students (grades 7–10). Students visit the landing page, see a live triangle animation demo, pick their grade, and explore interactive HTML tools — some free, some premium.

## Run & Operate

- `pnpm --filter @workspace/alogbra run dev` — run the main frontend (port from env)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (for future backend features)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Wouter (routing), Rubik font
- API: Express 5 (ready for future backend)
- DB: PostgreSQL + Drizzle ORM (ready for future use)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: Vite (frontend), esbuild (CJS bundle for API)

## Where things live

- `artifacts/alogbra/src/data/tools.ts` — source of truth for all tool catalogue (grades, categories, tools, premium flags)
- `artifacts/alogbra/public/tools/grade8/` — grade 8 HTML tool files (algebra/, geometry/, kavit/)
- `artifacts/alogbra/public/tools/grade9/` — grade 9 HTML tool files (algebra/, geometry/, functions/)
- `artifacts/alogbra/src/components/TriangleShowcase.tsx` — the animated triangle congruence demo
- `lib/api-spec/openapi.yaml` — API contract source of truth

## Architecture decisions

- HTML tools are served as static files and rendered in iframes — they are NEVER modified. This is intentional; the user wants exact preservation of their Gemini-generated HTML tools.
- The frontend is entirely static for now (no backend calls). Premium gating is UI-only until payment is implemented.
- Grade hub pages mirror the card grid layout from the user's existing grade8/grade9 GitHub repos.
- Wouter is used for routing with BASE_URL prefix support.
- RTL Hebrew throughout — `dir="rtl"` on html, Rubik font.

## Product

- Landing page with live triangle animation demo (TriangleShowcase)
- Grade selector → grade hub page with tool cards organized by category
- Tool viewer: full-screen iframe rendering HTML tools untouched
- Premium lock overlay on paid tools
- Pricing page (payment TBD)
- Future: email delivery of grade access links after payment

## User preferences

- HTML tools must NEVER be changed or modified — serve exactly as-is via iframe
- The triangle animation is the main hook — keep it prominent
- RTL Hebrew throughout
- Want to add ~80-90 more tools from Google Sheets/Gemini over time
- Payments: to be decided later (Stripe or other)

## Gotchas

- Always run `pnpm --filter @workspace/api-spec run codegen` after changing `lib/api-spec/openapi.yaml`
- HTML tools in `public/tools/` use React via CDN + Tailwind CDN + Babel — they are self-contained
- The grade9 functions folder has a file named `a,b,c,k,p.html` (with commas) — this is intentional
- Tool file paths in `tools.ts` start with `/tools/` (public-relative paths)

## How to add new HTML tools

**Option A — HTML tools from html-library (recommended for new tools pasted from Gemini):**
1. Save the HTML file as `artifacts/alogbra/src/data/html-tools/<id>.html`
2. Add one import line to `artifacts/alogbra/src/data/html-library.ts`:
   `import myTool from './html-tools/<id>.html?raw';`
3. Add one entry to the `htmlLibrary` array in the same file with `html: myTool`
4. The tool appears automatically on the grade hub page (served as a blob URL in an iframe)

**Option B — Static file tools (for the original public/tools/ files):**
1. Drop the HTML file into `artifacts/alogbra/public/tools/grade8/` (or grade9/)
2. Add an entry to `artifacts/alogbra/src/data/tools.ts`

Note: The html-library approach is preferred for new tools because it avoids the escaping issues
with backticks in JSX template literals inside the HTML files.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Existing grade repos (for reference): github.com/Roei2005/grade8, github.com/Roei2005/grade9
