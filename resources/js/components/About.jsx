//the about section on the homepage
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import ModernizingBar from "@/components/ModernizingProgress.jsx";
import NotificationTicker from "./NotificationTicker";

export default function HomeAboutSection() {
    return (
        <section className="w-full text-slate-300 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                    <h2 className="text-3xl md:text-5xl max-w-3xl">
                        Automate workflows and simplify the way your business
                        runs.
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {/* Price comparison card */}
                    <div className="md:col-span-2 rounded-3xl bg-dark/30 border border-slate-800 p-6 md:p-7 flex flex-col gap-6">
                        {/* Header */}
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">
                                Custom Software vs Generic Tools
                            </h2>
                        </div>

                        {/* Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Generic Tools */}
                            <div className="space-y-3">
                                <h3 className="text-base font-semibold text-gray-100 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                                    Generic Tools
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500">•</span>
                                        One-size-fits-none solutions
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500">•</span>
                                        Workarounds, hacks, and missing features
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500">•</span>
                                        Slower processes and manual tasks
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500">•</span>
                                        Hard to scale and maintain
                                    </li>
                                </ul>
                            </div>

                            {/* Custom Software */}
                            <div className="space-y-3">
                                <h3 className="text-base font-semibold text-gray-100 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                                    Custom Software
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        Built for your exact workflows and goals
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        Clean, modern UI that your team will
                                        actually enjoy using
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        Automations that remove busywork and
                                        speed up operations
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        Scalable foundation that grows with your
                                        business
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Launch quickly card */}
                    <div className="rounded-3xl bg-dark/30 border border-slate-800 p-6 md:p-7">
                        <div className="space-y-2 flex flex-col h-full justify-between">
                            <motion.img
                                src="/images/svgs/rocket.svg"
                                alt="Rocket Launch"
                                className="h-32 mt-6"
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                            />
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    From idea to product in record time.
                                </h2>
                                <p className="text-sm text-slate-300">
                                    Leave slow development behind - supported by
                                    years of hands-on, real-world builds.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* No code required */}
                    <div className="rounded-3xl bg-dark/30 border border-slate-800 p-6 md:p-7 flex flex-col justify-between">
                        <div className="space-y-2 mb-4">
                            <h2 className="text-2xl font-semibold">
                                Modern by design.
                            </h2>
                            <p className="text-sm text-gray-300">
                                Every detail of your application crafted for a
                                clean, modern-day experience.
                            </p>
                        </div>

                        <ModernizingBar label="Modernizing your application..." />
                    </div>

                    {/* Strider image card */}
                    <div
                        className="relative rounded-3xl border border-slate-800 p-6 md:p-7 flex flex-col justify-between overflow-hidden"
                        style={{
                            backgroundImage:
                                "url('/images/striderwhite-software-developer.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Gradient + blur overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-100/0 via-slate-200/20 to-slate-300/90" />

                        {/* Content */}
                        <div className="relative z-10 space-y-2 h-full flex flex-col justify-end min-h-82">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Hey, I'm Strider.
                            </h2>
                            <p className="text-sm text-slate-800">
                                I've spent the last 10+ years creating web
                                applications that help businesses just like
                                yours.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-dark/30 border border-slate-800 p-6 md:p-7 flex flex-col justify-between">
                        <div className="space-y-2 mb-4">
                            <h2 className="text-2xl font-semibold">
                                Built to drive real results for your business.
                            </h2>
                            <p className="text-sm text-gray-300">
                                Designed for conversions, bookings, and sales —
                                not just looking pretty.
                            </p>
                        </div>

                        <NotificationTicker />
                    </div>
                </div>
            </div>
        </section>
    );
}
