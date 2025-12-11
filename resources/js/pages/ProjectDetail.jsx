import { useParams, Link } from "react-router-dom";

const projects = [
  {
    id: "condo-doc-review",
    title: "Condo Doc Review",
    subtitle: "Automates reporting so your team stops living in spreadsheets.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A robust dashboard for operations teams to automate reporting, visualize KPIs, and reduce time spent in spreadsheets."
  },
  {
    id: "logistic-software-solution",
    title: "Logistic Software Solution",
    subtitle: "A self-serve hub that cuts support requests in half.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A secure portal for clients to access resources, submit requests, and track project status, reducing support overhead."
  },
  {
    id: "dsllp-minute-book",
    title: "DSLLP Minute Book",
    subtitle: "Rule-based flows that keep every project moving on time.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A flexible workflow engine to automate project steps, assign tasks, and ensure timely delivery for every project."
  }
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

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
    <div className="w-full px-6 md:px-10 lg:px-0 flex justify-center py-20">
      <div className="max-w-5xl w-full space-y-32">

        {/* Top hero image */}
        <div className="w-full">
          <img
            src={project.image || "https://via.placeholder.com/1600x900"}
            alt={`${project.title} hero`}
            className="w-full rounded-3xl object-cover"
          />
        </div>

        {/* Overview + Scope */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)] items-start">
          {/* Summary / issue */}
          <div className="space-y-4">
            <h2 className="">
              {project.title} Web Application
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Placeholder: Briefly describe the company, who they serve, and what
              they're known for. Mention the industry, their audience, and the
              kind of work they do.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Placeholder: Explain the core problem this project needed to solve.
              Focus on the systems, workflows, or experiences that weren&apos;t
              working and what prompted them to look for a new solution.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Placeholder: Add a line about why this project was a good fit for
              you and what made the challenge interesting from a software and
              product perspective.
            </p>
          </div>

          {/* Scope card */}
          <aside className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Scope
            </h3>
            <ul className="space-y-2 text-slate-200 text-sm md:text-base">
              <li>—  Placeholder: Product strategy & discovery</li>
              <li>—  Placeholder: UX/UI design for web app</li>
              <li>—  Placeholder: Full-stack application development</li>
              <li>—  Placeholder: Integrations (payments, auth, internal tools)</li>
              <li>—  Placeholder: Launch support & ongoing iterations</li>
            </ul>
          </aside>
        </section>

        {/* Color palette section */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Color Palette
          </h3>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl">
            Placeholder: Short note on how the color system supports the brand —
            for example, balancing trust, energy, and clarity across the product.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {/* These are just placeholder swatches - your styling can override */}
            <div className="flex flex-col gap-2">
              <div className="h-14 rounded-2xl bg-sky-500" />
              <span className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Primary
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-14 rounded-2xl bg-indigo-500" />
              <span className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Accent 1
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-14 rounded-2xl bg-emerald-500" />
              <span className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Accent 2
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-14 rounded-2xl bg-amber-400" />
              <span className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Highlight
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-14 rounded-2xl bg-slate-800" />
              <span className="text-xs uppercase tracking-[0.15em] text-slate-400">
                Neutral
              </span>
            </div>
          </div>
        </section>

        {/* Solution text */}
        <section className="space-y-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            The Solution
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Placeholder: Describe how you approached the product from a systems
            and experience standpoint. Mention how the interface, architecture,
            and integrations all work together to support the client’s goals.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Placeholder: Highlight specific improvements you made (ex: reducing
            manual work, centralizing fragmented tools, surfacing better data,
            or streamlining communication between teams).
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Placeholder: Wrap up with the outcome and what success looks like
            now — whether that's faster workflows, fewer errors, better insights,
            or just a noticeably smoother experience for everyone using the
            product.
          </p>
        </section>

        {/* Full-width bottom image (longer page image) */}
        <section className="w-full">
          <img
            src="https://images.unsplash.com/photo-1712640183722-ec59693f7c82?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={`${project.title} detail layout placeholder`}
            className="w-full rounded-3xl shadow-xl border border-slate-800/60 object-cover"
          />
        </section>

        {/* Next Project Button */}
        {projects.length > 1 && (
          <div className="flex justify-end">
            <Link
              to={`/projects/${nextProject.id}`}
              className="inline-block px-8 py-4 text-4xl"
            >
              Next: {nextProject.title} &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
