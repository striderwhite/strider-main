"use client";
import { useEffect, useRef } from "react";

export default function CursorBubble({ containerId }) {
    const bubbleRef = useRef(null);

    useEffect(() => {
        const parent = document.getElementById(containerId);
        const bubble = bubbleRef.current;

        if (!parent || !bubble) return;

        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;
        const speed = 0.2;

        const handleMove = (e) => {
            const rect = parent.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            targetX = x - bubble.offsetWidth / 7;
            targetY = y - bubble.offsetHeight / 7;

            bubble.style.opacity = "1";
        };

        const handleLeave = () => {
            bubble.style.opacity = "0";
        };

        parent.addEventListener("mousemove", handleMove);
        parent.addEventListener("mouseleave", handleLeave);

        const animate = () => {
            currentX += (targetX - currentX) * speed;
            currentY += (targetY - currentY) * speed;

            bubble.style.transform = `translate(${currentX}px, ${currentY}px)`;
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            parent.removeEventListener("mousemove", handleMove);
            parent.removeEventListener("mouseleave", handleLeave);
        };
    }, [containerId]);

    return (
        <div
            ref={bubbleRef}
            className="
                absolute pointer-events-none opacity-0 hidden md:block
                w-20 h-20 rounded-full overflow-hidden
                shadow-[0_0_20px_rgba(59,130,246,0.45)]
                transition-opacity duration-200 ease-out
            "
        >
            <img
                src="/images/strider-headshot.jpg"
                alt="Strider headshot"
                className="w-full h-full object-cover"
            />
        </div>
    );
}
