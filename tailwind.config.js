/** @type {import('tailwindcss').Config} */


const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container:
            {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "0rem",
                    xl: "0rem",
                    "2xl": "0rem",
                },
                screens: {
                    xl: "1210px"
                }
            },
            colors: {
                "primary": "#FF000D",
                "secondary": "#B9BDC2",
                "black": "#000000",
                "light-black": "#171717",
                "white": "#FFFFFF",
                "background": "#1E1E1E",
                "disabled": "#9191A6",
                "content": "#5E6872",
                "border": "#C2CAD2",
                "light-gray": "#E9EEF2",
                "green-fluor": " #03FFCF",
                "blue": "#4141FF",
                "purple" : "#8700FF"
            },
            fontSize: {
                "20xl": ["128px", "115px"],
                "6xl": ["64px", "64px"],
                "4xl": ["60px", "57px"],
                "3xl": ["40px", "40px"],
                64: ["64px", "64px"],
                60: ["60px", "60px"],
                56: ["56px", "58px"],
                52: ["52px", "51px"],
                48: ["48px", "48px"],
                40: ["40px", "40px"],
                36: ["36px", "36px"],
                32: ["32px", "32px"],
                28: ["28px", "30px"],
                24: ["24px", "28px"],
                20: ["20px", "22px"],
                "xxl": ["30px", "30px"],
                "xl": ["22px", "22px"],
                "lg": ["20px", "20px"],
                18: ["18px", "21px"],
                16: ["16px", "17px"],
                15: ["15px", "15px"],
                14: ["14px", "16px"],
                "base": ["16px", "18px"],
                "md": ["14px", "16px"],
                "sm": ["12px", "14px"],
                "xs": ["10px", "12px"],
            },
            fontFamily: {
                "dm-sans": ["dm-sans"],
                "dm-sans-36": ["dm-sans-36pt"],
                "dm-sans-18": ["dm-sans-18pt"],
                "sora": ["Sora"],
                // "nimbus-regular": ["Nimbus Roman No9 L"],
            },
            backgroundImage: (theme) => ({
                "gradient-button": `linear-gradient(71.67deg, #03FFCF -113.8%, #00FFFF -71.51%, #4141FF -29.23%, #8700FF 13.06%, #FF00AA 55.34%, #FF4B28 97.63%)`,
                "client-carousel-gradient": `linear-gradient(90deg, #E9EEF2 0%, rgba(233, 238, 242, 0.95) 30.11%, rgba(233, 238, 242, 0.65) 60.66%, rgba(233, 238, 242, 0) 89.87%)`,
                "blue-gradient": `linear-gradient(253.05deg, #03FFCF 9.96%, #00FFFF 50.95%, #4141FF 94.04%, #8700FF 136.08%, #FF00AA 178.13%, #FF4B28 220.17%)`,
                "button-blue-gradient": `linear-gradient(253.13deg, #03FFCF -68.27%, #00FFFF -5.35%, #4141FF 57.57%, #8700FF 120.48%, #FF00AA 183.4%, #FF4B28 246.31%);
                `,
                "key-numbers-gradient": `linear-gradient(90deg, #E9EEF2 0%, rgba(233, 238, 242, 0.991615) 11.79%, rgba(233, 238, 242, 0.967585) 21.38%, rgba(233, 238, 242, 0.9296) 29.12%, rgba(233, 238, 242, 0.879348) 35.34%, rgba(233, 238, 242, 0.818519) 40.37%, rgba(233, 238, 242, 0.7488) 44.56%, rgba(233, 238, 242, 0.671881) 48.24%, rgba(233, 238, 242, 0.589452) 51.76%, rgba(233, 238, 242, 0.5032) 55.44%, rgba(233, 238, 242, 0.414815) 59.63%, rgba(233, 238, 242, 0.325985) 64.66%, rgba(233, 238, 242, 0.2384) 70.88%, rgba(233, 238, 242, 0.153748) 78.62%, rgba(233, 238, 242, 0.0737185) 88.21%, rgba(233, 238, 242, 0) 100%);
                `
            }),
        },
    },
    plugins: [],
};
export default config;


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "24px",
        screens: {
          xl: "1250px"
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
      fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [],
};
