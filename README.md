# Dhyey Sanghvi Portfolio

Designer-grade cybersecurity portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Where to edit content

All content lives in `data/profile.ts`.

- Name, contact, positioning, education
- Experience timeline and metrics
- Projects (case studies)
- Skills & featured GitHub repositories (also auto-fills from GitHub)

## GitHub repositories

The “Repositories” section pulls your public repos from the GitHub API on page load, so new repos show up automatically without redeploying (it also includes public repos from your public GitHub organizations).

Optional env vars:

- `NEXT_PUBLIC_GITHUB_USERNAME` — override the username inferred from `profile.contact.github`
- `GITHUB_USERNAME` — server-side username override for `/api/github/repos`
- `GITHUB_TOKEN` — strongly recommended; server-side token used by `/api/github/repos` to avoid rate limits and include org repos even when your org membership is private

## Assets

- Replace `public/resume.pdf` with the real resume.
- Replace `public/placeholder.svg` with project screenshots as they become available.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — start the production server
