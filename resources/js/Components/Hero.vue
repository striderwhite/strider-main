<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const headlines = [
  "Replace manual workflows with systems that scale",
  "Build software that actually fits your business"
];

const currentHeadline = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentHeadline.value = (currentHeadline.value + 1) % headlines.length;
  }, 5000); // Change every 5 seconds
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>

<template>
  <div class="relative bg-gradient-to-br from-primary to-primary-dark text-white py-24 md:py-40 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop'); background-size: cover; background-position: center;"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight relative h-[200px] md:h-[280px] flex items-center">
          <transition name="fade" mode="out-in">
            <span :key="currentHeadline" class="absolute inset-0 flex items-center">
              {{ headlines[currentHeadline] }}
            </span>
          </transition>
        </h1>
        <p class="text-2xl md:text-3xl text-blue-100 mb-10 max-w-3xl leading-relaxed" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          Nearly a decade helping businesses automate processes, scale operations, and eliminate manual work. No agency markup.
        </p>
        <div class="flex flex-col sm:flex-row gap-6" data-aos="fade-up" data-aos-delay="200">
          <slot name="cta" />
        </div>
      </div>
    </div>
  </div>
</template>
