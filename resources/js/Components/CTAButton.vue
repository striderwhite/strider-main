<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
  href: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'primary' // 'primary' or 'secondary'
  }
});
</script>

<template>
  <Link 
    :href="href"
    :class="[
      'inline-flex items-center justify-center px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl',
      variant === 'primary' 
        ? 'bg-white text-primary hover:bg-blue-50' 
        : 'bg-transparent border-3 border-white text-white hover:bg-white hover:text-primary'
    ]"
  >
    <slot />
  </Link>
</template>
