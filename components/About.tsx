import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
export function About() {
  return (
    <section id="about" className="section section-bordered">
      <Reveal className="container">
        <SectionLabel number="01">ABOUT</SectionLabel>
        <div className="about-grid">
          <div>
            <h2>
              Curious about how data
              <br />
              becomes decisions<span className="sage">.</span>
            </h2>
            <div className="body-copy">
              <p>
                I’m a fourth-year Statistics student at King Mongkut’s Institute
                of Technology Ladkrabang (KMITL). My interests sit between data,
                business, and software development.
              </p>
              <p>
                I enjoy analyzing data, understanding real-world problems, and
                building applications that make those ideas useful.
              </p>
            </div>
          </div>
          <aside className="about-education">
            <div className="education-aside-top">
              <span className="eyebrow">EDUCATION</span>
              <ArrowUpRight size={18} className="sage" />
            </div>
            <h3>B.Sc. Statistics</h3>
            <p>
              King Mongkut’s Institute
              <br />
              of Technology Ladkrabang
            </p>
            <span className="date-label">2023 — 2027</span>
            <div className="education-aside-bottom">
              <span className="little-dot" /> A foundation in analytical
              thinking
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
