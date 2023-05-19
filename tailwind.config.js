/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#661AE6",

          secondary: "#D926AA",

          accent: "#1FB2A5",

          neutral: "#a3e635",

          "base-100": "#f3f4f6",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",

          blacks: "#222831",

          grey: "#393E46",

          teal: "#00ADB5",

          Navy: "#142850",

          Blues: "#27496D",

          cold: "#0C7B93",

          space: "#EEEEEE",

          winter: "#00A8CC",
          
          Navy2: "#00425A",

          greens: "#1F8A70",

          yellows: "#BFDB38",

          oranges: "#FC7300",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
