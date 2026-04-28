<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import SvgConfig from '@/component/svgConfig.vue';
import { ref } from 'vue';

  const props = defineProps<{
    sectionTitles: PersonalData['sectionTitles'];
    scrollTitles: PersonalData['scrollTitles'];
  }>();

  const activeId = ref<number | null>(null);

  function onLinkClick(id: number) {
    activeId.value = id;
    setTimeout(() => { activeId.value = null; }, 300);
  }
</script>

<template>
  <div 
    class="navbar fixed h-20 bottom-0 left-0 z-100 shadow-[0_2px_5px_rgba(0,0,0,0.1)] bg-[#0b1120f5]"
  >
    <div 
      class="flex flex-row w-full max-w-screen justify-around items-center"
    >
      <a v-for="(value, id) in props.sectionTitles" :key="id"
        :href="id == 0 ? '#' : '#' + props.scrollTitles[id]"
        :class="activeId === id ? 'text-blue-400' : 'text-gray-50'"
        class="flex flex-col items-center min-w-1/6 no-underline rounded-lg font-medium transition-all duration-[250ms] hover:text-blue-400"
        @click="onLinkClick(id)"
      >
        <SvgConfig :name="value.icon" class="w-6 h-6 mb-1" />
        {{ value.text_mobile }}
      </a>
    </div>
  </div>
</template>
