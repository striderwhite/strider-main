<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-10 border border-slate-100 transform hover:-translate-y-1">
    <div class="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
      <i :class="icon" class="text-4xl text-primary"></i>
    </div>
    <h3 class="text-3xl font-bold text-slate-900 mb-4">{{ title }}</h3>
    <p class="text-xl text-slate-600 leading-relaxed mb-6">{{ description }}</p>
    <slot name="details" />
  </div>
</template>
