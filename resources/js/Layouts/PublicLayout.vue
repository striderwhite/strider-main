<script setup>
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useTheme } from '@/composables/useTheme';
import ThemeSwitcher from '@/Components/ThemeSwitcher.vue';

const mobileMenuOpen = ref(false);
const { initTheme } = useTheme();

// Check if we're in development mode
const isDev = import.meta.env.DEV;

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Initialize theme on mount
onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="flex flex-col bg-slate-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <Link href="/" class="flex items-center">
            <span class="text-2xl font-bold text-primary">Strider White</span>
          </Link>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              class="text-slate-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              class="text-slate-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link 
              href="/work" 
              class="text-slate-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Work
            </Link>
            <Link 
              href="/about" 
              class="text-slate-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          <!-- Mobile menu button -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden text-slate-700 hover:text-primary focus:outline-none"
          >
            <i v-if="!mobileMenuOpen" class="fas fa-bars text-2xl"></i>
            <i v-else class="fas fa-times text-2xl"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden bg-white border-t border-slate-200"
      >
        <div class="px-4 pt-2 pb-4 space-y-2">
          <Link 
            href="/" 
            @click="closeMobileMenu"
            class="block px-3 py-2 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            @click="closeMobileMenu"
            class="block px-3 py-2 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md transition-colors duration-200 font-medium"
          >
            Services
          </Link>
          <Link 
            href="/work" 
            @click="closeMobileMenu"
            class="block px-3 py-2 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md transition-colors duration-200 font-medium"
          >
            Work
          </Link>
          <Link 
            href="/about" 
            @click="closeMobileMenu"
            class="block px-3 py-2 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md transition-colors duration-200 font-medium"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            @click="closeMobileMenu"
            class="block px-3 py-2 bg-primary text-white hover:bg-primary-dark rounded-md transition-colors duration-200 font-medium text-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Brand -->
          <div>
            <h3 class="text-xl font-bold mb-4">Strider White</h3>
            <p class="text-slate-400">
              Enterprise-quality custom software development at competitive rates.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <Link href="/services" class="text-slate-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" class="text-slate-400 hover:text-white transition-colors duration-200">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" class="text-slate-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" class="text-slate-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <!-- Connect -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Connect</h4>
            <div class="flex space-x-4">
              <a 
                href="https://github.com/striderwhite" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <i class="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/striderwhite/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <i class="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a 
                href="mailto:strider@striderwhite.com"
                class="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <i class="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {{ new Date().getFullYear() }} Strider White. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Theme Switcher (Development Only) -->
    <ThemeSwitcher v-if="isDev" />
  </div>
</template>

<style scoped>
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
