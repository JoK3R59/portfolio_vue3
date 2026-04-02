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
  <div class="experience_section">
    <div class="title_section flex flex-row items-center justify-center">
      <SvgConfig :name="props.sectionTitles.icon ?? '' " class="w-12 h-12 mb-1 mr-1" />
      <h1>{{ props.sectionTitles.text }}</h1>
    </div>

    <TimelineItem 
      v-for="value, id in props.experiences" 
      :key="id"
      :experiences="value"
    />
  </div>
</template>

<style scoped>
.color-content {
  background-color: #095797;
  border-radius: 0.5rem 0.5rem 0 0;
}

.view-content{
  margin: 1rem 1rem;
}

.image_company{
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
}

.balise-hr {
  color: inherit;
  margin: 1rem 0;
  opacity: .25;
}

.paragraph {
  margin-bottom: 1rem;
}
</style>