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
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                wacky: ['Comic Sans MS', 'Comic Sans', 'cursive', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                  DEFAULT: '#1e40af', // darker premium blue-700
                  dark: '#1e3a8a', // blue-900
                  light: '#3b82f6',
                },
                slate: {
                  50: '#f8fafc',
                  100: '#f1f5f9',
                  200: '#e2e8f0',
                  300: '#cbd5e1',
                  400: '#94a3b8',
                  500: '#64748b',
                  600: '#475569',
                  700: '#334155',
                  800: '#1e293b',
                  900: '#0f172a',
                },
                accent: {
                  DEFAULT: '#10b981', // softer green for trust
                  light: '#6ee7b7',
                  dark: '#059669',
                },
              },
              animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'wacky-gradient': 'wacky-gradient 3s ease infinite',
              },
              keyframes: {
                fadeIn: {
                  '0%': { opacity: '0' },
                  '100%': { opacity: '1' },
                },
                slideUp: {
                  '0%': { transform: 'translateY(20px)', opacity: '0' },
                  '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'wacky-gradient': {
                  '0%, 100%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                },
              },
              zIndex: {
                '9999': '9999',
              },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
