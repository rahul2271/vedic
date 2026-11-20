/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: { deep: "#123D32", obsidian: "#0A241D" },
        alabaster: { silk: "#F6F2EA", champagne: "#ECE5D8", border: "#DDD3C0" },
        gold: { champagne: "#B89A5E", burnished: "#9C7F46", light: "#D8BE86" },
        ink: { espresso: "#26302B", stone: "#6F6A5F" },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: { luxe: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
      keyframes: {
        cue: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        introword: {
          "0%": { opacity: "0", letterSpacing: "0.75em" },
          "100%": { opacity: "1", letterSpacing: "0.34em" },
        },
        introline: {
          "0%": { width: "0px" },
          "100%": { width: "96px" },
        },
      },
      animation: {
        cue: "cue 3s cubic-bezier(0.65,0,0.35,1) infinite",
        introword: "introword 1.7s cubic-bezier(0.22,0.61,0.36,1) 0.2s both",
        introline: "introline 1.5s cubic-bezier(0.22,0.61,0.36,1) 0.7s both",
      },
    },
  },
  plugins: [],
};
