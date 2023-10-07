/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                dark: "#1b1b1b",
                light: "#fff",
                accent: "var(--accent)",
                accentDark: "var(--accentDark)",
                gray: "#747474",
            },
            fontFamily: {
                mr: ["var(--font-mr)"],
                in: ["var(--font-in)"],
            },
            animation: {
                roll: "roll 24s linear infinite",
            },
            keyframes: {
                roll: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            screens: {
                sxl: "1180px",
                xs: "480px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
