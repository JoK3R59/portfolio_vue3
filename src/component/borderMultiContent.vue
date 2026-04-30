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
  <div class="h-48 md:h-88">
    <div class="shadow_content bg-cover bg-center bg-no-repeat rounded-sm mb-8 h-full w-full"
      :style="backgroundStyle"
      data-aos="fade-up"
    >
      <slot />
    </div>
  </div>
</template>