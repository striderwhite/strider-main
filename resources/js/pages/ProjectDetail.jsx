import { useParams, Link } from "react-router-dom";

const projects = [
  {
    id: "ops-dashboard",
    title: "Ops Dashboard",
    subtitle: "Automates reporting so your team stops living in spreadsheets.",
    image: "/images/projects/ops-dashboard.jpg",
    description: "A robust dashboard for operations teams to automate reporting, visualize KPIs, and reduce time spent in spreadsheets."
  },
  {
    id: "client-portal",
    title: "Client Portal",
    subtitle: "A self-serve hub that cuts support requests in half.",
    image: "/images/projects/client-portal.jpg",
    description: "A secure portal for clients to access resources, submit requests, and track project status, reducing support overhead."
  },
  {
    id: "workflow-engine",
    title: "Workflow Engine",
    subtitle: "Rule-based flows that keep every project moving on time.",
    image: "/images/projects/workflow-engine.jpg",
    description: "A flexible workflow engine to automate project steps, assign tasks, and ensure timely delivery for every project."
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-sky-400 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
      <div className="max-w-2xl w-full">
        <img src={project.image} alt={project.title} className="w-full rounded-2xl mb-8" />
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <h2 className="text-xl text-sky-400 mb-4">{project.subtitle}</h2>
        <p className="mb-8 text-lg text-slate-300">{project.description}</p>
        <Link to="/" className="text-sky-400 underline">Back to Home</Link>
      </div>
    </div>
  );
}
