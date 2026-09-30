export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  preview: "clusters" | "dashboard" | "dormitory" | "menu-mate" | "next";
  status: "placeholder" | "published";
  screenshot?: string;
  imageAlt?: string;
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
    slug: "menu-mate",
    title: "Menu Mate — วันนี้กินอะไรดี?",
    category: "AI Application",
    description:
      "A Thai meal recommendation app for cravings or ingredients already on hand.",
    technologies: [
      "Python",
      "Streamlit",
      "Gemini API",
      "TheMealDB",
      "Firebase",
    ],
    preview: "menu-mate",
    status: "published",
    screenshot: "/projects/menu-mate.webp",
    imageAlt: "Food hero artwork used in the Menu Mate app",
    githubUrl: "https://github.com/thibasekw-del/food-project",
    study: {
      problem:
        "Deciding what to eat can be difficult when someone has a craving but no dish in mind, or has ingredients but no recipe idea. Menu Mate offers a Thai-language flow for each situation.",
      dataset:
        "The app takes the user's food preferences or available ingredients and retrieves recipe candidates from TheMealDB. Gemini can also propose suggestions, which the interface labels separately from database recipes.",
      methods:
        "Built with Streamlit and Python. Gemini interprets the Thai request, TheMealDB supplies matching recipes, and Gemini returns structured recommendations. Firebase Authentication and Firestore support accounts, saved favorites, and recommendation history. The app validates response fields and source IDs before displaying results.",
      results:
        "Implemented both recommendation modes, account sign-in, favorites, and history. Recommendations are limited to three dishes per request. The project's 15 automated tests pass with external services mocked; live service availability depends on configured API credentials.",
      takeaways:
        "The main engineering challenges were grounding AI suggestions in recipe data, keeping generated suggestions clearly labelled, handling service failures, and limiting saved data to each signed-in user.",
    },
  },

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
