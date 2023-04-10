const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Chivo', 'Nunito', ...defaultTheme.fontFamily.sans],
            },
            // https://coolors.co/353535-3c6e71-ffffff-d9d9d9-284b63
            colors: {
                primary: "#353535",
                highlight: "#3c6e71",
                white: "#ffffff",
                plat: "#d9d9d9",
                dye: "#284b63",
                tomato: "#FE5E41"
              },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
