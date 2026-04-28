<script setup lang="ts">
import AOS from 'aos';
import { onMounted } from 'vue';
// Import Cards
import ProfilCard from '@/cards/ProfilCard.vue';
import AboutCard from '@/cards/AboutCard.vue';
import SkillCard from '@/cards/SkillCard.vue';
import ProjectCard from '@/cards/ProjectCard.vue';
import ExperienceCard from '@/cards/ExperienceCard.vue';
import EducationCard from '@/cards/EducationCard.vue';
import Footer from '@/cards/FooterCard.vue';
import NavBar from '@/cards/NavBar.vue';
// Import Data
import { personalData } from '@/assets/data/personalData';

  onMounted(() => {
    AOS.init();
  });
</script>

<template>
  <NavBar 
    :sectionTitles = "personalData.sectionTitles"
    :scrollTitles = "personalData.scrollTitles"
    :name = "personalData.profil.name" />
  <ProfilCard
    :name="personalData.profil.name"
    :jobTitle="personalData.profil.jobTitle"
    :subTitle="personalData.profil.subTitle"
    :socialLinks="personalData.socialLinks" />
  <div id="portfolio_content" class="p-8 lg:p-16">
    <AboutCard 
      :profil="personalData.profil"
      :aboutMe="personalData.aboutMe" />
    <SkillCard 
      :skills="personalData.skills"
      :tools="personalData.tools"
      :sectionTitles="personalData.sectionTitles[1]!" />
    <ProjectCard 
      :projects="personalData.projects"
      :sectionTitles="personalData.sectionTitles[2]!" />
    <ExperienceCard 
      :sectionTitles="personalData.sectionTitles[3]!"
      :experiences="personalData.experiences" />
    <EducationCard 
      :sectionTitles="personalData.sectionTitles[4]!"
      :educations="personalData.educations" />
  </div>
  <Footer 
    :linkedin="personalData.socialLinks.linkedin"
    :github="personalData.socialLinks.github" />
</template>
