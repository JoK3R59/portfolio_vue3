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
    <p>Guillaume ERSENT - 2026</p>
  </div>

</template>

<style scoped>
  .footer_section {
    height: 11rem;
  }
  .footer_section p {
    color: #fff;
    text-align: center;
    margin: 1rem 0;
  }
  .social-links {
    display: flex;
    justify-content: center;
  }
</style>