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
                sans: ['Nunito', 'Orbitron', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'red': '#f06449',
                'purple': '#7f2982',
                'black': '#16001e',
                'beige': '#f1dabf',
                'white': '#fffbff',
              },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
