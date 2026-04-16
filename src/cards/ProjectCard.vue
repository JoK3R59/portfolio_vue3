<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import type { PersonalData } from '@/utils/types';
  import BorderMultiContent from '@/component/borderMultiContent.vue';
  import SvgConfig from '@/component/svgConfig.vue';

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
      v-for="value in props.projects" 
      :key="value.title" 
      :image="value.image"
    >
      <div class="card  card-md w-full">
        <div class="card-body">
          <h2>{{ value.title }}</h2>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </BorderMultiContent>
  </div>
</template>

<style scoped>

</style>