<script setup lang="ts">
import SocialsLink from '@/component/socialLink.vue';
import type { SocialLink } from '@/utils/types';
import { ref } from 'vue';

  const props = defineProps<{
    name: string,
    jobTitle: string,
    subTitle: string,
    socialLinks: {
      linkedin: SocialLink,
      github: SocialLink,
    }
  }>();

  const isPressed = ref(false);

  function onButtonClick() {
    isPressed.value = true;
    setTimeout(() => { isPressed.value = false; }, 200);
  }
</script>

<template>
  <section class="profil-section hero text-slate-200">
    <div class="hero-overlay"></div>
    <div class="w-screen lg:w-dvh h-100 text-center">
      <div class="px-6">
        <div class="header-image pulse">
          <a href="https://www.linkedin.com/in/guillaume-ersent/" target="_blank">
            <img src="@/assets/images/profil.jpg" alt="Photo de Profil" class="rounded-full" />
          </a>
        </div>

        <h1 class="mb-4 text-3xl font-bold">{{ props.name }}</h1>
        <hr />
        <p class="my-2 text-lg font-semibold uppercase">{{ props.jobTitle }}</p>
        <p class="mb-8 text-lg font-semibold uppercase">{{ props.subTitle }}</p>
        <div data-aos="zoom-in">
          <a @click="onButtonClick()" href="/cv-guillaume-ersent.pdf" target="_blank"
            :class="{ 'scale-95 translate-y-1.5': isPressed }"
            class="inline-flex items-center justify-center px-6 py-2 rounded-lg cursor-pointer font-medium text-lg text-white bg-[#095797] hover:bg-[#0d80df] ring-[#0d80df] inset-ring ring-offset-1 ring-offset-[#eee] hover:ring-3 transition hover:delay-100 ease-in-out duration-[400ms] "
          >
            Mon CV
          </a>
        </div>
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
    background-image: url('@/assets/images/background.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 70vh;
  }
  .header-image {
    margin: auto auto 2rem auto;
    border-radius: 50%;
    cursor: pointer;
    height: 140px;
    width: 140px;
  }
  .social-links {
    display: flex;
    justify-content: center;
    position: relative;
    top: 35vh;
    z-index: 500;
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