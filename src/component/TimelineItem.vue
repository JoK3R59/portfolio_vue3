<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import { formatDateFR, calculateDuration } from '@/utils';
import SvgConfig from '@/component/svgConfig.vue';
import BorderContent from '@/component/border_content.vue';

const props = defineProps<{
  experiences: PersonalData["experiences"][number];
  activeSchool: boolean;
}>();

function imageCompany(image: string) {
  return {
    backgroundImage: `url(${new URL(`../assets/logos/${image}.webp`, import.meta.url).href})`
  };
}

function inverseFlexDirection() {
  return props.activeSchool ? 'flex flex-col-reverse' : 'flex flex-col';
}
</script>

<template>
  <BorderContent>
    <div class="card bg-[#3B424C] card-md w-full">
      <div class="color-content">
        <div class="card view-content">
          <a
            :href="props.experiences.website == '' ? '#' : props.experiences.website"
            :target="props.experiences.website == '' ? '_self' : '_blank'">
            <div class="image_company"
              :style="imageCompany(props.experiences.image)"
            />
          </a>

          <hr class="balise-hr"/>

          <div class="period-timeline flex flex-col items-center justify-center">
            <span>{{ formatDateFR(props.experiences.month_end, props.experiences.year_end) }}</span>

            <SvgConfig :name="'arrow-top'" class="w-8 h-8 mb-1 mt-1" />

            <span>{{ formatDateFR(props.experiences.month_start, props.experiences.year_start) }}</span>
          </div>

          <hr class="balise-hr"/>

          <p class="flex items-center justify-center">
            ( {{ calculateDuration(props.experiences.month_start, props.experiences.year_start, props.experiences.month_end, props.experiences.year_end) }} )
          </p>
        </div>
      </div>

      <div class="card view-content">
        <div :class="inverseFlexDirection()">
          <h2 v-if="props.experiences.company != 'Freelance'">
            {{ props.experiences.company }}
          </h2>
          <h3>{{ props.experiences.title }}</h3>
        </div>
        <hr class="balise-hr"/>
        <p
          v-for="detail, id in props.experiences.details"
          :key="id"
          class="paragraph"
        >
          {{ detail }}
        </p>
      </div>
    </div>
  </BorderContent>
</template>

<style scoped>
.color-content {
  background-color: #095797;
  border-radius: 0.5rem 0.5rem 0 0;
}

.view-content {
  margin: 1rem 1rem;
}

.image_company {
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