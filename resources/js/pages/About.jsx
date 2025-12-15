import TextScrambleEffect from "@/components/TextScrambleEffect";
import SphereScan from "@/components/SphereScan";

const experiences = [
    {
        role: "Partner",
        company: "Upskill Condominium Management Ltd.",
        year: "2025 - Now",
    },
        {
        role: "Partner",
        company: "Condo Doc Review.",
        year: "2025 - Now",
    },
    {
        role: "Team Lead & Senior Full-Stack Developer",
        company: "Fabled Solutions",
        year: "2023-2025",
    },
    {
        role: "Full-Stack Developer",
        company: "Fabled Solutions",
        year: "2019 - 2023",
    },
       {
        role: "Contract Developer",
        company: "-",
        year: "2017 - 2022",
    },
    {
        role: "Software QA Analyst",
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
                    Pairing <span className="">expert development skills</span>{" "}
                    with a passion for{" "}
                    <span className="font-italic">
                        simplifying complex problems.
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
                        ( Profile )
                    </p>

                    <div className="grid gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
                        {/* Left column: big heading + small text */}
                        <div className="flex flex-col justify-between h-full">
                            <h2 className="mb-6 md:mb-0">
                                For over 10 years, I've specialized in planning and building software that saves businesses time and money.
                            </h2>

                            <p> 
                                I'm a fullstack developer and team lead with years of experience delivering high-performance web applications, APIs, and custom data systems. I specialize in end-to-end development, from advanced data modeling and backend architecture to modern UIs and cross-platform deployment.
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
                            ( About )
                        </p>

                        <h2 className="mb-6">My Experience</h2>

                        <p className="text-sm md:text-base text-slate-500 max-w-md md:mb-10">
                            Throughout my career I've had the privilege of
                            working with teams across different industries,
                            helping them ship reliable products and streamline
                            the way they work.
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
                              ( About )
                          </p>
                          <h2 className="mb-6">My Skillset</h2>
                          <p className="text-sm md:text-base text-slate-500 max-w-lg md:mb-10">
                              I am always striving to perfect the skills that I already have, while growing new ones to better serve my clients and their needs.
                          </p>
                      </div>
                      {/* RIGHT SIDE – PILLS */}
                      <div className="w-full lg:w-1/2 flex flex-wrap gap-4">
                          {[
                              "Laravel",
                              "Vue",
                              "MySQL",
                              "PHP",
                              "API development",
                              "Automation",
                              "Javascript",
                              "ASM/C/C++",
                              "C#",
                              "AWS",
                              "Stripe",
                              "AI, LLMs, and OCR",
                          ].map((skill) => (
                            <span
                            key={skill}
                            className="inline-flex items-center px-5 h-8 rounded-full transition-all duration-300
                                        bg-sky-900/80 text-sky-100 cursor-pointer text-base font-semibold border border-sky-700/40
                                        shadow-[0_0_10px_rgba(56,189,248,0.25)]
                                        hover:shadow-[0_0_18px_rgba(56,189,248,0.55)] hover:border-sky-400"
                            >
                            {skill}
                            </span>
                          ))}
                      </div>
                    </div>
                </section>

        </div>
    );
}
