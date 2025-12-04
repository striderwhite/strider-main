//custom components
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/Button";
import NotificationTicker from "@/components/NotificationTicker";
import ModernizingBar from "@/components/ModernizingProgress.jsx";
//sections

export default function Home() {
    return (
        <div className="relative flex flex-col md:gap-32 items-center lg:pt-40 min-h-screen w-full">
            {/* network background */}
            <NetworkBackground />

            {/* Hero */}
            <div className="relative z-20 flex flex-col items-center h-full">
                <h1 className="lg:text-[64px] font-bold mb-4 text-slate-200 text-center leading-[1.3]">
                    Building software applications <br /> for modern businesses.
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl text-center">
                    Custom-built software designed around your processes,
                    modernized and made to scale alongside your business.
                </p>
                <Button variant="secondary" className="mt-6">
                    Get Started
                </Button>
            </div>

            <div className="flex justify-between gap-6 mx-auto">
                <section className="md:w-1/2 items-stretch">
                    <div className="rounded-3xl bg-dark/30 border border-slate-800 p-6 md:p-7 flex flex-col justify-between h-full">
                        {/* Text Side */}
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-2xl font-semibold text-slate-200">
                                Built to drive real results for your business.
                            </h2>
                            <p className="text-slate-300 max-w-lg">
                                Web applications created for conversions,
                                streamlined operations, and sustainable growth.
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
                            <h2 className="text-2xl font-semibold text-slate-200">
                                Modern by design.
                            </h2>
                            <p className="text-slate-300">
                                Every detail of your application crafted for a
                                clean, modern-day experience.
                            </p>
                        </div>

                        <ModernizingBar label="Modernizing your application..." />
                    </div>
                </section>
            </div>
        </div>
    );
}
