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
</script>

<template>
  <button class="w-full h-full flex items-end p-2" @click="openModal">
    <span class="titleButton w-full text-center uppercase text-white font-medium text-base rounded-lg py-1 px-2">
      {{ props.project.title }}
    </span>
  </button>
  <!-- Teleport évite le flash visuel à la fermeture en sortant le dialog du flux DOM parent -->
  <Teleport to="body"> 
    <dialog ref="dialog" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <h2>{{ props.project.title }}</h2>
        <p>{{ props.project.description }}</p>
        <div class="modal-action">
          <form method="dialog">
            <button v-if="props.project.link != ''"
              class="btn btn-link" 
              @click="openLink()"
            >
              Ouvrir
            </button>
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
  .titleButton {
    background-color: #09579788;
    backdrop-filter: blur(2px);
  }
</style>
