<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useTemplateRef } from 'vue';
import type { Project } from '@/utils/types';

  const props = defineProps<{
    project: Project;
  }>();

  // Utilisation de useTemplateRef pour créer une référence au dialog
  const dialogRef = useTemplateRef<HTMLDialogElement>('dialog');

  // Ouvre le modal en utilisant la référence du dialog
  function openModal() {
    dialogRef.value?.showModal();
  }

  function openLink() {
    if (props.project.link) {
      window.open( props.project.link, '_blank' );
    }
  }

  const getImage = () => {
    return new URL(`../assets/images/${props.project.image}.webp`, import.meta.url).href;
  };
</script>

<template>
  <button class="w-full h-full flex items-end p-2" @click="openModal">
    <span class="titleButton w-full text-center uppercase text-white font-medium text-base rounded-lg py-1 px-2">
      {{ props.project.title }}
    </span>
  </button>

  <Teleport to="body"> 
    <dialog ref="dialog" class="modal max-w-max">
      <div class="modal-box bg-[#1d232a]! w-11/12 max-w-5xl">
        <img :src="getImage()" alt="Image du projet"
          class="w-full h-auto object-contain rounded-lg mb-4" 
        />
        <h2 class="text-lg font-bold mb-2">
          {{ props.project.title }}
        </h2>

        <p class="text-sm font-light">
          {{ props.project.description }}
        </p>

        <div class="modal-action">
          <form method="dialog">
            <button v-if=" props.project.link != '' "
              class="btn btn-link" 
              @click="openLink()"
            >
              Visiter le lien
            </button>
            <button class="btn">Fermer</button>
          </form>
        </div>
      </div>

      <form method="dialog" class="modal-backdrop backdrop-blur-sm">
        <button>close</button>
      </form>
    </dialog>
  </Teleport>
</template>

<style scoped>
  .titleButton {
    background-color: #09579788;
    backdrop-filter: blur(2px);
  }
</style>
