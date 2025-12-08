import React, { useEffect } from "react";
import "./PixelCanvas"; // just importing registers the <pixel-canvas> element

// CSS string that will be injected once into the document head
const pixelCardsStyles = `
.pixel-grid-wrapper {
  --space: 1rem;
  --fg: #e3e3e3;
  --surface-1: #101012;
  --surface-2: #27272a;
  --surface-3: #52525b;
  --ease-out: cubic-bezier(0.5, 1, 0.89, 1);
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);

  color: var(--fg);
  padding: var(--space);
  display: flex;
  justify-content: center;
  align-items: center;
}

.pixel-grid {
  display: grid;
  grid-template-columns: repeat(var(--count, 1), 1fr);
  gap: var(--space);
  margin: auto;
  inline-size: min(var(--max, 15rem), 100%);
}

@media (min-width: 25rem) {
  .pixel-grid {
    --count: 2;
    --max: 30rem;
  }
}

@media (min-width: 45rem) {
  .pixel-grid {
    --count: 4;
    --max: 60rem;
  }
}

.pixel-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-areas: "card";
  place-items: center;
  aspect-ratio: 4 / 3;
  height: 180px;
  border: 1px solid var(--surface-2);
  isolation: isolate;
  transition: border-color 200ms var(--ease-out);
  user-select: none;
}

.pixel-card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  box-shadow: var(--bg) -0.5cqi 0.5cqi 2.5cqi inset;
  transition: opacity 900ms var(--ease-out);
}

.pixel-card::after {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  aspect-ratio: 1;
  background: radial-gradient(circle, var(--bg), transparent 65%);
  opacity: 0;
  transition: opacity 800ms var(--ease-out);
}

.pixel-card > * {
  grid-area: card;
}

.pixel-card svg {
  position: relative;
  z-index: 1;
  width: 30%;
  height: auto;
  color: var(--surface-3);
  transition: 300ms var(--ease-out);
  transition-property: color, scale;
}

/* Buttons are just there for focus/semantics, not visible in design */
.pixel-card button {
  opacity: 0;
}

.pixel-card:focus-within {
  outline: 5px auto Highlight;
  outline: 5px auto -webkit-focus-ring-color;
}

.pixel-card:where(:hover, :focus-within) {
  border-color: var(--active-color, var(--fg));
  transition: border-color 800ms var(--ease-in-out);
}

.pixel-card:where(:hover, :focus-within) svg {
  color: var(--active-color, var(--fg));
  scale: 1.1;
  transition: 300ms var(--ease-in-out);
}

.pixel-card:where(:hover, :focus-within)::before {
  opacity: 0;
}

.pixel-card:where(:hover, :focus-within)::after {
  opacity: 1;
}
`;

// inject styles once
function useInjectPixelCardStyles() {
    useEffect(() => {
        if (typeof document === "undefined") return;

        const id = "pixel-cards-styles";
        if (document.getElementById(id)) return;

        const style = document.createElement("style");
        style.id = id;
        style.innerHTML = pixelCardsStyles;
        document.head.appendChild(style);
    }, []);
}

export default function PixelCards() {
    useInjectPixelCardStyles();

    return (
        <section className="pixel-grid-wrapper min-h-[300px]">
            <div className="grid grid-cols-2 grid-rows-2 gap-8 w-full max-w-3xl mx-auto">
                {/* Card 1 */}
                <div className="pixel-card">
                    <pixel-canvas data-gap="10" data-speed="25"></pixel-canvas>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={256}
                        height={256}
                        viewBox="0 0 256 256"
                    >
                        <path
                            fill="currentColor"
                            d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"
                        ></path>
                    </svg>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center w-full">
                        <h3 className="text-base font-semibold text-slate-200 mb-1">
                            Business Discovery
                        </h3>
                        <p>Every project starts by understanding the unique workflows, bottlenecks, and goals of the business.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    className="pixel-card"
                    style={{ "--active-color": "#e0f2fe" }}
                >
                    <pixel-canvas
                        data-gap="10"
                        data-speed="25"
                        data-colors="#e0f2fe, #7dd3fc, #0ea5e9"
                    ></pixel-canvas>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                    >
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                        >
                            <path d="M7 5.5c3.59 0 6.5-1.12 6.5-2.5S10.59.5 7 .5S.5 1.62.5 3S3.41 5.5 7 5.5"></path>
                            <path d="M.5 3v8c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5V3"></path>
                            <path d="M13.5 7c0 1.38-2.91 2.5-6.5 2.5S.5 8.38.5 7"></path>
                        </g>
                    </svg>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center w-full">
                        <h3 className="text-base font-semibold text-slate-200 mb-1">
                            Data Engineering
                        </h3>
                        <p>
                            Thoughtfully-built databases from simple automations to complex multi-service designs.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    className="pixel-card"
                    style={{ "--active-color": "#7c3aed" }}
                >
                    <pixel-canvas
                        data-gap="10"
                        data-speed="25"
                        data-colors="#7c3aed, #6366f1, #0ea5e9"
                    ></pixel-canvas>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                    >
                        <g fill="none">
                            <path d="M0 0h24v24H0z"></path>
                            <path
                                fill="currentColor"
                                d="M14.486 3.143a1 1 0 0 1 .692 1.233l-4.43 15.788a1 1 0 0 1-1.926-.54l4.43-15.788a1 1 0 0 1 1.234-.693M7.207 7.05a1 1 0 0 1 0 1.414L3.672 12l3.535 3.535a1 1 0 1 1-1.414 1.415L1.55 12.707a1 1 0 0 1 0-1.414L5.793 7.05a1 1 0 0 1 1.414 0m9.586 1.414a1 1 0 1 1 1.414-1.414l4.243 4.243a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.415L20.328 12z"
                            ></path>
                        </g>
                    </svg>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center w-full">
                        <h3 className="text-base font-semibold text-slate-200 mb-1">
                            Reliable, Modern Code
                        </h3>
                        <p>Clean, scalable, maintainable code built with modern technologies.</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="pixel-card">
                    <pixel-canvas data-gap="10" data-speed="25"></pixel-canvas>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                    >
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth={4}
                        >
                            <path d="M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14"></path>
                            <path d="M44 18H18v26h26z"></path>
                        </g>
                    </svg>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center w-full">
                        <h3 className="text-base font-semibold text-slate-200 mb-1">
                            Human-Centered Design
                        </h3>
                        <p>Accessible, clear, and instantly usable interfaces that your team loves.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
