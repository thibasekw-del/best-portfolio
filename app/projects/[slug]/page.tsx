import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectPreview } from "@/components/ProjectPreview";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? project.title + " — BEST." : "Project not found — BEST.",
    description: project?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <>
      <a className="skip-link" href="#case-study">
        Skip to case study
      </a>
      <Navbar />
      <main id="case-study" className="container case-study">
        <Link className="back-link" href="/#projects">
          <ArrowLeft size={17} />
          Back to Projects
        </Link>
        <div className="case-heading">
          <p className="section-label">{project.category}</p>
          <h1>
            {project.title}
            <span className="sage">.</span>
          </h1>
          <p>{project.description}</p>
        </div>
        {project.status === "placeholder" && (
          <div className="case-notice">
            <span className="little-dot" />
            <p>
              <strong>Case study coming soon.</strong> This is a project
              placeholder. The preview is illustrative; no completed work or
              results are claimed.
            </p>
          </div>
        )}
        <ProjectPreview project={project} />
        <div className="case-body">
          <div>
            <section>
              <p className="section-label">ABOUT</p>
              <h2>Problem</h2>
              <p>{project.study.problem}</p>
            </section>
            <section>
              <p className="section-label">APPROACH</p>
              <h2>Dataset & methods</h2>
              <p>{project.study.dataset}</p>
              <p>{project.study.methods}</p>
            </section>
            <section>
              <p className="section-label">RESULTS</p>
              <h2>What the work reveals</h2>
              <p>{project.study.results}</p>
            </section>
            <section>
              <p className="section-label">KEY TAKEAWAYS</p>
              <h2>What I learned</h2>
              <p>{project.study.takeaways}</p>
            </section>
          </div>
          <aside>
            <p className="section-label">TECHNOLOGIES</p>
            {project.technologies.length > 0 ? (
              <ul className="tags">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            ) : (
              <p>To be selected.</p>
            )}
            {project.githubUrl && (
              <a
                className="text-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                className="text-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <ArrowUpRight size={16} />
              </a>
            )}
          </aside>
        </div>
        <Link className="button button-secondary" href="/#projects">
          <ArrowLeft size={17} />
          Back to Projects
        </Link>
      </main>
      <Footer />
    </>
  );
}
