import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const automationOutcomes = [
  {
    id: "condo-doc-review",
    title: "Document Review Automation",
    industry: "Real Estate",
    problem: "Manual document review taking 6-8 hours per property",
    outcome: "Reduced to 30 minutes with 98% accuracy",
    metrics: {
      timeSaved: "90%",
      costReduction: "$400 per review",
      accuracy: "98%"
    },
    image: "/images/projects/condo.jpg"
  },
  {
    id: "logistic-software-solution",
    title: "Inventory Tracking Automation",
    industry: "Logistics & Warehousing",
    problem: "Spreadsheet chaos causing 15-20 errors per week",
    outcome: "Eliminated 95% of tracking errors across 3 warehouse locations",
    metrics: {
      errorReduction: "95%",
      timeSaved: "25 hrs/week",
      scalability: "3x locations"
    },
    image: "/images/projects/warehouse.jpg"
  },
  {
    id: "dsllp-minute-book",
    title: "Document Management Automation",
    industry: "Legal Services",
    problem: "Physical file cabinets limiting accessibility and client service",
    outcome: "Instant digital access with secure client sharing in seconds",
    metrics: {
      accessSpeed: "Instant",
      storageEliminated: "12 filing cabinets",
      clientSatisfaction: "40% increase"
    },
    image: "/images/projects/law.jpg"
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center px-4 pt-24 lg:pt-32 pb-16">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400 mb-4">
            ( Real Results )
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Automation Outcomes
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how businesses eliminated manual work and accelerated operations with custom automation systems.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="space-y-12">
          {automationOutcomes.map((outcome, idx) => (
            <Link
              key={outcome.id}
              to={`/projects/${outcome.id}`}
              className="block group"
            >
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 bg-slate-900/30 border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-sky-500/50 transition-all duration-300">
                {/* Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={outcome.image}
                    alt={outcome.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-sky-400 mb-3 block">
                      {outcome.industry}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-sky-400 transition-colors">
                      {outcome.title}
                    </h2>
                    
                    {/* Problem/Solution */}
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-sm text-slate-400 mb-1">The Problem:</p>
                        <p className="text-slate-300">{outcome.problem}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">The Outcome:</p>
                        <p className="text-white font-medium">{outcome.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-700">
                    {Object.entries(outcome.metrics).map(([key, value]) => (
                      <div key={key} className="flex-1 min-w-[120px]">
                        <div className="text-2xl font-bold text-sky-400">{value}</div>
                        <div className="text-xs uppercase tracking-wider text-slate-400">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <div className="mt-4 flex items-center gap-2 text-sky-400 group-hover:gap-4 transition-all">
                    <span>View Full Case Study</span>
                    <Icon icon="material-symbols-light:line-end-arrow" width="20" height="20" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-sky-900/20 to-slate-900/20 border border-sky-800/30 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to see these results in your business?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Every business has unique bottlenecks. Let's identify yours and build an automation system that delivers measurable ROI.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Start Automating
            <Icon icon="material-symbols-light:line-end-arrow" width="24" height="24" />
          </Link>
        </div>
      </div>
    </div>
  );
}
