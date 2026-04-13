<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import SvgConfig from '@/component/svgConfig.vue';

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
        :href="id == 0 ? '#' : '#' + props.scrollTitles[id]"
        class="flex flex-col items-center min-w-1/6"
      >
        <SvgConfig :name="value.icon" class="w-7 h-7 mb-1" />
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
  }
  
  /* DESKTOP */
</style>