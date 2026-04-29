<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    image: string;
  }>();

  const backgroundStyle = computed(() => ({
    backgroundImage: `url(${new URL(`../assets/images/${props.image}.webp`, import.meta.url).href})`
  }));
</script>

<template>
  <div class="md:basis-1/2 h-48 md:p-4 md:h-88">
    <div class=" bg-cover bg-center bg-no-repeat shadow-[0_2px_15px_rgba(156,156,156,0.5)] rounded-sm mt-4 mb-8 h-full w-full"
      :style="backgroundStyle"
      data-aos="fade-up"
    >
      <slot />
    </div>
  </div>
</template>