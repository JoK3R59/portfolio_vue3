<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import BorderMultiContent from '@/component/borderMultiContent.vue';
import SvgConfig from '@/component/svgConfig.vue';
import ModalProject from '@/component/modalProject.vue';

  const props = defineProps<{
    projects: PersonalData["projects"];
    sectionTitles: PersonalData["sectionTitles"][number];
  }>();
</script>

<template>
  <div class="section" id="projects">
    <div class="title_section flex flex-row items-center justify-center">
      <SvgConfig :name="props.sectionTitles.icon ?? '' " class="w-12 h-12 mb-1 mr-1" />
      <p>{{ props.sectionTitles.text }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-8 md:gap-y-4">
      <BorderMultiContent 
        v-for="(value, id) in props.projects" 
        :key="`projectId_${id}`" 
        :image="value.image"
      >
        <ModalProject :project="value" />
      </BorderMultiContent>
    </div>
  </div>
</template>

<style scoped>

</style>