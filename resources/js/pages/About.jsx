import TextScrambleEffect from "@/components/TextScrambleEffect";
import SphereScan from "@/components/SphereScan";

const experiences = [
    {
        role: "Automation Systems Partner",
        company: "Upskill Condominium Management Ltd.",
        year: "2025 - Now",
    },
        {
        role: "Automation Systems Partner",
        company: "Condo Doc Review.",
        year: "2025 - Now",
    },
    {
        role: "Automation Lead & Systems Architect",
        company: "Fabled Solutions",
        year: "2023-2025",
    },
    {
        role: "Business Automation Specialist",
        company: "Fabled Solutions",
        year: "2019 - 2023",
    },
       {
        role: "Automation Consultant",
        company: "Independent",
        year: "2017 - 2022",
    },
    {
        role: "Process Optimization Analyst",
        company: "DMS Edmonton",
        year: "2016 - 2017",
    },
];

export default function About() {
    return (
        <div className="flex flex-col md:gap-56">
            <div className="max-w-[1200px] flex flex-col mx-auto text-center md:justify-center min-h-[90vh] md:min-h-screen gap-4 mt-24 md:mt-12">
                <TextScrambleEffect />
                <h1>
                    Turning <span className="">hours of tedious work</span>{" "}
                    into{" "}
                    <span className="font-italic">
                        minutes of automated efficiency.
                    </span>
                </h1>
                <SphereScan 
                    size={typeof window !== 'undefined' && window.innerWidth < 768 ? 280 : 500}
                    className="mx-auto mt-[-120px] md:mt-[-220px] z-[-10]"
                />
            </div>

            {/* about */}

            <section className="px-6 md:px-10 max-w-[1200px] mx-auto mt-[-200px]">
                <div className="">
                    {/* Top label */}
                    <p className="text-xs tracking-[0.25em] uppercase mb-6 text-sky-400">
                        ( What I Do )
                    </p>

                    <div className="grid gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
                        {/* Left column: big heading + small text */}
                        <div className="flex flex-col justify-between h-full">
                            <h2 className="mb-6 md:mb-0">
                                For over 10 years, I've automated business operations that were draining time, money, and productivity.
                            </h2>

                            <p> 
                                I identify manual bottlenecks in your operations and build automated systems that eliminate them. 
                                From document processing to inventory management to payment workflows—if it's repetitive and time-consuming, 
                                I can automate it. My clients stop wasting hours on tasks that technology can handle instantly.
                            </p>
                        </div>

                        {/* Right column: main portrait + small image */}
                        <div className="flex flex-col items-center md:items-end">
                            {/* Main image */}
                            <div className="w-full max-w-[300px] ">
                                <div className="w-full overflow-hidden">
                                    <img
                                        src="/images/profile-main.jpg"
                                        alt="Portrait"
                                        className="w-full h-64 md:h-full object-cover object-top md:object-center rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 md:px-6 my-32 md:my-0">
                <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)]">
                    {/* LEFT SIDE */}
                    <div>
                        {/* Top label */}
                        <p className="text-xs tracking-[0.25em] uppercase mb-6 text-sky-400">
                            ( Track Record )
                        </p>

                        <h2 className="mb-6">Business Impact</h2>

                        <p className="text-sm md:text-base text-slate-500 max-w-md md:mb-10">
                            I've helped businesses across real estate, logistics, legal services, and technology eliminate 
                            manual work and accelerate their operations through intelligent automation.
                        </p>
                    </div>

                    {/* RIGHT SIDE – TABLE */}
                    <div className="w-full">
                        {/* Header row */}
                        <div className="flex text-xs tracking-[0.25em] uppercase text-slate-400 mb-4">
                            <div className="flex-1">Role</div>
                            <div className="flex-1 text-right md:text-left">
                                Company
                            </div>
                            <div className="w-28 text-right">Year</div>
                        </div>

                        <div className="border-t border-slate-300">
                            {experiences.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center py-5 border-b border-slate-300 text-sm md:text-base"
                                >
                                    <div className="flex-1">
                                        <span className="font-medium">
                                            {item.role}
                                        </span>
                                    </div>
                                    <div className="flex-1 text-right md:text-left text-slate-500">
                                        {item.company}
                                    </div>
                                    <div className="w-28 text-right text-xs tracking-[0.15em] uppercase text-slate-400">
                                        {item.year}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

                <section className="max-w-[1200px] mx-auto flex items-start px-4 md:px-6 mb-24 md:mb-0">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
                      {/* LEFT SIDE */}
                      <div className="w-full lg:max-w-[400px]">
                          {/* Top label */}
                          <p className="text-xs tracking-[0.25em] uppercase mb-6 text-sky-400">
                              ( What I Automate )
                          </p>
                          <h2 className="mb-6">Industries & Processes</h2>
                          <p className="text-sm md:text-base text-slate-500 max-w-lg md:mb-10">
                              Every business has unique bottlenecks. I've automated operations across these industries and processes, 
                              delivering measurable time savings and cost reductions.
                          </p>
                      </div>
                      {/* RIGHT SIDE – PILLS */}
                      <div className="w-full lg:w-1/2 flex flex-col gap-8">
                          <div>
                              <h3 className="text-lg font-semibold mb-4 text-slate-300">Industries Automated</h3>
                              <div className="flex flex-wrap gap-3">
                                  {[
                                      "Real Estate & Property",
                                      "Legal Services",
                                      "Logistics & Warehousing",
                                      "Financial Services",
                                      "Healthcare Admin",
                                      "E-commerce Operations",
                                  ].map((industry) => (
                                      <span
                                      key={industry}
                                      className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-300
                                                  bg-sky-900/40 text-sky-200 text-sm font-medium border border-sky-700/50
                                                  hover:bg-sky-900/60 hover:border-sky-500"
                                      >
                                      {industry}
                                      </span>
                                  ))}
                              </div>
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold mb-4 text-slate-300">Processes We Automate</h3>
                              <div className="flex flex-wrap gap-3">
                                  {[
                                      "Document Processing",
                                      "Data Entry Elimination",
                                      "Inventory Tracking",
                                      "Payment Collection",
                                      "Report Generation",
                                      "Email Workflows",
                                      "Customer Onboarding",
                                      "Invoice Processing",
                                      "Appointment Scheduling",
                                      "Compliance & Audits",
                                  ].map((process) => (
                                      <span
                                      key={process}
                                      className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-300
                                                  bg-slate-800/60 text-slate-300 text-sm font-medium border border-slate-700
                                                  hover:bg-slate-800 hover:border-sky-500"
                                      >
                                      {process}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      </div>
                    </div>
                </section>

        </div>
    );
}
