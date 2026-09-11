export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  preview: "clusters" | "dashboard" | "dormitory" | "next";
  status: "placeholder" | "published";
  screenshot?: string;
  githubUrl?: string;
  liveUrl?: string;
  study: {
    problem: string;
    dataset: string;
    methods: string;
    results: string;
    takeaways: string;
  };
};

// Replace placeholder content, add evidence, and change status to publish real work.
export const projects: Project[] = [
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation",
    category: "Data Analytics",
    description: "Analyze customer behavior and discover meaningful segments.",
    technologies: ["Python", "Pandas", "Machine Learning", "Clustering"],
    preview: "clusters",
    status: "placeholder",
    study: {
      problem:
        "Planned focus: explore how customers differ in their behavior and identify useful groups for business decisions.",
      dataset:
        "Dataset selection is pending. The finished case study will document the source, permissions, features, and cleaning steps.",
      methods:
        "Proposed approach: explore and prepare the data, compare clustering methods, and interpret each segment in business terms.",
      results:
        "No results yet. Validated segment profiles, charts, and evaluation metrics will be added after the analysis is complete.",
      takeaways:
        "Learning reflections will be added after completing and evaluating the project.",
    },
  },
  {
    slug: "business-dashboard",
    title: "Business Dashboard",
    category: "Business Analytics",
    description:
      "Turn raw business data into a clear, decision-ready dashboard.",
    technologies: ["Power BI", "SQL"],
    preview: "dashboard",
    status: "placeholder",
    study: {
      problem:
        "Planned focus: bring business performance data into one clear view to make trends and questions easier to explore.",
      dataset:
        "Business dataset and reporting requirements are pending. The finished study will document data sources and metric definitions.",
      methods:
        "Proposed approach: prepare data with SQL, define a reporting model, and design a dashboard around concrete business questions.",
      results:
        "No results yet. The final dashboard, validated metrics, and design decisions will appear here when available.",
      takeaways:
        "Reflections on data modeling, visual clarity, and stakeholder questions will be added after the project.",
    },
  },
  {
    slug: "dormitory-management",
    title: "Dormitory Management System",
    category: "Full Stack",
    description:
      "A database-driven web application for managing tenants, rooms, and payments.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    preview: "dormitory",
    status: "placeholder",
    study: {
      problem:
        "Planned focus: organize room availability, tenant records, and payment tracking in a practical web application.",
      dataset:
        "The data model and requirements are pending. Development will use sample records rather than private tenant information.",
      methods:
        "Proposed approach: design a relational schema, build the main management workflows, and validate input and access controls.",
      results:
        "No implementation results yet. Screenshots, workflow demonstrations, and verification notes will be added once built.",
      takeaways:
        "Reflections on database design and building usable management workflows will be added after implementation.",
    },
  },
  {
    slug: "next-project",
    title: "Your Next Project",
    category: "Room to Explore",
    description:
      "A little space for the next question worth exploring. More to come.",
    technologies: [],
    preview: "next",
    status: "placeholder",
    study: {
      problem: "The next project has not been selected yet.",
      dataset: "To be determined with the project scope.",
      methods: "The approach will follow the problem.",
      results: "There are no results to share yet.",
      takeaways: "This space will grow with the project.",
    },
  },
];
