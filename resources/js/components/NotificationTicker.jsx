import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

// Notification ticker component for last card in home about section
const icons = [
    "mingcute:stripe-fill", // Payment received
    "mdi:account-plus", // New registration
    "mdi:file-check", // Documents processed
    "mdi:account-group", // New clients
    "mdi:calendar-check", // Booking confirmed
    "mdi:server", // Server healthy
    "mdi:chart-line", // Weekly report
];

const texts = [
    "You received a payment of $4,989!",
    "New registration received.",
    "Your documents have been processed.",
    "You have 3 new clients.",
    "Your booking has been confirmed.",
    "All systems are running smoothly.",
    "Your weekly performance report is ready.",
];

const colors = [
    "bg-green-500",
    "bg-sky-500",
    "bg-amber-500",
    "bg-violet-500",
    "bg-pink-500",
    "bg-emerald-500",
    "bg-blue-600",
];

export default function NotificationTicker(){
    const items = texts.map((text, idx) => ({
        text,
        icon: icons[idx],
        color: colors[idx],
    }));

    const wrapperRef = useRef(null);
    const listRef = useRef(null);
    const y = useMotionValue(0);
    const [listHeight, setListHeight] = useState(0);

    // Measure height of a single list so we know when to wrap
    useEffect(() => {
        if (listRef.current) {
            const rect = listRef.current.getBoundingClientRect();
            setListHeight(rect.height);
        }
    }, []);

    useAnimationFrame((t, delta) => {
        if (!listHeight) return;
        const speed = 10; // pixels per second (tweak to taste)
        const moveBy = (speed * delta) / 1000;

        let current = y.get();
        let next = current - moveBy;

        // When we've scrolled one full list height, jump back to 0
        if (next <= -listHeight) {
            next = 0;
        }

        y.set(next);
    });

return (
    <div ref={wrapperRef} className="relative h-40 overflow-hidden">

        {/* === Scroller === */}
        <motion.div
            style={{ y }}
            className="absolute inset-0 flex flex-col gap-2 z-10"
        >
            {/* First list */}
            <div ref={listRef}>
                {items.map((item, idx) => (
                    <div
                        key={`a-${idx}`}
                        className="flex items-center mt-2 gap-3 rounded-2xl bg-slate-800 px-3 py-2 text-xs"
                    >
                        <div
                            className={`flex h-7 w-7 items-center justify-center rounded-full ${item.color} text-slate-100`}
                        >
                            <Icon icon={item.icon} width={18} height={18} />
                        </div>
                        <span className="text-slate-200">{item.text}</span>
                    </div>
                ))}
            </div>

            {/* Duplicate for infinite loop */}
            <div aria-hidden="true">
                {items.map((item, idx) => (
                    <div
                        key={`b-${idx}`}
                        className="flex items-center mt-2 gap-3 rounded-2xl bg-slate-800 px-3 py-2 text-xs"
                    >
                        <div
                            className={`flex h-7 w-7 items-center justify-center rounded-full ${item.color} text-slate-100`}
                        >
                            <Icon icon={item.icon} width={18} height={18} />
                        </div>
                        <span className="text-slate-200">{item.text}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    </div>
);

};