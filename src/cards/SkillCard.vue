<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import BorderContent from '@/component/borderContent.vue';
import ProgressBar from '@/component/progressBar.vue';
import SvgConfig from '@/component/svgConfig.vue';
import { ref, computed } from 'vue';

  const props = defineProps<{
    skills: PersonalData["skills"];
    tools: PersonalData["tools"];
    sectionTitles: PersonalData["sectionTitles"][number];
  }>();

  const getSvgPath = (svgName: string) => {
    return new URL(`../assets/svg/${svgName}.svg`, import.meta.url).href;
  };

  // Carrousel pour les outils
  const currentIndex = ref(0); // Index pour suivre l'outil actuellement affiché
  const currentTool = computed(() => props.tools[currentIndex.value]!); // Outil actuellement affiché, avec assertion de non-nullité
  const prev = () => currentIndex.value = (currentIndex.value - 1 + props.tools.length) % props.tools.length; // Fonction pour aller à l'outil précédent, avec gestion du wrap-around
  const next = () => currentIndex.value = (currentIndex.value + 1) % props.tools.length; // Fonction pour aller à l'outil suivant, avec gestion du wrap-around

</script>

<template>
  <div class="skill_section" id="skills">
    <div class="title_section flex flex-row items-center justify-center mb-8">
      <SvgConfig :name="props.sectionTitles.icon ?? '' " class="w-12 h-12 mb-1 mr-1" />
      <p>{{ props.sectionTitles.text }}</p>
    </div>

    <BorderContent>
      <div class="card bg-[#3B424C] ">
        <div class="card-body">
          <div class="skills mb-4">
            <div v-for="value in props.skills" class="skill_progress px-2" :key="value.name">
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
              <p class="text-xs italic text-center">(Naviguez avec les flèches pour plus de détails)</p>
            </div>

            <!-- Slide actif -->
            <div class="flex flex-col items-center gap-3 min-h-48">
              <SvgConfig :name="currentTool.svg" class="w-14 h-14" />
              <p class="text-sm text-center leading-relaxed max-w-xs ">
                {{ currentTool.desc }}
              </p>
            </div>

            <!-- Navigation : flèches + dots sur la même ligne -->
            <div class="flex justify-center items-center gap-3">
              <button @click="prev" class="btn btn-circle btn-sm opacity-70 hover:opacity-100">
                ❮
              </button>
              <div class="flex gap-2">
                <button
                  v-for="(_, id) in props.tools"
                  :key="id"
                  @click="currentIndex = id"
                  class="w-2 h-2 rounded-full bg-base-content transition-opacity"
                  :class="id === currentIndex ? 'opacity-100' : 'opacity-30'"
                />
              </div>
              <button @click="next" class="btn btn-circle btn-sm opacity-70 hover:opacity-100">
                ❯
              </button>
            </div>

          </div>
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