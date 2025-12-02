<script setup lang="ts">
  import './assets/reset.css'
  // Import Sections
  import Profil from './sections/profil.vue';
  import About from './sections/About.vue';
  import Skill from './sections/Skill.vue';
  import Project from './sections/Project.vue';
  import Experience from './sections/Experience.vue';
  import Education from './sections/Education.vue';
  import Footer from './sections/Footer.vue';
  import Nav_bar from './sections/Nav_bar.vue';
</script>

<template>
  <Nav_bar />
  <Profil />
  <div id="portfolio_content">
    <About />
    <Skill />
    <Project />
    <Experience />
    <Education />
  </div>
  <Footer />
</template>

<style>
  #app {
    background-color: bisque;
  }
  #portfolio_content {
    padding: 2rem 4rem;
  }
</style>
