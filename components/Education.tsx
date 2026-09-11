import { GraduationCap } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
export function Education() {
  return (
    <section id="education" className="section">
      <Reveal className="container">
        <SectionLabel number="04">EDUCATION</SectionLabel>
        <div className="education-row">
          <div className="education-date">
            <span className="education-icon">
              <GraduationCap size={25} strokeWidth={1.5} />
            </span>
            <span>2023 — 2027</span>
            <span className="education-status">Expected graduation</span>
          </div>
          <div className="education-content">
            <h2>
              King Mongkut’s Institute
              <br />
              of Technology Ladkrabang
            </h2>
            <p>Bachelor of Science — Statistics</p>
            <ul className="education-interests">
              {["Statistics", "Data", "Programming", "Business Analytics"].map(
                (interest) => (
                  <li key={interest}>{interest}</li>
                ),
              )}
            </ul>
          </div>
          <span className="university-abbreviation" aria-hidden="true">
            KMITL
          </span>
        </div>
      </Reveal>
    </section>
  );
}
