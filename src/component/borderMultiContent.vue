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
    <div class="shadow_content bg-cover bg-center bg-no-repeat rounded-sm mt-4 mb-8 h-full w-full"
      :style="backgroundStyle"
      data-aos="fade-up"
    >
      <slot />
    </div>
  </div>
</template>