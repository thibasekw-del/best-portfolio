import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={
        "project-card " +
        (project.preview === "next" ? "next-project-card" : "")
      }
    >
      <ProjectPreview project={project} />
      <div className="project-info">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="project-number">0{index + 1}</span>
        </div>
        <h3>
          <Link href={"/projects/" + project.slug + "/"}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <ul className="tags project-tags">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-card-bottom">
          <Link className="text-link" href={"/projects/" + project.slug + "/"}>
            Case Study <ArrowUpRight size={16} />
            <span className="sr-only">: {project.title}</span>
          </Link>
          {project.status === "placeholder" && (
            <span className="placeholder-label">
              <span /> Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
