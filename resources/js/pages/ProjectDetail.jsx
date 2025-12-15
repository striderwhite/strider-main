import { useParams, Link } from "react-router-dom";

const projects = [
  {
    id: "condo-doc-review",
    title: "Condo Doc Review Software",
    subtitle: "A full-stack document ingestion and review platform built to automate and streamline condominium document analysis.",
    image: "/images/projects/condo-doc-review.jpg",
    description:
      "Condo Doc Review software allows users to upload large volumes of condominium-related documents such as reserve fund studies, budgets, bylaws, financial statements, meeting minutes, and insurance documents and have them automatically processed, categorized, and analyzed. The system uses AI-assisted extraction to identify key facts, risks, and findings while maintaining traceability back to source documents. Structured outputs allow reviewers to quickly understand the financial health, governance structure, liabilities, and operational risks of a condominium corporation without manually reading hundreds or thousands of pages. Designed for professionals who perform high-volume document reviews, the platform dramatically reduces review time, increases consistency, and provides a clear audit trail. Human review workflows can be layered on top for validation, quality control, or regulatory requirements."
  },
  {
    id: "logistic-software-solution",
    title: "Logistics Software Platform",
    subtitle: "A scalable logistics and inventory management system designed to support complex, high-volume operational workflows.",
    image: "/images/projects/logistic-software-solution.jpg",
    description:
      "The logistics software platform manages inventory, movement, storage, and lifecycle tracking across multiple locations and clients. Built to handle millions of records, it supports real-world operational constraints such as partial movements, mobile interactions, third-party integrations, and exception handling. The system includes a centralized database, web-based administrative tools, and mobile applications to support on-the-ground operations. It integrates with external systems and APIs to synchronize data across business units and partners, reducing manual data entry and improving accuracy. Designed for growth, the platform enables organizations to scale operations without a proportional increase in staffing, providing better visibility, reporting, and control over logistics-intensive processes."
  },
  {
    id: "dsllp-minute-book",
    title: "DSLLP Digital Minute Book Software",
    subtitle: "A secure, web-based system designed to replace traditional paper-based corporate minute books with a modern digital platform.",
    image: "/images/projects/dsllp-minute-book.jpg",
    description:
      "The DSLLP Digital Minute Book software allows law firms to manage corporate records, parties, and documents in a structured, searchable, and auditable system. It provides staff with internal management tools while offering clients secure, read-only access to their corporate records through time-limited links. The platform supports digital binders with customizable tabs, document upload and tagging, version control, and PDF generation. It is designed as a long-term foundation, with optional modules for e-signatures, internal account summaries, and reminder notices. All data is encrypted in transit and at rest, deployed on firm-owned infrastructure, and built with a clear focus on security, ownership, and maintainability. The system improves internal efficiency, reduces reliance on physical records, and delivers a professional, modern client experience without locking the firm into proprietary vendors."
  }
];

const projectImages = {
  "condo-doc-review": {
    hero: "/images/projects/condo.jpg",
    detail: "/images/projects/condo-2.jpg"
  },
  "logistic-software-solution": {
    hero: "/images/projects/warehouse.jpg",
    detail: "/images/projects/warehouse-2.jpg"
  },
  "dsllp-minute-book": {
    hero: "/images/projects/law.jpg",
    detail: "/images/projects/law-2.jpg"
  }
};

