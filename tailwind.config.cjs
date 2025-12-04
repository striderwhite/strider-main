const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Urbanist", ...defaultTheme.fontFamily.sans],
                display: ["Urbanist", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Backgrounds
                "bg-body": "#000104",
                "bg-elevated": "#020a1e",
                "bg-elevated-soft": "#050b20",

                // Primary
                primary: "#3566ee", // med blue color
                dark: "#111a32",

                // Accents
                accent: "#22d3ee",
                "accent-soft": "#0f172a",
            },
            borderRadius: {
                pill: "999px",
            },
            backgroundImage: {
                "hero-grid":
                    "radial-gradient(circle at 0 0, rgba(37,99,235,0.35) 0, transparent 55%), radial-gradient(circle at 100% 0, rgba(56,189,248,0.25) 0, transparent 55%)",
                "orb-glow":
                    "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.85), rgba(15,23,42,0.2) 60%)",
            },
            backdropBlur: {
                xs: "2px",
            },
            opacity: {
                15: "0.15",
            },
        },
    },
    plugins: [],
};
