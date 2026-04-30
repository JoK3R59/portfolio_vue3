<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import SvgConfig from '@/component/svgConfig.vue';
import TimelineItem from '@/component/TimelineItem.vue';

  const props = defineProps<{
    sectionTitles: PersonalData["sectionTitles"][number];
    experiences: PersonalData["experiences"];
  }>();

</script>

<template>
  <div class="section text-slate-200" id="jobpro">
    <div class="title_section flex flex-row items-center justify-center">
      <SvgConfig :name="props.sectionTitles.icon ?? '' " 
        class="w-10 md:w-14 h-10 md:h-14 mb-1 mr-1"
        :color="`#0b6ab8`" 
      />
      <h1>{{ props.sectionTitles.text }}</h1>
    </div>

    <TimelineItem 
      v-for="(value, id) in props.experiences" 
      :key="id"
      :experiences="value"
      :active-school="false"
    />
  </div>
</template>

<style scoped>

</style>