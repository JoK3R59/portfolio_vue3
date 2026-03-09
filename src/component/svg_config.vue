<script setup lang="ts">
import { computed } from 'vue';

  const props = defineProps({
    name: { type: String, required: true, default: '' },
    class: { type: [String, Array, Object], default: '' }
  })

// Import automatique des SVG comme composants
  const icons = import.meta.glob('@/assets/svg/*.svg', {
    eager: true,
    import: 'default'
  });

  const iconKey = computed(() => `/src/assets/svg/${props.name}.svg`)
  const IconComp = computed(() => icons[iconKey.value] ?? null)
  const computedClass = computed(() => props.class)

</script>

<template>
  <component
    v-if="IconComp"
    :is="IconComp"
    :class="computedClass"
  />
</template>

<style scoped>
</style>