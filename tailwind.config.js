/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "svg-one":
          "url('https://raw.githubusercontent.com/shakurShirajul/svg-collection/refs/heads/main/curve-1727108926867.svg')",
        "looper-pattern":
          "url('https://nextui.org/gradients/looper-pattern.svg?fbclid=IwY2xjawFaf91leHRuA2FlbQIxMAABHbI7LxH6QeZVCQjNlHw2KzxdlvPsraX8zCFAxukmNva5ne9eIpOL6sBRzw_aem_BS9cJFGOwWnxfwLLP6AJ3Q')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  //   darkTheme: "dark", // name of one of the included themes for dark mode
  //   base: true, // applies background color and foreground color for root element by default
  //   styled: true, // include daisyUI colors and design decisions for all components
  //   utils: true, // adds responsive and modifier utility classes
  //   prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  //   logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  //   themeRoot: ":root", // The element that receives theme color CSS variables
  // },
};
