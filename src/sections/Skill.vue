<script setup lang="ts">
  import BorderContent from '../component/border_content.vue';
  import ProgressBar from '../component/progress_bar.vue';
  import type { PersonalData } from '../utils/types';

  const props = defineProps<{
    skills: PersonalData["skills"];
  }>();
</script>

<template>
  <div class="skill_section">
    <BorderContent>
      <div class="card bg-[#3B424C] card-md w-full">
        <div class="card-body">
          <div class="skills">
            <div v-for="( value ) in props.skills" class="skill_progress px-2">
              <div class="context_progress flex justify-between items-end">
                <div class="title_progress flex flex-row items-center w-full">
                  <img class="svg" 
                    :src="`/src/assets/svg/${ value.svg }.svg`" 
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