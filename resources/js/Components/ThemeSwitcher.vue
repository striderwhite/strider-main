<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useTheme } from '@/composables/useTheme';

const { currentTheme, getAllThemes, setTheme } = useTheme();
const isOpen = ref(false);
const dropdownRef = ref(null);

const themes = computed(() => getAllThemes());

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectTheme = (themeKey) => {
  setTheme(themeKey);
  isOpen.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div ref="dropdownRef" class="fixed bottom-4 right-4 z-[9999]">
    <div class="relative">
      <!-- Dropdown Button -->
      <button
        @click="toggleDropdown"
        class="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 border-2 border-slate-600"
        :class="{ 'ring-2 ring-blue-400': isOpen }"
      >
        <i class="fas fa-palette"></i>
        <span class="font-medium">Theme</span>
        <i class="fas fa-chevron-up text-xs transition-transform duration-200" :class="{ 'rotate-180': !isOpen }"></i>
      </button>

      <!-- Dropdown Menu -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          class="absolute bottom-full right-0 mb-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden"
        >
          <div class="py-1">
            <div class="px-4 py-2 border-b border-slate-200 bg-slate-50">
              <p class="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Select Theme
              </p>
            </div>
            
            <button
              v-for="(theme, key) in themes"
              :key="key"
              @click="selectTheme(key)"
              class="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors duration-150 flex items-center justify-between group"
              :class="{
                'bg-blue-50 border-l-4 border-blue-500': currentTheme === key,
              }"
            >
              <div class="flex-1">
                <div class="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  {{ theme.name }}
                </div>
                <div class="text-xs text-slate-500 mt-0.5">
                  {{ theme.description }}
                </div>
              </div>
              
              <div v-if="currentTheme === key" class="ml-2">
                <i class="fas fa-check text-blue-500"></i>
              </div>
            </button>
          </div>

          <div class="px-4 py-2 bg-slate-50 border-t border-slate-200">
            <p class="text-xs text-slate-500 italic">
              Dev mode only - for A/B/C/D testing
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Custom click-outside directive will be handled by Vue */
</style>
