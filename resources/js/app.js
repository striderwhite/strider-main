import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/index.esm.js';
import { router } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#2563eb',
        showSpinner: true,
    },
});

// Initialize AOS with professional settings
AOS.init({
    duration: 1000,
    once: false,
    offset: 50,
    easing: 'ease-out-cubic',
});

// Refresh AOS on Inertia page navigations
router.on('navigate', () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
        AOS.refresh();
    }, 100);
});
