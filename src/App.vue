<script setup lang="ts">
  // Import Cards
  import ProfilCard from '@/cards/ProfilCard.vue';
  import AboutCard from '@/cards/AboutCard.vue';
  import SkillCard from '@/cards/SkillCard.vue';
  import ProjectCard from '@/cards/ProjectCard.vue';
  import ExperienceCard from '@/cards/ExperienceCard.vue';
  import Education from '@/cards/Education.vue';
  import Footer from '@/cards/Footer.vue';
  import NavBar from '@/cards/NavBar.vue';
  // Import Data
  import { personalData } from '@/assets/data/personalData';
</script>

<template>
  <NavBar 
    :sectionTitles = "personalData.sectionTitles"
    :scrollTitles = "personalData.scrollTitles" />
  <ProfilCard
    :name="personalData.profil.name"
    :jobTitle="personalData.profil.jobTitle"
    :subTitle="personalData.profil.subTitle"
    :socialLinks="personalData.socialLinks" />
  <div id="portfolio_content">
    <AboutCard 
      :profil="personalData.profil"
      :aboutMe="personalData.aboutMe" />
    <SkillCard 
      :skills="personalData.skills"
      :tools="personalData.tools"
      :titleSections="personalData.sectionTitles" />
    <ProjectCard 
      :projects="personalData.projects"
      :titleSections="personalData.sectionTitles" />
    <ExperienceCard 
      :titleSections="personalData.sectionTitles"
      :experiences="personalData.experiences" />
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
