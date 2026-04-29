<script setup lang="ts">

  const props = withDefaults(defineProps<{
    typeAos?: string;
  }>(), {
    typeAos: '',
  });

</script>

<template>
  <div class="border_content my-4 card flex flex-col lg:flex-row" 
    :data-aos="props.typeAos"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
  .border_content {
    background-color: #3b424cab;
    box-shadow: 0 2px 15px rgba(156, 156, 156, 0.5);
    border-radius: 0.5em;
  }
  
  @media (min-width: 1200px) {
    /* PC standard */
    .border_content {
      /* height: 6rem; */
    }
  }
</style>