import { Plus } from "lucide-react";
import type { Project } from "@/data/projects";
export function ProjectPreview({ project }: { project: Project }) {
  if (project.screenshot)
    return (
      <div className="project-preview">
        <img
          className="project-screenshot"
          src={project.screenshot}
          alt={project.title + " screenshot"}
          loading="lazy"
          width={800}
          height={450}
        />
      </div>
    );
  return (
    <div
      className={"project-preview preview-" + project.preview}
      role="img"
      aria-label={
        project.title +
        ": illustrative placeholder preview, not actual project results"
      }
    >
      {project.preview === "clusters" && (
        <div className="cluster-viz">
          <div className="viz-top">
            <span>CUSTOMER EXPLORER</span>
            <span>3 SEGMENTS</span>
          </div>
          <svg viewBox="0 0 420 156" aria-hidden="true">
            <path
              d="M22 6V140H406"
              fill="none"
              stroke="#46534d"
              strokeWidth="1"
            />
            <path
              d="M22 44H406M22 91H406M105 6V140M205 6V140M305 6V140"
              stroke="#334039"
              strokeDasharray="3 5"
            />
            {Array.from({ length: 48 }, (_, i) => {
              const group = i % 3;
              const x = [108, 223, 324][group] + Math.sin(i * 2.13) * 38;
              const y = [94, 45, 97][group] + Math.cos(i * 1.73) * 27;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={3.4 + (i % 3) * 0.3}
                  fill={["#8FB7A3", "#B8C5D6", "#C3B397"][group]}
                  opacity={0.65 + (i % 4) * 0.08}
                />
              );
            })}
          </svg>
          <div className="cluster-legend">
            <span>
              <i />
              Segment A
            </span>
            <span>
              <i />
              Segment B
            </span>
            <span>
              <i />
              Segment C
            </span>
          </div>
        </div>
      )}
      {project.preview === "dashboard" && (
        <div className="dashboard-viz">
          <div className="viz-top">
            <span>BUSINESS OVERVIEW</span>
            <span>↗</span>
          </div>
          <div className="metric-skeletons">
            {["REVENUE", "CUSTOMERS", "GROWTH"].map((label) => (
              <div key={label}>
                <span>{label}</span>
                <strong>— —</strong>
                <i />
              </div>
            ))}
          </div>
          <div className="dashboard-bottom">
            <div className="bar-viz">
              {[28, 45, 38, 62, 54, 76, 68, 85, 72, 94, 81, 108].map(
                (height, i) => (
                  <i key={i} style={{ height: height * 0.6 }} />
                ),
              )}
            </div>
            <div className="donut-viz">
              <div />
            </div>
          </div>
        </div>
      )}
      {project.preview === "dormitory" && (
        <div className="dorm-viz">
          <div className="dorm-sidebar">
            <span className="dorm-mark">
              d<span>.</span>
            </span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="dorm-main">
            <div className="viz-top">
              <span>ROOM OVERVIEW</span>
              <span>＋</span>
            </div>
            <div className="room-summary">
              <i />
              <i />
              <i />
            </div>
            <div className="room-table">
              <div>
                <span>ROOM</span>
                <span>STATUS</span>
                <span>PAYMENT</span>
              </div>
              {["A101", "A102", "A103"].map((room, i) => (
                <div key={room}>
                  <span>{room}</span>
                  <span className="room-status">
                    {i === 1 ? "Available" : "Occupied"}
                  </span>
                  <span className="table-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {project.preview === "next" && (
        <div className="next-viz">
          <div>
            <Plus size={28} strokeWidth={1} />
          </div>
          <span>THE NEXT CHAPTER</span>
        </div>
      )}
      <span className="preview-caption">
        {project.preview === "next" ? "A WORK IN PROGRESS" : "CONCEPT PREVIEW"}
      </span>
    </div>
  );
}
