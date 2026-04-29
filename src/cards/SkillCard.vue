<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import BorderContent from '@/component/borderContent.vue';
import ProgressBar from '@/component/progressBar.vue';
import SvgConfig from '@/component/svgConfig.vue';
import CarouselTools from '@/component/carouselTools.vue';

  const props = defineProps<{
    skills: PersonalData["skills"];
    tools: PersonalData["tools"];
    sectionTitles: PersonalData["sectionTitles"][number];
  }>();

  const getSvgPath = (svgName: string) => {
    return new URL(`../assets/svg/${svgName}.svg`, import.meta.url).href;
  };
</script>

<template>
  <div class="skill_section" id="skills">
    <div class="title_section flex flex-row items-center justify-center mb-8">
      <SvgConfig :name="props.sectionTitles.icon ?? '' " class="w-12 h-12 mb-1 mr-1" />

      <p>{{ props.sectionTitles.text }}</p>
    </div>

    <BorderContent type-aos="fade-up">
      <div class="card bg-[#3B424C] ">
        <div class="card-body">
          <div class="skills mb-4 lg:flex lg:flex-row lg:flex-wrap">

            <div v-for="value in props.skills" :key="value.name"
              class="skill_progress px-2 lg:basis-1/2"
            >
              <div class="context_progress flex justify-between items-end">
                <div class="title_progress flex flex-row items-center w-full">
                  <img class="svg" 
                    :src="getSvgPath(value.svg)"
                    :alt="`SVG - ${ value.name }`"/>

                  <a target="_blank" :href="value.link"
                    class="text-base font-bold hover:underline uppercase">
                    {{ value.name }}
                  </a>
                </div>

                <p class="font-bold text-base">
                  {{ value.percentage }}%
                </p>
              </div>

              <ProgressBar class="" 
                :id="value.name"
                :value="value.percentage"
                :progress="value.percentage"
                :color="value.color"
              />
            </div>
          </div>
          <hr/>

          <CarouselTools :tools="props.tools" />
        </div>
      </div>
    </BorderContent>
  </div>
</template>

<style scoped>
  .card-body{
    padding: 1rem;
  }
  .svg {
    width: 2em;
    height: 2em;
    margin-right: 1rem;
  }
  .skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .skill_progress {
    width: 100%;
    padding: 0.5rem;
  }
</style>