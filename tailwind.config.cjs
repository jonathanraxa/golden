// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
	  extend: {
		// Add custom colors or spacing here if needed
	  }
	},
	plugins: []
  };
  