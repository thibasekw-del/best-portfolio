import { projects } from "@/data/projects";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
export function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section section-bordered"
    >
      <Reveal className="container">
        <SectionLabel number="03">PROJECTS</SectionLabel>
        <div className="section-heading-row">
          <h2>
            Selected work
            <br />
            coming together<span className="sage">.</span>
          </h2>
          <p>
            Explore a completed project
            <br />
            alongside ideas in progress.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
