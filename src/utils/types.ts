export interface AboutMe {
  p1: string;
  p2: string;
  p3: string;
}

export interface SocialLink {
  link: string;
  svg: string;
}

export interface SocialLinks {
  linkedin: SocialLink;
  github: SocialLink;
}

export interface Section {
  title: string;
  content: string;
}

export interface Sections {
  profile: Section;
  skills: Section;
  projects: Section;
  experience: Section;
  education: Section;
}

export interface Skills {
  s1: Skill;
  s2: Skill;
  s3: Skill;
  s4: Skill;
  s5: Skill;
  s6: Skill;
  s7: Skill;
  s8: Skill;
  s9: Skill;
  s10: Skill;
}

export interface Skill {
  name: string;
  percentage: number;
  color: string;
  svg: string;
  link: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface Experiences {
  title: string;
  company: string;
  website: string;
  month_start: string;
  month_end: string;
  year_start: string;
  year_end: string;
  details: string[];
}

interface SectionTitles {
  text: string;
  text_mobile: string;
  icon: string;
}

export interface PersonalData {
  name: string;
  age: number;
  sexe: string;
  jobTitle: string;
  subTitle: string;
  address: string;
  langage: string;
  phone: string;
  job: string;
  email: string;
  aboutMe: AboutMe;
  socialLinks: SocialLinks;
  sections: Sections;
  skills: Skills;
  projects: Project[];
  experiences: Experiences[];
  sectionTitles: SectionTitles[];
  scrollTitles: string[];
}