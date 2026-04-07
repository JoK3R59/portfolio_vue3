<script setup lang="ts">
  import SocialsLink from '@/component/socialLink.vue';
  import type { SocialLink } from '@/utils/types';

  const props = defineProps<{
    name: string,
    jobTitle: string,
    subTitle: string,
    socialLinks: {
      linkedin: SocialLink,
      github: SocialLink,
    }
  }>();
</script>

<template>
  <section class="profil-section hero">
    <div class="hero-overlay"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="profil-content w-40">
        <div class="header-image pulse">
          <a href="https://www.linkedin.com/in/guillaume-ersent/" target="_blank">
            <img src="/src/assets/images/profil.jpg" alt="Photo de Profil" class="rounded-full" />
          </a>
        </div>

        <h1 class="mb-5 text-xl font-bold">{{ props.name }}</h1>
        <hr />
        <p class="mb-5 text-3xl font-semibold">{{ props.jobTitle }}</p>
        <p class="mb-5 text-3xl font-semibold">{{ props.subTitle }}</p>
        <button class="btn bg-[#095797] text-lg"
          data-aos="zoom-in">
          Mon CV
        </button>
      </div>
    </div>

    <div class="social-links">
      <SocialsLink
        :linkedin="props.socialLinks.linkedin"
        :github="props.socialLinks.github" />
    </div>
  </section>
</template>

<style scoped>
  .profil-section {
    background-image: url('@/assets/images/backgroundv3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 50vh;
  }
  .header-image {
    margin: auto auto 1rem auto;
    border-radius: 50%;
    cursor: pointer;
    height: 140px;
    width: 140px;
  }
  .profil-content h1, p {
    margin-bottom: 0.5rem;
  }
  .social-links {
    display: flex;
    justify-content: center;
    position: relative;
    top: 25vh;
    z-index: 900;
  }
  hr {
    width: 100%;
    margin: 0.5rem auto;
    border: 2px solid transparent;
  }
  .pulse {
    border-radius: 50%;
    box-shadow: 0 0 0 #095797;
    animation: pulse 2s infinite;
  }
  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgb(9, 87, 151);
    }
    70% {
        -webkit-box-shadow: 0 0 0 15px rgba(204,169,44, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgb(9, 87, 151);
      box-shadow: 0 0 0 0 rgb(9, 87, 151);
    }
    70% {
        -moz-box-shadow: 0 0 0 15px rgba(204,169,44, 0);
        box-shadow: 0 0 0 15px rgba(204,169,44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
  }
</style>