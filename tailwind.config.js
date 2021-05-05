module.exports = {
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        svelte: "#ff3e00",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
