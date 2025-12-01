# Theme System - A/B/C/D Testing

## Overview

This project includes a complete theme switching system for A/B/C/D testing with 4 distinct themes. The theme switcher is **only visible in local development mode** and allows you to instantly compare different design approaches.

## Available Themes

### 1. **Current (Blue)** - Default
- Professional blue color scheme
- Current production design
- Clean, corporate aesthetic
- Inter font family

### 2. **Dark Mode**
- Dark backgrounds with light text
- Reduced eye strain for extended viewing
- Modern, sleek appearance
- Perfect for testing nighttime user experience

### 3. **Green & Friendly**
- Eco-friendly green palette
- Warm, approachable feel
- Nature-inspired colors
- Ideal for environmentally-conscious branding

### 4. **Wacky Fun**
- Vibrant neon gradients
- Comic Sans MS font (playful typography)
- Animated elements
- Skewed/rotated elements for visual interest
- Perfect for testing unconventional design approaches

## How It Works

### Theme Switcher Location
The theme switcher appears as a floating button in the **bottom-right corner** of the screen, only when running in development mode (`npm run dev`).

### Using the Theme Switcher

1. Click the **"Theme"** button with the palette icon
2. A dropdown menu appears showing all 4 themes
3. Click any theme to switch instantly
4. Your selection is saved to localStorage and persists across page navigation
5. Click outside the dropdown to close it

### Development vs Production

```javascript
// In development (npm run dev)
- Theme switcher is visible
- You can switch between all 4 themes
- Preference is saved locally

// In production (npm run build)
- Theme switcher is hidden
- Only the "Current" theme is active
- No performance overhead
```

## Technical Implementation

### File Structure

```
resources/
├── js/
│   ├── composables/
│   │   └── useTheme.js          # Theme state management
│   ├── Components/
│   │   └── ThemeSwitcher.vue    # Theme switcher UI
│   └── Layouts/
│       └── PublicLayout.vue     # Integrated theme system
└── css/
    └── app.css                   # Theme CSS variables & styles
```

### Key Features

1. **Reactive State Management**
   - Uses Vue 3 Composition API
   - Centralized theme state via `useTheme` composable
   - Automatic localStorage persistence

2. **CSS Custom Properties**
   - Each theme defines CSS variables for colors, fonts, shadows
   - Smooth transitions between themes (0.3s ease-in-out)
   - No page reload required

3. **Smart Detection**
   - Uses `import.meta.env.DEV` to detect development mode
   - Automatically initializes saved theme on page load
   - Works seamlessly with Inertia.js page navigation

### Using the Theme System in Code

```vue
<script setup>
import { useTheme } from '@/composables/useTheme';

const { currentTheme, setTheme, getAllThemes } = useTheme();

// Get current theme
console.log(currentTheme.value); // 'current', 'dark', 'green', or 'wacky'

// Programmatically change theme
setTheme('dark');

// Get all available themes
const themes = getAllThemes();
</script>
```

## A/B/C/D Testing Workflow

### Recommended Testing Process

1. **Define Test Goals**
   - What are you testing? (conversion, engagement, readability)
   - Which pages will you test?
   - What metrics will you track?

2. **Test Each Theme**
   - Switch to each theme and navigate through key pages
   - Take screenshots for comparison
   - Note your observations

3. **Gather Feedback**
   - Share with team members or stakeholders
   - They can test locally with the same theme switcher
   - Everyone sees identical themes thanks to localStorage

4. **Compare & Decide**
   - Review screenshots side-by-side
   - Consider feedback and metrics
   - Choose the winning theme

5. **Implement Winner**
   - Update default theme in `useTheme.js` if needed
   - Or keep styles in CSS for production use

## Customization

### Adding a New Theme

1. **Update `useTheme.js`**
```javascript
const themes = {
  // ... existing themes
  mynewtheme: {
    name: 'My New Theme',
    label: 'mynewtheme',
    description: 'Description here',
  },
};
```

2. **Add CSS in `app.css`**
```css
.theme-mynewtheme {
  --primary: #yourcolor;
  --bg-primary: #yourcolor;
  /* ... other variables */
}

.theme-mynewtheme body {
  background-color: var(--bg-primary);
}
```

### Modifying Existing Themes

Edit the CSS variables in `resources/css/app.css` under the respective theme class (`.theme-current`, `.theme-dark`, etc.).

## Troubleshooting

### Theme Switcher Not Visible
- Ensure you're running `npm run dev` (development mode)
- Check that `PublicLayout.vue` includes `<ThemeSwitcher v-if="isDev" />`
- Verify `import.meta.env.DEV` is true in browser console

### Theme Not Persisting
- Check browser localStorage (DevTools → Application → Local Storage)
- Look for key `strider-theme-preference`
- Clear localStorage and try again if corrupted

### Styles Not Applying
- Ensure CSS is compiled: `npm run dev`
- Check browser DevTools for theme class on `<html>` element
- Verify CSS custom properties are defined in `app.css`

## Performance Notes

- **Zero production overhead**: Theme switcher only loads in development
- **Minimal CSS**: Themes use CSS custom properties (no duplicate code)
- **Fast switching**: No page reload, instant visual updates
- **Lightweight**: ~5KB additional JavaScript in development only

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

All modern browsers support CSS custom properties and Vue 3.

---

**Happy Testing!** 🎨
