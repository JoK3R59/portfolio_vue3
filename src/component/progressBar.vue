<script setup lang="ts">

  const props = defineProps<{
    id: string;
    value: number;
    progress: number;
    color: string;
    size?: 'sm' | 'md' | 'lg';
  }>();
</script>

<template>
  <progress
    class="progress w-full transition-all duration-500"
    :class="[`progress-${props.size}`]"
    :style="`color: ${props.color};`"
    :value="props.value"
    max="100"
  ></progress>
</template>

<style></style>