/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d1f29d",

          secondary: "#25649b",

          accent: "#cffc94",

          neutral: "#1B232C",

          "base-100": "#1F2347",

          info: "#7BB4DB",

          success: "#0D684B",

          warning: "#C9A10D",

          error: "#FB5078",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
};
