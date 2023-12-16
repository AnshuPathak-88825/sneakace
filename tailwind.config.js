/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: "garamond",
        bodyContent: "sfpro",
        bannerHeading: "staatliches",
        loginContent: "Crimson Text",
        Poppins_light:"Poppins light",
        Poppins_bold:"Poppins bold"
      },
      colors: {
        background: "#000",
        primary: "#fff",
        secondary: "#FECE00",
      },
      backgroundImage: {
        category: "url('../public/assets/images/shoe.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
