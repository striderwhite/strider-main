import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "condo-doc-review",
        title: "Condo Doc Review",
        subtitle:
            "Software that creates custom condo doc reports for clients.",
        image: "/images/profile-main.jpg",
    },
    {
        id: "logistic-software-solution",
        title: "Logistic Software Solution",
        subtitle: "Insert quick explanation here.",
        image: "/images/projects/workflow-engine.jpg",
    },
    {
        id: "dsllp-minute-book",
        title: "DSLLP Minute Book (Coming Soon)",
        subtitle: "Insert quick explanation here.",
        image: "/images/projects/client-portal.jpg",
    },
];

export default function FeaturedProjects() {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const trackRef = useRef(null);
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

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

    // Mouse move handler for floating box
    const handleMouseMove = (e) => {
        setCursor({ x: e.clientX, y: e.clientY });
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full"
        >
            {/* Floating 'view ->' box */}
            {hoveredIdx !== null && (
                <div
                    style={{
                        left: cursor.x + -40,
                        top: cursor.y + -20,
                        pointerEvents: "none",
                    }}
                    className="fixed z-50 px-4 py-2 bg-white text-black text-xs rounded-lg font-semibold transition-transform duration-75 mix-blend-difference"
                >
                    view <Icon icon="material-symbols-light:line-end-arrow" width="16" height="16" className="inline-block text-black mix-blend-difference" />
                </div>
            )}
            <div
                ref={pinRef}
                className="mx-auto flex max-w-6xl flex-row items-start px-4 pt-16 md:pt-24"
                style={{ minHeight: `calc(100vh + ${projects.length * 400}px)` }}
            >
                {/* Left: Featured projects label pinned */}
                <div className="flex flex-col justify-start items-start min-w-[180px] pr-8 pt-2 sticky top-24 self-start z-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
                      ( Featured projects )
                    </p>
                </div>

                {/* Right: Cards scroll vertically past pinned label */}
                <div className="flex-1 w-full flex flex-col gap-12">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className="flex items-start justify-center"
                        >
                            <Link
                                to={`/projects/${project.id}`}
                                className="w-full max-w-[600px] flex flex-col gap-1 group relative"
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                onMouseMove={handleMouseMove}
                            >
                                <motion.article
                                    className="w-full flex flex-col gap-1"
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 220,
                                        damping: 20,
                                    }}
                                >
                                    <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-800 transition">
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
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
