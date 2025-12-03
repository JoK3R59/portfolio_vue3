<script lang="ts"></script>

<template>
  <div class="border_content">
    <slot></slot>
    <p>Test du truk</p>
  </div>
</template>

<style scoped>
  .border_content {
    /* TEST */
    background-color: #3B424C;
    /* END TEST */
    /* border: 2px solid black; */
    box-shadow: 0 5px 25px rgba(255, 255, 255, 0.726);
    border-radius: 0.5em;
    margin: 1rem 0;
    height: 2rem;
    width: auto;
  }
  @media (min-width: 1200px) {
    /* PC standard */
    .border_content {
      height: 6rem;
    }
  }
</style>