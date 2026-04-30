<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import SvgConfig from '@/component/svgConfig.vue';
import { ref } from 'vue';

  const props = defineProps<{
    sectionTitles: PersonalData['sectionTitles'];
    scrollTitles: PersonalData['scrollTitles'];
    name: PersonalData['profil']['name'];
  }>();

  const activeId = ref<number | null>(null);

  function onLinkClick(id: number) {
    activeId.value = id;
    setTimeout(() => { activeId.value = null; }, 250);
  }
</script>

<template>
  <div 
    class="navbar fixed h-20 lg:h-14 xl:h-10 bottom-0 lg:bottom-auto lg:top-0 left-0 z-900 shadow-[0_2px_5px_rgba(0,0,0,0.1)] bg-[#0b1120] lg:shadow-[0_-3px_20px_rgba(156,156,156,0.5)]"
  >
    <div 
      class="flex flex-row w-full max-w-screen justify-around lg:justify-between items-center xl:px-8 2xl:px-64"
    >
      <span class="hidden lg:block font-bold text-[0.9571rem] leading-6.5 uppercase text-gray-50 tracking-wide">
        {{ props.name }}
      </span>

      <a v-for="(value, id) in props.sectionTitles" :key="id"
        :href="id == 0 ? '#' : '#' + props.scrollTitles[id]"
        :class="activeId === id ? 'text-blue-400' : 'text-gray-50'"
        class="flex flex-col lg:flex-row items-center lg:max-h-10 min-w-1/6 lg:min-w-36 xl:min-w-0 no-underline rounded-lg font-medium lg:font-normal lg:uppercase transition-all hover:text-blue-400 xl:py-4 lg:px-4 xl:px-4 lg:hover:bg-white/10 lg:leading-6.5 lg:text-[0.8142rem]"
        @click="onLinkClick(id)"
      >
        <SvgConfig :name="value.icon" 
          class="w-6 h-6 mb-1 lg:mb-0 lg:mr-2 lg:hidden transition"
          :color="activeId === id ? '#51a2ff' : '#f9fafb'"
        />
        <span class="lg:hidden">{{ value.text_mobile }}</span>
        <span class="hidden lg:inline">{{ value.text }}</span>
      </a>
    </div>
  </div>
</template>
