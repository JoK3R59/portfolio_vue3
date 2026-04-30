<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { PersonalData } from '@/utils/types';
import SvgConfig from '@/component/svgConfig.vue';

  const props = defineProps<{
    tools: PersonalData["tools"];
    classStyle: string;
  }>();

  // Carousel pour les outils
  const currentIndex = ref(0);
  const currentTool = computed(() => props.tools[currentIndex.value]!);

  // Auto-play
  const AUTO_INTERVAL = 4000;   // avance toutes les 4s
  const RESUME_DELAY  = 5000;   // reprend 5s après la dernière interaction manuelle

  let autoTimer: ReturnType<typeof setInterval> | null = null;  // Timer pour l'auto-play
  let resumeTimer: ReturnType<typeof setTimeout> | null = null; // Timer pour reprendre l'auto-play après une interaction

  // Démarre l'auto-play
  const startAutoPlay = () => {
    if (autoTimer !== null) return;
    autoTimer = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % props.tools.length;
    }, AUTO_INTERVAL);
  };

  // Arrête l'auto-play
  const stopAutoPlay = () => {
    if (autoTimer !== null) { clearInterval(autoTimer); autoTimer = null; }
  };

  // Pause l'auto-play et le reprend après un délai
  const pauseAndResume = () => {
    stopAutoPlay();
    if (resumeTimer !== null) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(startAutoPlay, RESUME_DELAY);
  };

  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.tools.length) % props.tools.length; // Modulo pour revenir à la fin si on est au début
    pauseAndResume();
  };

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.tools.length; // Modulo pour revenir au début si on est à la fin
    pauseAndResume();
  };

  const goTo = (id: number) => {
    currentIndex.value = id;
    pauseAndResume(); // Va à l'outil sélectionné et pause l'auto-play
  };

  onMounted(startAutoPlay); // Démarre l'auto-play au montage du composant

  // Nettoie les timers à la destruction du composant
  onUnmounted(() => {
    stopAutoPlay();
    if (resumeTimer !== null) clearTimeout(resumeTimer);
  });
</script>

<template>
  <div :class="props.classStyle">

    <div class="flex flex-col items-center gap-3 min-h-48">
      <SvgConfig :name="currentTool.svg" class="w-14 h-14" />
      <p class="text-sm text-center leading-relaxed max-w-xs">
        {{ currentTool.desc }}
      </p>
    </div>

    <div class="flex justify-center items-center gap-3">
      <button @click="prev" class="btn btn-circle btn-sm opacity-70 hover:opacity-100">
        ❮
      </button>
      <div class="flex gap-2">
        <button
          v-for="(_, id) in props.tools"
          :key="id"
          @click="goTo(id)"
          class="w-2 h-2 rounded-full bg-base-content transition-opacity"
          :class="id === currentIndex ? 'opacity-100' : 'opacity-30'"
        />
      </div>
      <button @click="next" class="btn btn-circle btn-sm opacity-70 hover:opacity-100">
        ❯
      </button>
    </div>
  </div>
</template>
