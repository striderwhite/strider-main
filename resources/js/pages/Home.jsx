//custom components
import { useState, useEffect } from "react";
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/Button";
import NotificationTicker from "@/components/NotificationTicker";
import ModernizingBar from "@/components/ModernizingProgress.jsx";
import FeaturedProjects from "@/components/FeaturedProjects";
import HoverScrambleText from "@/components/HoverScrambleText";
//sections

export default function Home() {
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
        <div className="relative flex flex-col md:gap-48 items-center lg:pt-40 min-h-screen w-full">
            {/* network background */}
            <NetworkBackground />

            {/* Hero */}
            <div className="relative z-20 flex flex-col items-center h-full">
                <h1 className="font-bold mb-4 text-center leading-[1.3]">
                    Building software applications <br /> for modern businesses.
                </h1>
                <div className="flex flex-col items-center mt-4 mb-2">
                    <div className="flex items-center gap-6">
                        <p className="text-slate-300">From concept</p>

                        {/* Line with animated pulse */}
                        <div className="relative w-64 h-[2px] bg-blue-600/40 overflow-hidden rounded-full">
                            <span className="absolute inset-0 animate-slide bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"></span>
                        </div>

                        <p className="text-slate-300">to deployment</p>
                    </div>
                </div>
                <Button variant="secondary" className="mt-6" link="/contact">
                    Get Started
                </Button>
            </div>

            {/* Intro Section */}
            <div className="max-w-3xl text-center">
                <img
                    src="/images/software-hero.png"
                    className="h-[600px] rounded-3xl mb-16 mx-auto transition-transform duration-200 ease-out"
                    style={{
                        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${
                            mousePosition.x
                        }deg)`,
                    }}
                />
                <p className="text-2xl">
                    I design and build modern web applications that let
                    businesses operate at their highest potential. By
                    streamlining workflows, automating time-consuming tasks, and
                    eliminating inefficiencies, I remove bottlenecks and create
                    momentum.
                </p>
                <p className="text-2xl text-slate-100 mt-6 font-semibold">
                    Software built for the pace of a modern business — fast,
                    future-ready, and tailored to the way you work.
                </p>
            </div>

                <FeaturedProjects />


            {/* Features Section */}
            <div className="w-full max-w-[1040px] space-y-4 md:space-y-8">
                <div>
                    <p  className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                        Benefit
                    </p>
                    <h2 className="mt-2 md:mt-6 font-semibold">
                        Push your company past the competition.
                    </h2>
                </div>
                <div className="flex md:flex-row justify-between md:gap-6 mx-auto">
                    <section className="md:w-1/2 items-stretch">
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
                    <section className="md:w-1/2 items-stretch">
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
                <div>
                    
                </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-[1040px]">
                <h2 className="mb-10">
                    Push your company past the competition.
                </h2>

                <div className="flex gap-12">
                    <div className="flex gap-5 flex-col w-1/2">
                        <p className="text-2xl border-t border-b border-slate-800 py-4 hover:bg-blue-400"><HoverScrambleText text="Automate slow, manual tasks" />
</p>
                        <p className="text-2xl border-b border-slate-800 pb-4"><HoverScrambleText text="Cut operating costs" /></p>
                
                        <p className="text-2xl border-b border-slate-800 pb-4"><HoverScrambleText text="Replace messy spreadsheets" /></p>
                       
                        <p className="text-2xl border-b border-slate-800 pb-4"><HoverScrambleText text="Shorten project timelines" /></p>
                    
                    </div>
                    <div className="flex gap-5 flex-col w-1/2">
                       
                        <p className="text-2xl border-t border-b border-slate-800 py-4"><HoverScrambleText text="Boost team productivity" /></p>
                       
                        <p className="text-2xl border-b border-slate-800 pb-4"><HoverScrambleText text="Improve data accuracy" /></p>
                        
                        <p className="text-2xl border-b border-slate-800 pb-4"><HoverScrambleText text="Unlock real-time insights" /></p>
                       
                        <p className="text-2xl border-b border-slate-800 pb-4"><HoverScrambleText text="Scale without extra resources" /></p>
                      
                    </div>
                </div>
            </div>

            {/* About section */}
            <div className="bg-[#111d31] h-[90vh] w-full">
                <div className="flex max-w-[1040px] mx-auto h-full items-center">
                    <div className="flex justify-between items-start">
                        <img src="/images/striderwhite-software-developer.jpg" alt="Strider white software developer" className="h-32 rounded-full"/>
                        <div className="w-2/3">
                            <h2 className="mb-6">Your journey is short because ours was long.</h2>
                            <p className="text-2xl">
                                Our speed isn't driven by luck. It's fueled by the momentum
                                of two decades at Pentagram and Milton Glaser, building
                                brands for household names. We know the secret recipe to
                                create exceptional, stand out brands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
