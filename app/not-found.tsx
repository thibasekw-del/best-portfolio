import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container not-found">
      <p className="section-label">404 — PAGE NOT FOUND</p>
      <h1>
        Let’s get you back<span className="sage">.</span>
      </h1>
      <p>This page is not part of the portfolio.</p>
      <Link className="button button-primary" href="/">
        Back to BEST.
      </Link>
    </main>
  );
}
