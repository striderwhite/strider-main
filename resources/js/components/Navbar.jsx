import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

//full page dropdown for Projects
const ProjectsDropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
    return (
        <motion.div
            className="fixed left-0 right-0 top-[64px] w-full h-[calc(100vh-64px)] bg-red-200 z-40"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <div className="w-full flex flex-col items-center py-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Projects</h2>
                <div className="flex flex-col space-y-4 flex-1 justify-center">
                    <Link
                        to="#"
                        className="text-lg hover:text-blue-600 transition"
                    >
                        Project One
                    </Link>
                    <Link
                        to="#"
                        className="text-lg hover:text-blue-600 transition"
                    >
                        Project Two
                    </Link>
                    <Link
                        to="#"
                        className="text-lg hover:text-blue-600 transition"
                    >
                        Project Three
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
            <nav className="w-full fixed top-0 left-0 z-30">
                <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between h-16">
                    {/* nav links desktop */}
                    <div className="hidden md:flex w-1/3 items-center justify-start space-x-6">

                        <div className="relative" onMouseEnter={openProjects}>
                            <button className="hover:text-blue-600 transition focus:outline-none">
                                Projects
                            </button>
                        </div>
                        <AnimatePresence>
                            {projectsVisible && (
                                <ProjectsDropdown
                                    key="projects-dropdown"
                                    isOpen={projectsOpen}
                                    onMouseEnter={openProjects}
                                    onMouseLeave={closeProjects}
                                    className="z-50 bg-green-900"
                                />
                            )}
                        </AnimatePresence>

                        <Link
                            to="/about"
                            className="hover:text-blue-600 transition"
                            onMouseEnter={closeProjects}
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            className="hover:text-blue-600 transition"
                            onMouseEnter={closeProjects}
                        >
                            Contact
                        </Link>

                    </div>

                    {/* logo */}

                    <div className="md:w-1/3 justify-center flex">
                        <Link
                            to="/"
                            className="text-xl font-bold text-gray-900"
                        >
                            Strider
                        </Link>
                    </div>

                    {/* desktop socials */}
                    <div className="hidden md:flex w-1/3 justify-end items-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/striderwhite/"
                            target="_blank"
                            className="hover:text-blue-600 transition"
                        >
                            <Icon icon="mdi:linkedin" width="24" height="24" />
                        </a>
                        <a
                            href="https://github.com/striderwhite"
                            target="_blank"
                            className="hover:text-blue-600 transition"
                        >
                            <Icon icon="mdi:github" width="24" height="24" />
                        </a>
                    </div>

                    {/* mobile menu button, hidden in desktop */}
                    <button
                        className="md:hidden text-2xl text-gray-700 focus:outline-none"
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
                        className="md:hidden fixed inset-0 w-full h-full z-40 px-4 pt-20 pb-4 flex flex-col space-y-2 bg-white"
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
                            className="py-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            Home
                        </Link>

                        <details>
                            <summary className="py-2 cursor-pointer">
                                Projects
                            </summary>
                            <div className="pl-4 flex flex-col space-y-1">
                                <Link to="#" className="py-1">
                                    Project One
                                </Link>
                                <Link to="#" className="py-1">
                                    Project Two
                                </Link>
                                <Link to="#" className="py-1">
                                    Project Three
                                </Link>
                            </div>
                        </details>

                        <Link
                            to="/about"
                            className="py-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="py-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            Contact
                        </Link>

                    {/* mobile socials */}
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/striderwhite/"
                            target="_blank"
                            className="hover:text-blue-600 transition"
                        >
                            <Icon icon="mdi:linkedin" width="24" height="24" />
                        </a>
                        <a
                            href="https://github.com/striderwhite"
                            target="_blank"
                            className="hover:text-blue-600 transition"
                        >
                            <Icon icon="mdi:github" width="24" height="24" />
                        </a>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </nav>
        </>
    );
}
