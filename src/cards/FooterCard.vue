<script setup lang="ts">
  import SocialsLink from '@/component/socialLink.vue';

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
</script>

<template>
  <div class="footer_section">
    <div class="social-links">
      <SocialsLink
        :linkedin="props.linkedin"
        :github="props.github" />
    </div>
    <h1>Guillaume ERSENT - 2026</h1>
  </div>

</template>

<style scoped>
  .footer_section {
    height: 11rem;
  }
  .footer_section h1 {
    color: #fff;
    text-align: center;
    margin: 1rem 0;
  }
  .social-links {
    display: flex;
    justify-content: center;
  }
</style>