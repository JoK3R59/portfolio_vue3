<script setup lang="ts">
  import type { Props } from '../utils/types';

  const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    color: 'primary',
    showLabel: true
  })
</script>

<template>
  <progress
    class="progress w-full transition-all duration-500"
    :class="[`progress-${color}`, `progress-${size}`]"
    :value="value"
    max="100"
  ></progress>
</template>

<style></style>