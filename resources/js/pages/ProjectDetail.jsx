import { useParams, Link } from "react-router-dom";

const projects = [
  {
    id: "condo-doc-review",
    title: "Document Review Automation",
    subtitle: "Automated analysis system that cuts condominium document review time from 6+ hours to 30 minutes.",
    image: "/images/projects/condo-doc-review.jpg",
    description:
      "Real estate professionals were spending 6-8 hours manually reviewing hundreds of pages of condominium documents for every property assessment. This automation system eliminates 90% of that manual work by automatically processing reserve fund studies, budgets, bylaws, financial statements, and insurance documents. The system extracts key facts, flags risks, and generates structured reports in minutes instead of hours. Reviewers can verify any finding by clicking through to source documents, maintaining accuracy while dramatically accelerating the process. The result: $400 saved per review, consistent quality across all assessments, and the ability to handle 10x more volume without adding staff."
  },
  {
    id: "logistic-software-solution",
    title: "Inventory Tracking Automation",
    subtitle: "Real-time tracking system that eliminated 95% of inventory errors across multiple warehouse locations.",
    image: "/images/projects/logistic-software-solution.jpg",
    description:
      "A tire storage company was losing 25 hours per week managing inventory across spreadsheets, with 15-20 tracking errors occurring weekly. Manual updates couldn't keep pace with operations, causing customer service issues and operational chaos. This automation system replaced all spreadsheets with real-time tracking accessible via mobile devices and web dashboards. Warehouse staff scan items on-site, instantly updating central records. The system handles partial movements, integrates with partner systems, and provides complete audit trails. Within 3 months: tracking errors dropped 95%, staff saved 25 hours weekly, and the business scaled from 1 to 3 warehouse locations without adding administrative personnel."
  },
  {
    id: "dsllp-minute-book",
    title: "Document Management Automation",
    subtitle: "Digital system that replaced 12 filing cabinets with instant, secure document access.",
    image: "/images/projects/dsllp-minute-book.jpg",
    description:
      "A law firm was maintaining corporate records in physical minute books stored across 12 filing cabinets. Accessing documents required staff to manually search files, making updates was time-consuming, and sharing records with clients meant photocopying and mailing. This automation system digitized the entire process. Staff upload and organize documents online with instant search capabilities. Clients receive secure, time-limited links to view their records anytime from anywhere. Updates happen in real-time, version history is automatic, and generating PDF compilations takes seconds instead of hours. The result: eliminated physical storage, reduced document preparation time by 80%, improved client satisfaction by 40%, and gave the firm complete data ownership without vendor lock-in."
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
      "The Problem: Real estate professionals were spending 6-8 hours per property manually reviewing hundreds of pages of condominium documents. This bottleneck limited how many properties they could assess and increased costs for every client.",
      "The Solution: An automated document analysis system that processes reserve fund studies, budgets, bylaws, financial statements, meeting minutes, and insurance documents—extracting key facts, flagging risks, and generating structured reports in under 30 minutes.",
      "The Impact: 90% reduction in review time, $400 saved per review, 98% accuracy rate, and the ability to handle 10x more volume without hiring additional staff. Reviewers maintain full control with instant access to source documents for verification."
    ],
    scope: [
      "Automated document upload and processing",
      "Intelligent extraction of financial metrics, risks, and key facts",
      "Structured report generation with source traceability",
      "Quality verification workflows",
      "PDF exports and client-ready deliverables"
    ],
    solution: [
      "Built an automated processing pipeline that handles mixed document formats, extracting critical information while maintaining source references for every data point.",
      "Intelligent extraction identifies financial health indicators, liability flags, and operational risks—presenting findings in clear, actionable reports that previously took hours to compile manually.",
      "Result: Consistent, accurate assessments delivered in 30 minutes instead of 6+ hours, enabling the business to scale review volume without proportional cost increases."
    ]
  },
  "logistic-software-solution": {
    overview: [
      "The Problem: A tire storage operation was drowning in spreadsheets, experiencing 15-20 tracking errors per week. Staff spent 25 hours weekly updating records manually across multiple locations, causing customer service issues and operational chaos.",
      "The Solution: A real-time inventory tracking system accessible via mobile devices and web dashboards. Warehouse staff scan items on-site, instantly updating central records. No more spreadsheets, no more manual data entry, no more tracking errors.",
      "The Impact: 95% reduction in tracking errors, 25 hours saved weekly, and successful expansion from 1 to 3 warehouse locations without adding administrative staff. Complete visibility across all locations with instant reporting and audit trails."
    ],
    scope: [
      "Real-time inventory tracking across multiple locations",
      "Mobile scanning for on-site updates",
      "Automated partner system synchronization",
      "Exception alerts and audit trails",
      "Executive dashboards and custom reporting"
    ],
    solution: [
      "Replaced spreadsheet chaos with a centralized tracking system that updates in real-time from mobile devices, eliminating manual data entry and the errors that came with it.",
      "Built mobile-first workflows for warehouse staff with barcode scanning, partial movement handling, and offline capability—ensuring operations never stop due to connectivity issues.",
      "Result: Operations team scaled 3x without proportional cost increases, errors dropped 95%, and management gained real-time visibility they never had with spreadsheets."
    ]
  },
  "dsllp-minute-book": {
    overview: [
      "The Problem: A law firm maintained corporate records in physical minute books across 12 filing cabinets. Accessing documents required manual file searches, updates were time-consuming, and sharing records with clients meant photocopying and mailing—often taking days.",
      "The Solution: A digital document management system that eliminates physical storage entirely. Staff upload and organize documents with instant search. Clients receive secure links to view their records anytime, from anywhere. Updates happen in seconds, not hours.",
      "The Impact: Eliminated 12 filing cabinets, reduced document preparation time by 80%, improved client satisfaction by 40%, and gave the firm complete data ownership without vendor lock-in. What took days now takes seconds."
    ],
    scope: [
      "Digital document organization with custom structures",
      "Instant upload, search, and version tracking",
      "Secure client sharing via time-limited links",
      "PDF compilation and export capabilities",
      "Firm-owned deployment with enterprise-grade security"
    ],
    solution: [
      "Built a digital document management system that mirrors the structure of physical minute books while adding search, version control, and instant access—eliminating the limitations of paper entirely.",
      "Implemented secure client sharing with time-limited access links, allowing firms to provide modern service without compromising security or losing data ownership to third-party vendors.",
      "Result: Physical storage eliminated, document access went from hours to seconds, and client service modernized overnight—all while maintaining the firm's complete control over their data."
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
              {project.title}
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
