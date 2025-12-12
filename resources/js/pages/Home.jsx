"use client";

//custom components
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/Button";
import NotificationTicker from "@/components/NotificationTicker";
import ModernizingBar from "@/components/ModernizingProgress.jsx";
import FeaturedProjects from "@/components/FeaturedProjects";
import HoverScrambleText from "@/components/HoverScrambleText";
import CursorBubble from "@/components/CursorBubble";

export default function Home() {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX - window.innerWidth / 2) / 50;
            const y = (e.clientY - window.innerHeight / 2) / 50;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative flex flex-col gap-16 md:gap-48 items-center pt-24 md:pt-32 lg:pt-40 min-h-screen w-full px-4 md:px-6">
            {/* network background */}
            <NetworkBackground />

            {/* Hero */}
            <div className="relative z-20 flex flex-col items-center h-full w-full">
                <h1 className="font-bold mb-4 text-center leading-[1.3] max-w-4xl">
                    Building software applications{" "}
                    <br className="hidden sm:block" /> for modern businesses.
                </h1>
                <div className="flex flex-col items-center mt-4 mb-2 w-full">
                    <div className="flex flex-row items-center gap-3 sm:gap-6">
                        <p className="text-slate-300 text-sm sm:text-base">
                            From concept
                        </p>

                        {/* Line with animated pulse */}
                        <div className="relative w-28 md:w-64 h-[2px] bg-blue-600/40 overflow-hidden rounded-full">
                            <span className="absolute inset-0 animate-slide bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"></span>
                        </div>

                        <p className="text-slate-300 text-sm sm:text-base">
                            to deployment
                        </p>
                    </div>
                </div>
                <Button variant="secondary" className="mt-6" link="/contact">
                    Get Started
                </Button>
            </div>

            {/* Intro Section */}
            <div>
                <img
                    src="/images/software-hero.png"
                    className="w-full max-w-[800px] rounded-xl md:rounded-3xl mb-16 mx-auto transition-transform duration-200 ease-out"
                    style={{
                        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${
                            mousePosition.x
                        }deg)`,
                    }}
                />
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-24 max-w-[1040px] pt-12 md:pt-24">
                    <h3 className="text-center md:text-left md:w-1/2">
                        Software built for the pace of a modern business — fast,
                        future-ready, and tailored to the way you work.
                    </h3>
                    <p className="text-center md:text-left md:w-1/2">
                        I design and build modern web applications that let
                        businesses operate at their highest potential. By
                        streamlining workflows, automating time-consuming tasks,
                        and eliminating inefficiencies, I remove bottlenecks and
                        create momentum.
                    </p>
                </div>
            </div>

            <FeaturedProjects />

            {/* Features Section */}
            <div className="w-full max-w-[1200px] space-y-4 md:space-y-8 mt-24">
                <div className="text-center mb-8 md:mb-20">
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
                        ( Benefit )
                    </p>
                    <h2 className="mt-2 md:mt-6 font-semibold">
                        Push your company past the competition.
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6 mx-auto">
                    <section className="w-full md:w-1/2 items-stretch">
                        <div className="rounded-3xl bg-dark/30 border border-slate-800 p-6 md:p-7 flex flex-col justify-between h-full">
                            {/* Text Side */}
                            <div className="space-y-4 max-w-2xl">
                                <h3 className="font-semibold">
                                    Built to drive real results.
                                </h3>
                                <p className="max-w-lg">
                                    Web applications designed for higher
                                    conversions, smooth operations, and scalable
                                    growth. Start using software that's built
                                    just for your business.
                                </p>
                            </div>
                            {/* Ticker Side */}
                            <div className="w-full max-w-xs md:max-w-sm flex-shrink-0 mt-4">
                                <NotificationTicker />
                            </div>
                        </div>
                    </section>
                    <section className="w-full md:w-1/2 items-stretch">
                        <div className="rounded-3xl bg-dark/30 border border-slate-800 p-6 md:p-7 flex flex-col justify-between h-full">
                            <div className="space-y-2 mb-4">
                                <h3 className="font-semibold">
                                    Modern by design.
                                </h3>
                                <p>
                                    Keep your business up to date with software
                                    built for the times. Every detail of your
                                    application is crafted for a clean, modern
                                    experience.
                                </p>
                            </div>
                            <ModernizingBar label="Modernizing your application..." />
                        </div>
                    </section>
                </div>
                <div></div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-[1200px] w-full mt-12 md:mt-0">
                <h2 className="mb-10 text-center md:text-left w-full md:w-1/2">
                    A faster,{" "}
                    <span className="bg-gradient-to-r from-[#4f8df0] to-[#5cd4ec] bg-clip-text text-transparent">
                        more efficient
                    </span>{" "}
                    way to run your business.
                </h2>

                <div className="flex w-full justify-center md:justify-end">
                    <div className="flex flex-col md:flex-row md:gap-12 max-w-3xl w-full">
                        <div className="flex gap-5 flex-col w-full md:w-1/2">
                            <HoverScrambleText
                                text="Automate slow, manual tasks"
                                className="text-xl border-t border-b border-slate-800 py-4 text-center md:text-left"
                            />
                            <HoverScrambleText
                                text="Cut operating costs"
                                className="text-xl border-b border-slate-800 pb-4 text-center md:text-left"
                            />
                            <HoverScrambleText
                                text="Replace messy spreadsheets"
                                className="text-xl border-b border-slate-800 pb-4 text-center md:text-left"
                            />
                            <HoverScrambleText
                                text="Shorten project timelines"
                                className="text-xl md:border-b border-slate-800 pb-4 text-center md:text-left"
                            />
                        </div>
                        <div className="flex gap-5 flex-col w-full md:w-1/2">
                            <HoverScrambleText
                                text="Boost team productivity"
                                className="text-xl border-t border-b border-slate-800 py-4 text-center md:text-left"
                            />
                            <HoverScrambleText
                                text="Improve data accuracy"
                                className="text-xl border-b border-slate-800 pb-4 text-center md:text-left"
                            />
                            <HoverScrambleText
                                text="Easily take payments"
                                className="text-xl border-b border-slate-800 pb-4 text-center md:text-left"
                            />
                            <HoverScrambleText
                                text="Scale without extra resources"
                                className="text-xl border-b border-slate-800 pb-4 text-center md:text-left"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* About section */}
            <div className="mb-16 md:h-[80vh] md:mb-[-100px] w-full mt-12 md:mt-0" id="about-section">
                <CursorBubble containerId="about-section" />
                <div className="flex max-w-[1200px] mx-auto h-full items-center px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full">
                        <img
                            src="/images/profile-main-head.png"
                            alt="Strider white software developer"
                            className="h-24 md:h-36 rounded-full"
                        />
                        <div className="w-full md:w-2/3">
                            <p className="text-xs uppercase tracking-[0.25em] text-sky-400 mb-6 text-left">
                                ( Nice to meet you )
                            </p>
                            <h2 className="mb-8 max-w-[600px] flex gap-3 items-center text-left md:justify-start mx-auto md:mx-0">
                                Hi, I'm Strider{" "}
                                <Icon icon="mdi:hand-wave-outline" />
                            </h2>
                            <div className="flex flex-col gap-3">
                                <p className="text-base md:text-xl">
                                    I'm a software developer based in Edmonton,
                                    Alberta, with a passion for building
                                    software that's secure, scalable, and
                                    genuinely makes life easier for the people
                                    who use it every day.
                                </p>
                                <p className="text-base md:text-xl">
                                    My work includes developing AI-driven
                                    pipelines and chatbot frameworks,leading
                                    teams, architecting enterprise-level SaaS
                                    platforms, and shipping production systems
                                    trusted by hundreds of clients.
                                </p>
                                <p className="text-base md:text-xl">
                                    Coding has been a lifelong passion for me.
                                    When I'm not coding, you can find me walking
                                    my dog Ace, snowboarding, or restarting my
                                    Factorio factory for the millionth time.
                                </p>
                            </div>
                            <Button
                                variant="secondary"
                                className="mt-12"
                                link="/about"
                            >
                                About Me
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
