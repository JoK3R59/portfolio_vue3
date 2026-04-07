<script setup lang="ts">

  const props = defineProps<{
    linkedin: {
      link: string,
      svg: string,
    },
    github: {
      link: string,
      svg: string,
    },
  }>();

  function openLink(selected: string) {
    if (selected === 'linkedin') {
      window.open( props.linkedin.link, '_blank' );
    } else if (selected === 'github') {
      window.open( props.github.link, '_blank' );
    }
  }

  const getSvgPath = (svgName: string) => {
    return new URL(`../assets/svg/${svgName}.svg`, import.meta.url).href;
  };
</script>

<template>
  <div class="tooltip" data-tip="Rejoignez mon réseau.">
    <button class="btn bg-[#0077B5] btn-circle social-circle"
      @click="openLink('linkedin')">
      <img :src="getSvgPath(props.linkedin.svg)"
        alt="LinkedIn">
    </button>
  </div>

  <div class="tooltip" data-tip="Découvrez mes projets.">
    <button class="btn bg-[#ffffff] btn-circle social-circle github"
      @click="openLink('github')">
      <img :src="getSvgPath(props.github.svg)"
        alt="GitHub">
    </button>
  </div>
</template>


<style scoped>
  .social-circle {
    margin: 0 0.5rem;
  }
</style>