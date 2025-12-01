<script setup>
defineProps({
  background: {
    type: String,
    default: 'white' // 'white', 'gray', or 'none'
  }
});
</script>

<template>
  <section 
    :class="[
      'py-16 md:py-24',
      background === 'white' ? 'bg-white' : background === 'gray' ? 'bg-slate-50' : ''
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot />
    </div>
  </section>
</template>
