<script setup lang="ts">
  import type { PersonalData } from '../utils/types';
  import Svg_config from '@/component/svg_config.vue';
  import BorderContent from '../component/border_content.vue';

  const props = defineProps<{
    titleSections: PersonalData["sectionTitles"];
    experiences: PersonalData["experiences"];
  }>();

  function imageCompany(image: string) {
    return {
      backgroundImage: `url(${new URL(`../assets/logos/${image}.webp`, import.meta.url).href})`
    };
  }
</script>

<template>
  <div class="experience_section">
    <div class="title_section flex flex-row items-center justify-center">
      <Svg_config :name="props.titleSections[3]?.icon ?? '' " class="w-12 h-12 mb-1 mr-1" />
      <p>{{ props.titleSections[3]?.text }}</p>
    </div>

    <BorderContent
      v-for="value in props.experiences" 
      :key="value.company" 
    >
      <div class="card bg-[#3B424C] card-md w-full">
        <div class="color-content">
          <div class="card view-content">
            <div class="image_company" 
              :style="imageCompany(value.image)" 
            />
  
            <hr class="balise-hr"/>
  
            <div class="period-timeline flex flex-col items-center justify-center">
              <h1>{{ value.month_end }} {{ value.year_end }}</h1>
    
              <p>Fleche</p>
    
              <h1>{{ value.month_start }} {{ value.year_start }}</h1>
            </div>
  
            <hr class="balise-hr"/>
  
            <p class="flex flex-col items-center justify-center"> ( 2 ans ) </p>
          </div>
        </div>

        <div class="card view-content">
          <h1>{{ value.title }}</h1>
          <hr class="balise-hr"/>
          <h2>Expérience à venir</h2>
          <p>Cette section est en cours de développement. Revenez bientôt pour découvrir mes expériences professionnelles !</p>
        </div>
      </div>
    </BorderContent>
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
</style>