const projectDetails = {
  "condo-doc-review": {
    overview: [
      "A full-stack document ingestion and review platform built to automate and streamline condominium document analysis.",
      "Condo Doc Review software allows users to upload large volumes of condominium-related documents such as reserve fund studies, budgets, bylaws, financial statements, meeting minutes, and insurance documents and have them automatically processed, categorized, and analyzed.",
      "Designed for professionals who perform high-volume document reviews, the platform dramatically reduces review time, increases consistency, and provides a clear audit trail. Human review workflows can be layered on top for validation, quality control, or regulatory requirements."
    ],
    scope: [
      "Document ingestion pipeline and processing",
      "AI-assisted extraction and tagging",
      "Reviewer UI with traceability to sources",
      "Validation and human-in-the-loop workflows",
      "Reporting and export (PDF, structured data)"
    ],
    solution: [
      "We built an extraction-first pipeline that normalizes and indexes large document sets, enabling fast search and structured output generation.",
      "AI-assisted extraction highlights key facts, risks, and findings while maintaining links back to source pages so reviewers can verify results quickly.",
      "The result is a faster, more consistent review process with an auditable trail reducing manual reading while preserving human oversight where required."
    ]
  },
  "logistic-software-solution": {
    overview: [
      "A scalable logistics and inventory management system designed to support complex, high-volume operational workflows.",
      "The platform manages inventory, movement, storage, and lifecycle tracking across multiple locations and clients, handling real-world constraints such as partial movements, mobile interactions, third-party integrations, and exception handling.",
      "Built for growth, the system gives operations teams better visibility, reporting, and control while reducing manual effort and errors."
    ],
    scope: [
      "Centralized inventory and location tracking",
      "Mobile applications for on-the-ground operations",
      "Third-party integrations and sync APIs",
      "Exception handling and audit logs",
      "Scalable data and reporting infrastructure"
    ],
    solution: [
      "We designed a centralized data model with event-driven updates so mobile clients and integrations stay in sync without blocking operations.",
      "Optimizations for partial movements, batching, and async processing reduced latency and made the system resilient under heavy volume.",
      "The platform enabled scale with fewer staff by improving accuracy, synchronizing partners, and surfacing actionable operational insights."
    ]
  },
  "dsllp-minute-book": {
    overview: [
      "A secure, web-based system designed to replace traditional paper-based corporate minute books with a modern digital platform.",
      "The DSLLP Digital Minute Book software allows law firms to manage corporate records, parties, and documents in a structured, searchable, and auditable system while providing clients secure, read-only access via time-limited links.",
      "The product emphasizes security, firm ownership of data, and maintainability enabling firms to move off physical records without relying on proprietary vendors."
    ],
    scope: [
      "Digital binders with customizable tabs",
      "Document upload, tagging, and version control",
      "Secure client access (time-limited, read-only links)",
      "Optional modules: e-signatures, reminders, account summaries",
      "Deployment on firm-owned infrastructure with encryption"
    ],
    solution: [
      "We implemented a structured, auditable storage model with versioning and PDF generation to replicate the fidelity of physical minute books.",
      "Access controls and time-limited links provide secure client views while internal tools support staff workflows for updates and governance.",
      "The platform reduces reliance on physical records, improves internal efficiency, and delivers a modern client experience with a strong focus on security and ownership."
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const details = projectDetails[id] || { overview: [], scope: [], solution: [] };

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-sky-400 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  // Find current and next project index
  const currentIdx = projects.findIndex((p) => p.id === id);
  const nextIdx = (currentIdx + 1) % projects.length;
  const nextProject = projects[nextIdx];

  return (
    <div className="w-full px-6 md:px-10 lg:px-0 flex justify-center pt-24 pb-8">
      <div className="max-w-5xl w-full space-y-12 md:space-y-32">

        {/* Top hero image */}
        <div className="w-full">
          <img
            src={projectImages[id]?.hero || project.image || "https://via.placeholder.com/1600x900"}
            alt={`${project.title} hero`}
            className="w-full max-h-[600px] rounded-3xl object-cover"
          />
        </div>

        {/* Overview + Scope */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)] items-start">
          {/* Summary / issue */}
          <div className="space-y-4">
            <h2 className="">
              {project.title} Web Application
            </h2>
            {details.overview.map((p, idx) => (
              <p key={idx} className="text-slate-300 text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Scope card */}
          <aside className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Scope
            </h3>
            <ul className="space-y-2 text-slate-200 text-sm md:text-base">
              {details.scope.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Solution text */}
        <section className="space-y-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            The Solution
          </h2>
          {details.solution.map((p, idx) => (
            <p key={idx} className="text-slate-300 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </section>

        {/* Full-width bottom image (longer page image) */}
        <section className="w-full">
          <img
            src={projectImages[id]?.detail || "https://via.placeholder.com/1600x900"}
            alt={`${project.title} detail layout`}
            className="w-full lg:w-[80%] max-h-[600px] mx-auto rounded-3xl shadow-xl border border-slate-800/60 object-cover"
          />
        </section>

        {/* Next Project Button */}
        {projects.length > 1 && (
          <div className="flex justify-end">
            <Link
              to={`/projects/${nextProject.id}`}
              className="inline-block px-8 py-4 text-lg md:text-xl hover:text-sky-400 transition"
            >
              Next: {nextProject.title} &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
