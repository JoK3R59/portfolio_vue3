<script setup lang="ts">
</script>

<template>
  <div class="border_content">
    <slot></slot>
  </div>
</template>

<style scoped>
  .border_content {
    /* TEST */
    background-color: #3b424cab;
    /* END TEST */
    /* border: 2px solid black; */
    box-shadow: 0 2px 15px rgba(156, 156, 156, 0.5);
    border-radius: 0.5em;
    margin: 1rem 0;
    /* height: 2rem; */
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