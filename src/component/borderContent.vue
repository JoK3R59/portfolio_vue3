<script setup lang="ts">

  const props = withDefaults(defineProps<{
    typeAos?: string;
    classStyle?: string;
  }>(), {
    typeAos: '',
    classStyle: '',
  });

</script>

<template>
  <div class="border_content rounded-md my-4 card" 
    :data-aos="props.typeAos"
    :class="props.classStyle"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
  .border_content {
    background-color: #3B424C;
    box-shadow: 0 2px 15px rgba(156, 156, 156, 0.5);
  }
  
</style>