<script setup lang="ts">
import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{ 
      name: string;
      class?: string;
    }>(), {
      name: '',
      class: ''
    }
  )

// Import automatique des SVG comme composants
  const icons = import.meta.glob(['@/assets/svg/*.svg','@/assets/svg/tools/*.svg'], {
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