# Portfolio development

- Use Next.js, TypeScript, Tailwind CSS, and reusable components.
- Preserve the calm dark gray and sage green design, readable typography, and reduced-motion support.
- Keep project content in `data/projects.ts` and personal links in `data/profile.ts`.
- Make small, meaningful Git commits after each completed, coherent change. Use descriptive Conventional Commit messages (`feat:`, `fix:`, `docs:`, `chore:`).
- Check the diff before committing. Never commit secrets, build output, dependencies, or unrelated user changes.
- Run a production build and check desktop and mobile layouts before delivery. Do not claim checks that were not performed.
- Do not fabricate completed projects, project results, contact details, or resume documents.
- Do not push to GitHub or create a GitHub repository unless the user authorizes that destination.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
