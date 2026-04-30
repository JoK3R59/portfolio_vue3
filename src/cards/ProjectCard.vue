<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { PersonalData } from '@/utils/types';
import BorderMultiContent from '@/component/borderMultiContent.vue';
import SvgConfig from '@/component/svgConfig.vue';
import ModalProject from '@/component/modalProject.vue';

  const props = defineProps<{
    projects: PersonalData["projects"];
    sectionTitles: PersonalData["sectionTitles"][number];
  }>();

  const getImage = (name: string) =>
    new URL(`../assets/images/${name}.webp`, import.meta.url).href
</script>

<template>
  <div class="section text-slate-200" id="projects">
    <div class="title_section flex flex-row items-center justify-center">
      <SvgConfig :name="props.sectionTitles.icon ?? '' " class="w-10 h-10 mb-1 mr-1" />
      <p>{{ props.sectionTitles.text }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-8 md:gap-y-4">
      <div v-for="(value, id) in props.projects" :key="`projectId_${id}`">

        <div class="lg:hidden">
          <BorderMultiContent :image="value.image">
            <ModalProject :project="value" />
          </BorderMultiContent>
        </div>

        <a
          class="hidden lg:block shadow_content rounded-lg"
          :href="value.link || undefined"
          :target="value.link ? '_blank' : undefined"
          :rel="value.link ? 'noopener noreferrer' : undefined"
        >
          <figure class="cc-effect group relative overflow-hidden rounded-lg">
            <img
              :src="getImage(value.image)"
              :alt="value.title"
              class="block w-full h-100 object-cover transition-[filter] duration-[350ms] ease-out group-hover:blur-sm"
            />
            <figcaption class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900/80 px-6 text-center text-white opacity-0 transition-opacity duration-[350ms] ease-out group-hover:opacity-100">
              <h2 class="text-2xl font-semibold">{{ value.title }}</h2>

              <p class="text-xs uppercase tracking-widest text-slate-200 line-clamp-2">
                {{ value.description }}
              </p>

              <SvgConfig v-if="value.link" name="link-out" class="mt-6 w-12 h-12 text-slate-200" />
            </figcaption>
          </figure>
        </a>

      </div>
    </div>
  </div>
</template>

<style scoped>
.cc-effect figcaption { z-index: 2; }
</style>