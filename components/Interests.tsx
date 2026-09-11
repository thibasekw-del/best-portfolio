import { ChartScatter, TrendingUp, Code2 } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
const interests = [
  {
    title: "Data",
    text: "Turning raw data into useful insights and patterns.",
    icon: ChartScatter,
  },
  {
    title: "Business",
    text: "Using data to understand problems and support better decisions.",
    icon: TrendingUp,
  },
  {
    title: "Software",
    text: "Building practical applications and digital experiences.",
    icon: Code2,
  },
];
export function Interests() {
  return (
    <section className="section interests-section section-bordered">
      <Reveal className="container">
        <SectionLabel number="05">WHAT I LIKE TO BUILD</SectionLabel>
        <div className="interests-grid">
          {interests.map(({ title, text, icon: Icon }, index) => (
            <article key={title}>
              <div className="interest-top">
                <Icon size={24} strokeWidth={1.4} />
                <span>0{index + 1}</span>
              </div>
              <h2>
                {title}
                <span className="sage">.</span>
              </h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
