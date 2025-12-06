import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

//full page dropdown for Projects
const ProjectsDropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
    return (
        <motion.div
            className="fixed inset-x-0 top-[64px] bottom-0 bg-gradient-to-b from-[#030a1b]/5 via-[#030a1b] to-[#030a1b] backdrop-blur-3xl z-40"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <div className="w-full max-w-[1040px] mx-auto flex flex-col py-8 h-full">
                <div className="flex flex-col space-y-6 lg:space-y-12 h-1/2 justify-center md:px-10">
                    <h3 className="text-slate-400 font-2xl">Featured Projects</h3>
                    <Link
                        to="#"
                        className="text-slate-300 lg:text-5xl hover:text-primary transition"
                    >
                        Condo Doc Review
                    </Link>
                    <Link
                        to="#"
                        className="text-slate-300 lg:text-5xl hover:text-primary transition"
                    >
                        DSLLP Minute Book
                    </Link>
                    <Link
                        to="#"
                        className="text-slate-300 lg:text-5xl hover:text-primary transition"
                    >
                        Logistic Software Solutions
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default function Navbar() {
    const [projectsOpen, setProjectsOpen] = useState(false); // controls animation state
    const [projectsVisible, setProjectsVisible] = useState(false); // controls mounting
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setProjectsOpen(false);
        setMobileOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileOpen]);

    // Prevent body scroll when projects dropdown is open
    useEffect(() => {
        if (projectsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [projectsOpen]);

    // keep dropdown mounted long enough to fade out
    useEffect(() => {
        let timeout;
        if (projectsOpen) {
            // when opening, show immediately
            setProjectsVisible(true);
        } else {
            // when closing, wait for fade-out to finish before unmounting
            timeout = setTimeout(() => {
                setProjectsVisible(false);
            }, 200); // match transition duration
        }
        return () => clearTimeout(timeout);
    }, [projectsOpen]);

    const openProjects = () => setProjectsOpen(true);
    const closeProjects = () => setProjectsOpen(false);

    return (
        <>
            <nav className="w-full fixed top-0 left-0 z-30 text-slate-300 bg-transparent backdrop-blur-lg">
                <div className="max-w-[1040px] mx-auto px-4 flex items-center justify-between h-16">
                    {/* nav links desktop */}
                    <div className="hidden md:flex flex-1 items-center justify-start space-x-8">
                        <div className="relative" onMouseEnter={openProjects}>
                            <button className="hover:text-blue-600 transition focus:outline-none text-lg">
                                Projects
                            </button>
                        </div>
                        <Link
                            to="/about"
                            className="hover:text-blue-600 transition text-lg"
                            onMouseEnter={closeProjects}
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            className="hover:text-blue-600 transition text-lg"
                            onMouseEnter={closeProjects}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* logo */}

                    <div className="md:w-1/3 justify-center flex">
                        <Link
                            to="/"
                            className="text-lg font-bold"
                        >
                            StriderWhite
                        </Link>
                    </div>

                    {/* desktop socials */}
                    <div className="hidden md:flex w-1/3 justify-end items-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/striderwhite/"
                            target="_blank"
                            className="text-slate-300 hover:text-blue-600 transition"
                        >
                            <Icon icon="mdi:linkedin" width="24" height="24" />
                        </a>
                        <a
                            href="https://github.com/striderwhite"
                            target="_blank"
                            className="text-slate-300 hover:text-blue-600 transition"
                        >
                            <Icon icon="mdi:github" width="24" height="24" />
                        </a>
                    </div>

                    {/* mobile menu button, hidden in desktop */}
                    <button
                        className="md:hidden text-2xl text-slate-300 focus:outline-none"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Open menu"
                    >
                        <span className="fa fa-bars"></span>
                    </button>
                </div>

                {/* nav links mobile */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            key="mobile-menu"
                            className="md:hidden fixed inset-0 w-full h-full z-40 px-4 pt-20 pb-4 flex flex-col space-y-2 bg-gradient-to-b from-[#030a1b]/5 via-[#030a1b] to-[#030a1b] backdrop-blur-xl text-slate-300"
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <button
                                className="absolute top-4 right-3 text-3xl focus:outline-none"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close menu"
                            >
                                <Icon icon="mdi:close" width="32" height="32" />
                            </button>

                            <Link
                                to="/"
                                className="py-2 text-2xl font-bold text-slate-300"
                                onClick={() => setMobileOpen(false)}
                            >
                                Home
                            </Link>

                            <details>
                                <summary className="py-2 cursor-pointer text-2xl font-bold">
                                    Projects
                                </summary>
                                <div className="pl-4 flex flex-col space-y-1">
                                    <h2 className="text-slate-300 font-xs">Featured Projects</h2>
                                    <Link to="#" className="py-1 text-lg text-slate-300">
                                        Condo Doc Review
                                    </Link>
                                    <Link to="#" className="py-1 text-lg text-slate-300">
                                        DSLLP Minute Book
                                    </Link>
                                    <Link to="#" className="py-1 text-lg text-slate-300">
                                         Logistic Software Solutions
                                    </Link>
                                </div>
                            </details>

                            <Link
                                to="/about"
                                className="py-2 text-2xl font-bold text-slate-300"
                                onClick={() => setMobileOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="py-2 text-2xl font-bold text-slate-300"
                                onClick={() => setMobileOpen(false)}
                            >
                                Contact
                            </Link>

                            {/* mobile socials */}
                            <div className="flex space-x-4 pt-12">
                                <a
                                    href="https://www.linkedin.com/in/striderwhite/"
                                    target="_blank"
                                    className="hover:text-blue-600 transition"
                                >
                                    <Icon
                                        icon="mdi:linkedin"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                                <a
                                    href="https://github.com/striderwhite"
                                    target="_blank"
                                    className="hover:text-blue-600 transition"
                                >
                                    <Icon
                                        icon="mdi:github"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Projects Dropdown - Rendered outside nav */}
            <AnimatePresence>
                {projectsVisible && (
                    <ProjectsDropdown
                        key="projects-dropdown"
                        isOpen={projectsOpen}
                        onMouseEnter={openProjects}
                        onMouseLeave={closeProjects}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
