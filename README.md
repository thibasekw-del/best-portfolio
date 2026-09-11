# BEST. Portfolio

A calm, responsive portfolio for a fourth-year Statistics student at KMITL.
Built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

Requires Node.js 20.9 or later and npm.

~~~sh
npm ci
npm run dev
~~~

Open the local address printed by Next.js. Create a production static export with:

~~~sh
npm run typecheck
npm run build
~~~

The deployable site is generated in out/. Use a static host that serves directory
index files; each case-study route has its own exported HTML page.
The Next.js start command is not used for a static export.

## Update content

- data/profile.ts: GitHub, LinkedIn, email, and a reserved resume path. The supplied
  social profiles are live; email is intentionally blank. The contact button uses
  LinkedIn until an email is added.
- data/projects.ts: titles, descriptions, categories, technologies, optional
  screenshots, repository/demo URLs, and complete case-study content.
- components/About.tsx and components/Education.tsx: biography and education.
- app/globals.css: named palette tokens, layout, typography, and responsive rules.

All four initial projects are labelled placeholders. Their diagrams are illustrative
concept previews. No real project results, datasets, metrics, or finished work are claimed.

To add a real project, add an object to projects, fill in the case-study evidence,
set status to published, and optionally add screenshot, githubUrl, and liveUrl.
Put screenshots in public/projects/ and use a path such as /projects/example.webp.
Run the build again to generate the new route.

Email, resume downloads, blog, language switching, theme switching, and a contact form
can be added later. The core intentionally avoids incomplete feature controls.

## Git checkpoints

Keep commits small and focused: finish one coherent change, review the diff,
run relevant checks, and commit with a descriptive message such as:

~~~sh
git diff
git add <files>
git commit -m "feat: add a completed dashboard case study"
git log --oneline
~~~

To reverse a committed change without deleting history:

~~~sh
git revert <commit>
~~~

Local commits do not require GitHub. To back up to GitHub, create or choose your
repository and authenticate Git, then add the repository as a remote and push.
Do not overwrite a remote with force-push. The Sites source repository is separate
from a personal GitHub repository.

## Browser verification

scripts/verify-browser.cjs checks desktop, tablet, and phone widths, horizontal
overflow, the mobile menu and Escape behavior, case-study navigation, social URLs,
the keyboard skip link, enlarged text, 404 behavior, and browser runtime errors.

It uses Playwright and a headless Microsoft Edge installation. Set
PLAYWRIGHT_MODULE to an installed Playwright package if it is not locally available;
set TEST_URL to target another local server. Run with:

~~~sh
node scripts/verify-browser.cjs
~~~

Screenshots and results are saved under the ignored artifacts/ directory.
The page respects reduced-motion preferences and remains readable without JavaScript.

Fonts use Google Fonts (Inter and Noto Sans Thai), with local sans-serif fallbacks
when the font service is unavailable.

## GitHub and Vercel

The dedicated repository is https://github.com/thibasekw-del/best-portfolio (private).
The older thibasekw-del/Portfolio repository is a separate existing website.

Vercel detects the Next.js framework and builds the static export using npm ci
and npm run build. Local Vercel settings are ignored by Git. Deployment uploads
exclude local artifacts and Sites metadata through .vercelignore.

Push changes to the main branch to trigger production deployment once the
GitHub integration is connected. Keep each change in a focused commit.
