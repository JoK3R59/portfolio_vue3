<script setup lang="ts">
  import { computed } from 'vue';
  import BorderContent from '@/component/borderContent.vue';
  import { calculateAge } from '@/utils';
  import type { PersonalData, InfoItems } from "@/utils/types";

  const props = defineProps<{
    profil: PersonalData["profil"]
    aboutMe: PersonalData["aboutMe"]
  }>();

  const informations = computed<InfoItems[]>(() => [
    { label: 'Sexe', value: props.profil.sexe },
    { label: 'Age', value: `${ calculateAge(props.profil.age) } ans` },
    { label: 'Email', value: props.profil.email },
    // { label: 'Téléphone', value: props.profil.phone },
    { label: 'Adresse', value: props.profil.address },
    { label: 'Langages', value: props.profil.langage }, 
    // { label: 'Travaille chez', value: props.profil.job },
  ]);
</script>

<template>
  <div class="about-section">
    <BorderContent>
      <div class="card-body card-left">
        <h2 class="card-title font-bold text-3xl">
          Qui suis-je ?
        </h2>
        <hr />
        <div class="card-content">
          <p class="text-base">
          {{ props.aboutMe.p1 }}
          </p>
          <p class="text-base">
            {{ props.aboutMe.p2 }}
          </p>
          <p class="text-base">
            {{ props.aboutMe.p3 }}
          </p>
        </div>
      </div>

      <div class="card-body card-right">
        <h2 class="card-title font-bold text-3xl">
          Informations personnelles
        </h2>
        <hr />
        <div v-for="(info, index) in informations" :key="index">
          <div class="flex justify-evenly items-center"
            :style="{ marginTop: index > 0 ? '1rem' : '0' }">
            <p class="w-1/3 text-base text-gray-300 uppercase font-bold">
              {{ info.label }} :
            </p>
            <p class="w-2/3 text-base text-gray-200">
              {{ info.value }}
            </p>
          </div>
        </div>
      </div>
    </BorderContent>
  </div>
</template>

<style scoped>
  .card-left {
    border-bottom: 0.1rem solid black;
    padding: 1rem;
  }
  .card-right {
    padding: 1rem;
  }
</style>