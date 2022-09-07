/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/flowbite/**/*.js",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    enabled: true,
  },
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
