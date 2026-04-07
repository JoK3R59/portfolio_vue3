<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import BorderContent from '@/component/borderContent.vue';
import ProgressBar from '@/component/progressBar.vue';
import SvgConfig from '@/component/svgConfig.vue';

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
  <div class="skill_section">
    <div class="title_section flex flex-row items-center justify-center mb-8">
      <SvgConfig :name="props.sectionTitles.icon ?? '' " class="w-12 h-12 mb-1 mr-1" />
      <p>{{ props.sectionTitles.text }}</p>
    </div>

    <BorderContent>
      <div class="card bg-[#3B424C] card-md w-full">
        <div class="card-body">
          <div class="skills">
            <div v-for="value in props.skills" class="skill_progress px-2" :key="value.name">
              <div class="context_progress flex justify-between items-end">
                <div class="title_progress flex flex-row items-center w-full">
                  <img class="svg" 
                    :src="getSvgPath(value.svg)"
                    :alt="`SVG - ${ value.name }`"/>
                  <a target="_blank" :href="value.link">
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
          <hr />
          <div class="card bg-[#3B424C] card-md">
            <div class="card-body">
              <h2>Mes outils</h2>
              <p>(Survolez les icônes pour plus de détails)</p>
            </div>
          </div>
        </div>
      </div>
    </BorderContent>
  </div>
</template>

<style scoped>
  .svg {
    width: 2em;
    height: 2em;
    margin-right: 0.2em;
  }
  .skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .skill_progress {
    width: 50%;
    padding: 0.5rem;
  }
</style>