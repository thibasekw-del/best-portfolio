import { ChartNoAxesCombined, Code2, Database, Wrench } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
const groups = [
  {
    title: "Data & Analytics",
    icon: ChartNoAxesCombined,
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Power BI", "Excel"],
  },
  {
    title: "Development",
    icon: Code2,
    tools: ["Java", "JavaScript", "PHP", "HTML", "CSS"],
  },
  { title: "Database", icon: Database, tools: ["SQL", "MySQL", "Oracle"] },
  {
    title: "Tools",
    icon: Wrench,
    tools: ["Git", "GitHub", "VS Code", "Google Colab"],
  },
];
export function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal className="container">
        <SectionLabel number="02">SKILLS</SectionLabel>
        <h2>
          Tools I use to build things<span className="sage">.</span>
        </h2>
        <div className="skills-grid">
          {groups.map(({ title, icon: Icon, tools }) => (
            <article key={title} className="skill-card">
              <Icon size={23} strokeWidth={1.5} className="sage" />
              <h3>{title}</h3>
              <ul className="tags">
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
