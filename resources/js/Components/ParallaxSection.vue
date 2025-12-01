<template>
  <div class="relative w-full flex items-center justify-center" :style="{ minHeight: height, height: height }">
    <!-- Fixed Background Image -->
    <div 
      class="absolute top-0 left-0 w-full h-full"
      :style="{ 
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }"
    ></div>
    
    <!-- Dark Premium Overlay -->
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85"></div>
    
    <!-- Content - Centered Vertically and Horizontally -->
    <div class="relative z-10 w-full px-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  height: {
    type: String,
    default: '500px'
  },
  speed: {
    type: Number,
    default: 0.5
  }
});
</script>
