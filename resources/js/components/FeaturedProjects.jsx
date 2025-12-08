import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Ops Dashboard",
        subtitle:
            "Automates reporting so your team stops living in spreadsheets.",
        image: "/images/projects/ops-dashboard.jpg",
    },
    {
        title: "Client Portal",
        subtitle: "A self-serve hub that cuts support requests in half.",
        image: "/images/projects/client-portal.jpg",
    },
    {
        title: "Workflow Engine",
        subtitle: "Rule-based flows that keep every project moving on time.",
        image: "/images/projects/workflow-engine.jpg",
    },
];

export default function FeaturedProjects() {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const pin = pinRef.current;
        const track = trackRef.current;
        if (!section || !pin || !track) return;

        const totalSlides = projects.length;
        const scrollLength = window.innerHeight * (totalSlides - 1);

        // Enough height for the pinned sequence + exit
        section.style.height = `${scrollLength + window.innerHeight}px`;

        const ctx = gsap.context(() => {
            gsap.to(track, {
                yPercent: -100 * (totalSlides - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: `+=${scrollLength}`,
                    scrub: true,
                    pin: pin,
                    anticipatePin: 1,
                    // Removed snap for free scroll
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full"
        >
            <div
                ref={pinRef}
                className="mx-auto flex max-w-6xl flex-row items-start px-4 pt-16 md:pt-24"
                style={{ minHeight: `calc(100vh + ${projects.length * 380}px)` }}
            >
                {/* Left: Featured projects label pinned */}
                <div className="flex flex-col justify-start items-start min-w-[180px] pr-8 pt-2 sticky top-24 self-start z-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
                      ( Featured projects )
                    </p>
                </div>

                {/* Right: Cards scroll vertically past pinned label */}
                <div className="flex-1 w-full flex flex-col gap-24 pt-12">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="flex items-start justify-center"
                        >
                            <motion.article
                                className="w-full max-w-[600px] flex flex-col gap-1"
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 20,
                                }}
                            >
                                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-800">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <h3 className="mt-2 text-xl md:text-2xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="text-sm md:text-lg text-slate-300">
                                    {project.subtitle}
                                </p>
                            </motion.article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
