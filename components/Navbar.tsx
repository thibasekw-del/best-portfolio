"use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = ["About", "Skills", "Projects", "Education", "Contact"];
export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          className="wordmark"
          href="/#top"
          aria-label="BEST home"
          onClick={() => setOpen(false)}
        >
          BEST<span>.</span>
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
              {link === "Contact" && <ArrowUpRight size={15} />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
