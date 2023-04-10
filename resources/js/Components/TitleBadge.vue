<template>
    <div>
        <span class="bg-red text-white px-2 text-2xl">
            {{ title }}
        </span>
    </div>
</template>

  <script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true
      }
    }
  })
  </script>
