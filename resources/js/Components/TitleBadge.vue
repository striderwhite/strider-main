<template>
    <div>
        <span class="bg-highlight px-6 py-2 z-10 text-plat font-black tracking-widest">
            {{ title }}
        </span>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
    },
});
</script>
