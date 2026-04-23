<script setup lang="ts">

  const props = defineProps<{
    id: string;
    value: number;
    progress: number;
    color: string;
  }>();
</script>

<template>
  <progress
    class="progress w-full transition-all duration-500"
    :style="`color: ${props.color};`"
    :value="props.value"
    max="100"
    data-aos="flip-down"
    data-aos-duration="1000"
    data-aos-offset="50"
  ></progress>
</template>

<style></style>