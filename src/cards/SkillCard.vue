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
  <div class="section text-slate-200" id="skills">
    <div class="title_section flex flex-row items-center justify-center">
      <SvgConfig :name="props.sectionTitles.icon ?? '' " 
        class="w-10 md:w-14 h-10 md:h-14 mb-1 mr-1" 
        :color="`#1b992c`"
      />

      <p>{{ props.sectionTitles.text }}</p>
    </div>

    <BorderContent type-aos="fade-up">
      <div class="card bg-[#3B424C] ">
        <div class="card-body">
          <div class="skills mb-4 md:flex md:flex-row md:flex-wrap">

            <div v-for="value in props.skills" :key="value.name"
              class="skill_progress px-2 md:basis-1/2"
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

          <div class="card card-md">
            <div class="card-body flex flex-col items-center pb-2">
              <h2 class="text-xl font-bold">Mes outils</h2>
              <p class="text-xs italic text-center md:hidden">(Naviguez avec les flèches pour plus de détails)</p>

              <p class="text-xs italic text-center hidden md:block">(Survolez ou cliquez sur les icônes pour plus de détails)</p>
            </div>
            <CarouselTools :tools="props.tools" class-style="md:hidden"/>

            <div class="hidden md:flex flex-wrap gap-4 justify-center items-center pt-4">
              <div
                v-for="tool in props.tools"
                :key="tool.svg"
                class="tooltip lg:mx-2"
                :data-tip="tool.desc"
              >
                <SvgConfig :name="tool.svg" class="md:w-10 lg:w-14 md:h-10 lg:h-14 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BorderContent>
  </div>
</template>

<style scoped>
  @media (min-width: 768px) {
    .tooltip::before {
      max-width: 14rem;
      padding-block: 0.4rem;
    }
  }
  @media (min-width: 1024px) {
    .tooltip::before {
      max-width: 18rem;
      padding-block: 0.6rem;
    }
  }
  @media (min-width: 1440px) {
    .tooltip::before {
      max-width: 22rem;
      padding-block: 0.8rem;
    }
  }
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