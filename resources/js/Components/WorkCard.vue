<script setup>
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  problem: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  outcome: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Project'
  }
});

const expanded = ref(false);

const toggleExpanded = () => {
  expanded.value = !expanded.value;
};
</script>

<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <div class="relative overflow-hidden h-56">
      <img :src="image" :alt="title" class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700">
      <div class="absolute top-4 left-4">
        <span class="bg-accent text-white px-4 py-2 rounded-full text-sm font-bold">{{ industry }}</span>
      </div>
    </div>
    <div class="p-8">
      <h3 class="text-3xl font-bold text-slate-900 mb-4">{{ title }}</h3>
      <p class="text-xl text-slate-600 mb-6 leading-relaxed">{{ problem }}</p>
      
      <div v-if="expanded" class="space-y-5 mb-6">
        <div>
          <h4 class="font-bold text-xl text-slate-900 mb-2">Solution</h4>
          <p class="text-lg text-slate-600 leading-relaxed">{{ solution }}</p>
        </div>
        <div>
          <h4 class="font-bold text-xl text-slate-900 mb-2">Outcome</h4>
          <p class="text-lg text-slate-600 leading-relaxed">{{ outcome }}</p>
        </div>
      </div>

      <button 
        @click="toggleExpanded"
        class="text-primary font-bold text-lg hover:text-primary-dark transition-colors duration-200"
      >
        {{ expanded ? 'Show less' : 'Read more' }} 
        <i :class="expanded ? 'fa-chevron-up' : 'fa-chevron-down'" class="fas ml-2"></i>
      </button>
    </div>
  </div>
</template>
