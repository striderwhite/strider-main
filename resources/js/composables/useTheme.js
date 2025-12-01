import { ref, watch, onMounted } from 'vue';

// Theme definitions
const themes = {
  current: {
    name: 'Current (Blue)',
    label: 'current',
    description: 'Professional blue theme - current design',
  },
  dark: {
    name: 'Dark Mode',
    label: 'dark',
    description: 'Dark theme with light text',
  },
  green: {
    name: 'Green & Friendly',
    label: 'green',
    description: 'Eco-friendly green theme',
  },
  wacky: {
    name: 'Wacky Fun',
    label: 'wacky',
    description: 'Playful and unconventional',
  },
};

// Reactive state
const currentTheme = ref('current');
const isInitialized = ref(false);

// Local storage key
const STORAGE_KEY = 'strider-theme-preference';

export function useTheme() {
  // Initialize theme from localStorage
  const initTheme = () => {
    if (typeof window !== 'undefined' && !isInitialized.value) {
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      if (savedTheme && themes[savedTheme]) {
        currentTheme.value = savedTheme;
      }
      applyTheme(currentTheme.value);
      isInitialized.value = true;
    }
  };

  // Apply theme to document
  const applyTheme = (theme) => {
    if (typeof document !== 'undefined') {
      // Remove all theme classes
      Object.keys(themes).forEach((t) => {
        document.documentElement.classList.remove(`theme-${t}`);
      });
      
      // Add current theme class
      document.documentElement.classList.add(`theme-${theme}`);
    }
  };

  // Set theme
  const setTheme = (theme) => {
    if (themes[theme]) {
      currentTheme.value = theme;
      applyTheme(theme);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, theme);
      }
    }
  };

  // Get current theme info
  const getCurrentThemeInfo = () => {
    return themes[currentTheme.value];
  };

  // Get all themes
  const getAllThemes = () => {
    return themes;
  };

  // Watch for theme changes
  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme);
  });

  // Initialize on mount
  onMounted(() => {
    initTheme();
  });

  return {
    currentTheme,
    themes,
    setTheme,
    getCurrentThemeInfo,
    getAllThemes,
    initTheme,
  };
}
