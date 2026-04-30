<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import { formatDateFR, calculateDuration } from '@/utils';
import SvgConfig from '@/component/svgConfig.vue';
import BorderContent from '@/component/borderContent.vue';

  const props = defineProps<{
    experiences: PersonalData["experiences"][number];
    activeSchool: boolean;
  }>();

  function imageCompany(image: string) {
    return {
      backgroundImage: `url(${new URL(`../assets/logos/${image}.webp`, import.meta.url).href})`
    };
  }
  
</script>

<template>
  <BorderContent :class-style="`mb-8`">
    <div class="w-full md:flex md:flex-row ">
      <div class="bg-[#095797] rounded-t-lg md:rounded-none md:rounded-l-lg md:basis-1/4"
        data-aos="fade-right"
        data-aos-offset="80"
      >
        <div class="p-4">
          <a
            :href="props.experiences.website == '' ? '#' : props.experiences.website"
            :target="props.experiences.website == '' ? '_self' : '_blank'">
            <div class="bg-contain bg-no-repeat bg-center h-12.5"
              :style="imageCompany(props.experiences.image)"
            />
          </a>

          <hr class="my-4	opacity-25"/>

          <div class="flex flex-col items-center justify-center">
            <span>{{ formatDateFR(props.experiences.month_end, props.experiences.year_end) }}</span>

            <SvgConfig :name="'arrow-top'" class="w-8 h-8 mb-1 mt-1" />

            <span>{{ formatDateFR(props.experiences.month_start, props.experiences.year_start) }}</span>
          </div>

          <hr class="my-4	opacity-25"/>

          <p class="flex items-center justify-center">
            ( {{ calculateDuration(props.experiences.month_start, props.experiences.year_start, props.experiences.month_end, props.experiences.year_end) }} )
          </p>
        </div>
      </div>

      <div class="p-4 md:basis-3/4"
        data-aos="zoom-in"
        data-aos-offset="80"
      >
        <div >
          <h2 
            class="text-lg uppercase font-bold"
          >
            {{ props.experiences.title }}
          </h2>
          <h3 v-if="props.experiences.company != 'Freelance'"
            class="text-sm font-light text-sky-200">
            {{ props.experiences.company }}
          </h3>
        </div>
        <hr class="my-4	opacity-25"/>
        <p
          v-for="detail, id in props.experiences.details"
          :key="id"
          class="mb-4"
          v-html="detail"
         />
      </div>
    </div>
  </BorderContent>
</template>

<style scoped>
</style>