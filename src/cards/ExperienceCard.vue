<script setup lang="ts">
  import type { PersonalData } from '@/utils/types';
  import { formatDateFR, calculateDuration } from '@/utils';
  import SvgConfig from '@/component/svgConfig.vue';
  import BorderContent from '@/component/border_content.vue';

  const props = defineProps<{
    sectionTitles: PersonalData["sectionTitles"][number];
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
      <SvgConfig :name="props.sectionTitles.icon ?? '' " class="w-12 h-12 mb-1 mr-1" />
      <h1>{{ props.sectionTitles.text }}</h1>
    </div>

    <BorderContent
      v-for="value, id in props.experiences" 
      :key="id" 
    >
      <div class="card bg-[#3B424C] card-md w-full">
        <div class="color-content">
          <div class="card view-content">
            <a 
              :href="value.website == '' ? '#' : value.website"
              :target="value.website == '' ? '_self' : '_blank'">
              <div class="image_company" 
                :style=" imageCompany(value.image) " 
              />
            </a>
  
            <hr class="balise-hr"/>
  
            <div class="period-timeline flex flex-col items-center justify-center">
              <span>{{ formatDateFR(value.month_end, value.year_end) }}</span>
              
              <SvgConfig :name="'arrow-top'" class="w-8 h-8 mb-1 mt-1" />
    
              <span>{{ formatDateFR(value.month_start, value.year_start) }}</span>
            </div>
  
            <hr class="balise-hr"/>
  
            <p class="flex items-center justify-center">
              ( {{ calculateDuration(value.month_start, value.year_start, value.month_end, value.year_end) }} )
            </p>
          </div>
        </div>

        <div class="card view-content">
          <h2>{{ value.title }}</h2>
          <hr class="balise-hr"/>
          <p 
            v-for="item, id in value.details" 
            :key="id"
            class="paragraph"
          >
            {{ item }}
          </p>
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

.paragraph {
  margin-bottom: 1rem;
}
</style>