import TextScrambleEffect from "@/components/TextScrambleEffect";

export default function About() {
    return (
        <div className="flex flex-col md:gap-32">
            <div className="max-w-[1200px] flex flex-col mx-auto text-center justify-center min-h-screen gap-4">
                <TextScrambleEffect />
                <h1>
                    I pair <span className="">expert development skills</span>{" "}
                    with a passion for{" "}
                    <span className="font-italic">
                        simplifying complex problems.
                    </span>
                </h1>
            </div>

            {/* about */}

            <section className="px-6 md:px-10 max-w-[1200px] mx-auto">
                <div className="">
                    {/* Top label */}
                    <p className="text-xs tracking-[0.25em] uppercase mb-6 text-sky-400">
                        ( Profile )
                    </p>

                    <div className="grid gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
                        {/* Left column: big heading + small text */}
                        <div className="flex flex-col justify-between h-full">
                            <h2>
                                For over 10 years, I've focused on simplifying
                                the manual, outdated tasks businesses handle
                                every day by creating software that works for
                                them.
                            </h2>

                            <p className="mt-10 text-sm md:text-base max-w-xl text-neutral-600">
                                Specializing in custom web applications, systems
                                design, and user experience, I strive to save businesses time and money by creating tools that work for them.
                            </p>
                        </div>

                        {/* Right column: main portrait + small image */}
                        <div className="flex flex-col gap-6 items-end">
                            {/* Main image */}
                            <div className="w-full max-w-md">
                                <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-300">
                                    {/* Replace src with your own image */}
                                    <img
                                        src="/images/profile-main.jpg"
                                        alt="Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Small image aligned bottom-right */}
                            <div className="w-40 md:w-56">
                                <div className="aspect-video overflow-hidden bg-neutral-300">
                                    {/* Replace src with your own image */}
                                    <img
                                        src="/images/profile-small.jpg"
                                        alt="Secondary portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
