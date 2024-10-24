/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    fontFamily: {
      sans: ["Segoe UI "],
    },
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }

      xs: "375px",
      // => @media (min-width: 375px) { ... }

      mobile: "425px",
      // => @media (min-width: 425px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    // spacing: {
    //   1: "0.75rem",
    //   2: "1.2rem",
    //   3: "2rem",
    //   4: "3rem",
    //   5: "5rem",
    //   8: "8rem",
    //   6: "12rem",
    //   7: "13rem",
    // },
    width: {
      "1/6": "16.666667%",
      "1/5": "20%",
      "1/4": "25%",
      "1/3": "33.333333%",
      "2/5": "40%",
      "1/2": "50%",
      "3/5": "60%",
      "2/3": "66.666667%",
      "3/4": "75%",
      "4/5": "80%",
      "5/6": "83.333333%",
      "9/10": "90%",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    height: {
      "1/6": "16.666667%",
      "1/5": "20%",
      "1/4": "25%",
      "1/3": "33.333333%",
      "2/5": "40%",
      "1/2": "50%",
      "3/5": "60%",
      "2/3": "66.666667%",
      "3/4": "75%",
      "4/5": "80%",
      "5/6": "83.333333%",
      "9/10": "90%",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    colors: {
      yellow: {
        300: "#FFDD46",
        400: "#FFCA1B",
        500: "#FFA800",
        600: "#E27F00",
        700: "#BB5802",
      },
      purp: {
        // i added this purp for text colors and with shade pandiyaraj
        200: "#5544c2b0",
        300: "#5544c2",
        400: "#4739a6",
        500: "#8384f7",
        600: "#2a2569",
        700: "#1e1a4f",
        800: "#131036",
        900: "#0a0923",
      },
      plum: {
        100: "#FDE6F3",
        200: "#FCCEE9",
        500: "#F1439D",
        800: "#A1134F",
        950: "#520526",
      },
      ebony: {
        300: "#ABB4CE",
        700: "#3D4667",
        900: "#2D3246",
        950: "#202331",
      },
      success: {
        100: "#E7FCCB",
        800: "#3F6212",
      },
      error: {
        100: "#FEE2E2",
        700: "#B91C1C",
      },
      info: {
        100: "#E0F2FE",
        600: "#0284C7",
      },
      accent: "#EBEDF3",
      light: "#FFFDEA",
      dark: "#1B1201",
      lightpurple: "#e1e1ff",
      // pry: "linear-gradient(291deg, rgba(131,132,246,1) 44%, rgba(151,128,247,1) 100%);",
    },

    backgroundImage: {
      pry: "linear-gradient(136deg, rgb(131 132 246 / 89%) 44%, rgb(151 128 247 / 93%) 100%)",
    },

    fontSize: {
      display: [
        "6rem",
        {
          lineHeight: "normal",
          letterSpacing: "-0.06rem",
          fontWeight: "700",
        },
      ],

      h1: [
        "4rem",
        {
          lineHeight: "4.4rem",
          letterSpacing: "-0.04rem",
          fontWeight: "700",
        },
      ],
      h2: [
        "2.5rem",
        {
          lineHeight: "normal",
          letterSpacing: "-0.025rem",
          fontWeight: "700",
        },
      ],
      h3: [
        "1.5rem",
        {
          lineHeight: "normal",
          letterSpacing: "normal",
          fontWeight: "700",
        },
      ],
      subtitle: [
        "1.625rem",
        {
          lineHeight: "1.95rem",
          letterSpacing: "0.049rem",
          fontWeight: "700",
        },
      ],
      pretitle: [
        "1.25rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.038rem",
          fontWeight: "700",
        },
      ],
      p: [
        "1rem",
        {
          lineHeight: "1.3rem",
          letterSpacing: "0.01rem",
          fontWeight: "400",
        },
      ],
      small: [
        "0.75rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.015rem",
          fontWeight: "400",
        },
      ],
      button: [
        "1rem",
        {
          lineHeight: "normal",
          letterSpacing: "normal",
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
