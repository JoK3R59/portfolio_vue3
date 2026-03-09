<script setup lang="ts">
  // Import Sections
  import Profil from '@/sections/Profil.vue';
  import About from '@/sections/About.vue';
  import Skill from '@/sections/Skill.vue';
  import Project from '@/sections/Project.vue';
  import Experience from '@/sections/Experience.vue';
  import Education from '@/sections/Education.vue';
  import Footer from '@/sections/Footer.vue';
  import Nav_bar from '@/sections/Nav_bar.vue';
  // Import Data
  import { personalData } from '@/assets/data/personalData';
</script>

<template>
  <Nav_bar 
    :sectionTitles = "personalData.sectionTitles"
    :scrollTitles = "personalData.scrollTitles"/>
  <Profil
    :name="personalData.profil.name"
    :jobTitle="personalData.profil.jobTitle"
    :subTitle="personalData.profil.subTitle"
    :socialLinks="personalData.socialLinks"/>
  <div id="portfolio_content">
    <About 
      :profil="personalData.profil"
      :aboutMe="personalData.aboutMe"/>
    <Skill 
      :skills="personalData.skills"
      :tools="personalData.tools"
      :titleSections="personalData.sectionTitles"/>
    <Project />
    <Experience />
    <Education />
  </div>
  <Footer />
</template>

<style>
  #portfolio_content {
    padding: 2rem 2rem;
  }
  @media (min-width: 1200px) {
    /* PC standard */
    #portfolio_content {
      padding: 2rem 4rem;
    }
  }
</style>
