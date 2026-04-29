<script setup lang="ts">
import { computed } from 'vue';
import BorderContent from '@/component/borderContent.vue';
import SvgConfig from '@/component/svgConfig.vue';
import { calculateAge } from '@/utils';
import type { PersonalData, InfoItems } from "@/utils/types";

  const props = defineProps<{
    profil: PersonalData["profil"]
    aboutMe: PersonalData["aboutMe"]
  }>();

  const informations = computed<InfoItems[]>(() => [
    { label: 'Sexe', value: props.profil.sexe },
    { label: 'Age', value: `${ calculateAge(props.profil.yearOfBirth) } ans` },
    { label: 'Email', value: props.profil.email },
    // { label: 'Téléphone', value: props.profil.phone },
    { label: 'Adresse', value: props.profil.address },
    { label: 'Langues', value: props.profil.langage }, 
    // { label: 'Travaille chez', value: props.profil.job },
  ]);
</script>

<template>
  <div class="">
    <BorderContent :classStyle="'flex flex-col lg:flex-row'">
      
      <div class="card-body lg:basis-1/2">
        <div class="flex items-center">
          <SvgConfig name="user" class="w-10 h-10 mr-2" />
          <h2 class="font-extrabold text-lg">
            Qui suis-je ?
          </h2>
        </div>
        <hr />
        <div v-for="(value, index) in props.aboutMe" :key="index"
          class="py-2"
        >
          <p class="text-base"
            v-html="value" />
        </div>
      </div>

      <div class="card-body lg:basis-1/2">
        <div class="flex items-center">
          <SvgConfig name="user-id" class="w-10 h-10 mr-2" />
          <h2 class="font-extrabold text-lg">
            Informations personnelles
          </h2>
        </div>
        <hr />
        <div v-for="(info, index) in informations" :key="index" class="py-2">
          <div class="flex flex-col lg:flex-row">
            <p class="text-base text-white uppercase font-bold lg:max-w-1/3">
              {{ info.label }} :
            </p>
            <p class="text-base text-gray-200" lg:shrink>
              {{ info.value }}
            </p>
          </div>
        </div>
      </div>
    </BorderContent>
  </div>
</template>

<style scoped>
</style>