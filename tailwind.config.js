/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        fontFamily: {
            'body': ['Futura STD', 'Arial', 'sans-serif']
        },
        extend: {},
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class",
    variants: {
        extend: {
            visibility: ["group-hover"],
        }
    }
}