<script setup lang="ts">
  import type { PersonalData } from '@/utils/types';

  // Import automatique des SVG comme composants
  const icons = import.meta.glob('@/assets/svg/*.svg', {
    eager: true,
    import: 'default'
  });

  const props = defineProps<{
    sectionTitles: PersonalData['sectionTitles'];
    scrollTitles: PersonalData['scrollTitles'];
  }>();
</script>

<template>
  <div class="navbar_section navbar">
    <div class="menu menu-horizontal w-full justify-around navbar-center"
    >
      <a v-for="(value, id) in props.sectionTitles" :key="id"
        href="#" class="flex flex-col items-center min-w-1/6">
         <component :is="icons[`/src/assets/svg/${value.icon}.svg`]"
            class="w-7 h-7 mb-1"
          />
        {{ value.text_mobile }}
      </a>
    </div>
  </div>
</template>

<style scoped>
  .navbar_section {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    /* TEST */
    background-color: #0B1120;
    a {
      text-decoration: none;
      border-radius: 8px;
      color: #F9FAFB;
      font-weight: 500;
      transition: color 0.25s;
    }
    a:hover {
      color: #60A5FA;
    }
  }
  

  /* DESKTOP */
</style>