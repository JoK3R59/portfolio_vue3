/* PERSONAL DATA */
export interface Skill {
  name: string;
  percentage: number;
  color: string;
  svg: string;
  link: string;
}

export interface SocialLink {
  link: string;
  svg: string;
}

export interface Section {
  title: string;
  content: string;
}

export interface Tools {
  name: string;
  label: string;
  svg: string;
}

export interface AboutMe {
  p1: string;
  p2: string;
  p3: string;
}

export interface SocialLinks {
  linkedin: SocialLink;
  github: SocialLink;
}

export interface Sections {
  profile: Section;
  skills: Section;
  projects: Section;
  experience: Section;
  education: Section;
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
  image: string;
  website: string;
  month_start: string;
  month_end: string;
  year_start: string;
  year_end: string;
  details: string[];
}

export interface SectionTitles {
  text: string;
  text_mobile: string;
  icon: string;
}

export interface Profil {
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
}

export interface PersonalData {
  profil: Profil;
  aboutMe: AboutMe;
  socialLinks: SocialLinks;
  sections: Sections;
  skills: Record<string, Skill>; /** Compétences indexées par identifiant technique. Chaque valeur décrit le nom, niveau et icône. */
  tools: Tools[];
  projects: Project[];
  experiences: Experiences[];
  educations: Experiences[];
  sectionTitles: SectionTitles[];
  scrollTitles: string[];
}

/* /!\ END PERSONAL DATA /!\ */

export interface InfoItems {
  label: string;
  value: string;
}

export interface Props {
  value: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: string
  showLabel?: boolean
}

