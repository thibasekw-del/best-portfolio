import { ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="/#top" className="footer-brand">
          © 2026 BEST<span>.</span>
        </a>
        <p>
          Built with care <span>·</span> Statistics × Data × Software
        </p>
        <a className="back-top" href="/#top" aria-label="Back to top">
          <ArrowUp size={17} />
        </a>
      </div>
    </footer>
  );
}
