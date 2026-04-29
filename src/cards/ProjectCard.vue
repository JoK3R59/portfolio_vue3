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
  <div class="project_section" id="projects">
    <div class="title_section flex flex-row items-center justify-center mb-8">
      <SvgConfig :name="props.sectionTitles.icon ?? '' " class="w-12 h-12 mb-1 mr-1" />
      <p>{{ props.sectionTitles.text }}</p>
    </div>

    <BorderMultiContent 
      v-for="(value, id) in props.projects" 
      :key="`projectId_${id}`" 
      :image="value.image"
    >
      <ModalProject :project="value" />
    </BorderMultiContent>
  </div>
</template>

<style scoped>

</style>