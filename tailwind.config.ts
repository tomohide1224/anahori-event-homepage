import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        skyAdventure: "#55B7E6",
        soil: "#8B5A2B",
        deepSoil: "#5D3B1D",
        grass: "#62B65E",
        treasure: "#F6C445",
        sunset: "#FF7A3D",
        paper: "#FFF7E3"
      },
      boxShadow: {
        sticker: "0 10px 0 rgba(93, 59, 29, 0.18)",
        card: "0 18px 50px rgba(93, 59, 29, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-rounded)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
