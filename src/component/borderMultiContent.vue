<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    image: string;
  }>();

  const backgroundStyle = computed(() => ({
    backgroundImage: `url(${new URL(`../assets/images/${props.image}.png`, import.meta.url).href})`
  }));
</script>

<template>
  <div class="border_content" 
    :style="backgroundStyle" 
    data-aos="fade-up"
  >
    <slot />
  </div>
</template>

<style scoped>
  .border_content {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* border: 2px solid black; */
    box-shadow: 0 2px 15px rgba(156, 156, 156, 0.5);
    border-radius: 0.25rem;
    margin: 1rem 0 2rem 0;
    height: 12rem; 
    width: auto;
    /* padding: 1rem; */
  }

  @media (min-width: 1200px) {
    /* PC standard */
    .border_content {
      /* height: 6rem; */
    }
  }
</style>