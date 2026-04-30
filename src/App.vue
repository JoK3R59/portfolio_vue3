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
    :section-titles = "personalData.sectionTitles"
    :scroll-titles = "personalData.scrollTitles"
    :name = "personalData.profil.name" />
  <ProfilCard
    :name="personalData.profil.name"
    :job-title="personalData.profil.jobTitle"
    :sub-title="personalData.profil.subTitle"
    :social-links="personalData.socialLinks" />
  <div id="portfolio_content" class="p-8 2xl:px-64 lg:px-16 lg:py-16">
    <AboutCard 
      :profil="personalData.profil"
      :about-me="personalData.aboutMe" />
    <SkillCard 
      :skills="personalData.skills"
      :tools="personalData.tools"
      :section-titles="personalData.sectionTitles[1]!" />
    <ProjectCard 
      :projects="personalData.projects"
      :section-titles="personalData.sectionTitles[2]!" />
    <ExperienceCard 
      :section-titles="personalData.sectionTitles[3]!"
      :experiences="personalData.experiences" />
    <EducationCard 
      :section-titles="personalData.sectionTitles[4]!"
      :educations="personalData.educations" />
  </div>
  <Footer 
    :linkedin="personalData.socialLinks.linkedin"
    :github="personalData.socialLinks.github" />
</template>
