import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "./Button";

const FooterTubes = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        let app = null;
        let cancelled = false;

        async function init() {
            if (!canvasRef.current) return;
            if (window.matchMedia("(pointer: coarse)").matches) return; // don't implement on mobile

            // Dynamically import the cursor effect from the CDN (same as CodePen)
            const module = await import(
                "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
            );

            const TubesCursor = module.default || module;

            if (cancelled) return;

            // Initialize Tubes cursor
            app = TubesCursor(canvasRef.current, {
                tubes: {
                    colors: ["#3566EE", "#4F8CFD", "#7EA7FF"], // your brand colors
                    lights: {
                        intensity: 200,
                        colors: [
                            "#60A5FA", // bright blue
                            "#3B82F6", // vibrant blue
                            "#A5B4FC", // indigo-light
                            "#67E8F9", // cyan glow
                        ],
                    },
                },
            });
        }

        init();

        return () => {
            cancelled = true;
            // If dispose exists, call it (the library doesn't expose one cleanly)
            // app?.dispose?.();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
};

export default function Footer() {
    return (
        <footer className="relative w-full h-[80vh] text-center py-16 mt-32 overflow-hidden flex flex-col items-center justify-center gap-6">
            {/* Tubes cursor background */}
            <div className="absolute inset-0 -z-10 opacity-50">
                <FooterTubes />
            </div>

            <div className="max-w-3xl px-4">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Let's bring your ideas to life.
                </h2>
                <Button variant="secondary" className="mt-6" link="/contact">
                    Start a Project
                </Button>
            </div>
            <p className="text-xs mt-auto absolute bottom-4">
                &copy; {new Date().getFullYear()} Strider. All rights reserved.
            </p>
        </footer>
    );
}
