/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/preline/preline.js"],
  theme: {
    extend: {
      fontSize: {
        fluid: "clamp(0.55rem, 3vw, 0.8rem)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
