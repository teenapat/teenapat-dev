export interface PersonalData {
  email: string;
  birthDate: string;
  age: number;
  phone: string;
  workType: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
  level: string;
}

export interface Skill {
  name: string;
  color: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  description: string;
  logo: string;
  logoColor: string;
}

export interface VolunteerWork {
  id: string;
  position: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  description: string;
  logo: string;
  logoColor: string;
}

export const personalData: PersonalData = {
  email: 'teenapat.rat@gmail.com',
  birthDate: '15 July 1998',
  age: 27,
  phone: '+66 93 709 0348',
  workType: 'Remote or Fulltime',
};

export const languages: Language[] = [
  {
    code: 'th',
    name: 'Thai',
    flag: '🇹🇭',
    level: 'nativeLanguage',
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    level: 'intermediate',
  },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'C#', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
  {
    name: 'JavaScript',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  },
  { name: 'TypeScript', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  { name: 'PHP', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
  { name: 'SQL', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200' },

  // Frontend Frameworks & Libraries
  { name: 'Angular', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
  { name: 'React', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
  { name: 'Vue.js', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { name: 'Next.js', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200' },
  { name: 'Nuxt.js', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200' },

  // Backend Frameworks & Tools
  {
    name: '.NET Framework',
    color: 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
  },
  {
    name: 'Visual Basic .NET',
    color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  },
  {
    name: 'ASP.NET MVC',
    color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  },
  { name: 'Node.js', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  {
    name: 'NestJS',
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  },

  // Databases
  {
    name: 'Microsoft SQL Server',
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
  },
  { name: 'MySQL', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  { name: 'MongoDB', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { name: 'Firebase', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' },

  // Testing & Automation
  {
    name: 'Robot Framework',
    color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  },

  // DevOps & CI/CD
  { name: 'Azure DevOps', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  { name: 'Jenkins', color: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200' },
  // { name: 'GitHub', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200' },
  { name: 'Git', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },

  // Web Development & API
  // {
  //   name: 'API Development',
  //   color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  // },
  // { name: 'Web Development', color: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200' },
  // {
  //   name: 'Single Page Applications',
  //   color: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200',
  // },

  // UI / Styling
  { name: 'Tailwind', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },

  // Others
  { name: 'JSON', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tokio Marine Life Thailand',
    position: 'Back End Developer',
    location: 'Bangkok, Thailand',
    startDate: 'Jan 2024',
    endDate: 'Present',
    type: 'Contract',
    description:
      'Developing and maintaining back-end systems for insurance applications using Robot Framework, TypeScript, and other modern technologies. Collaborate with cross-functional teams to improve system performance, automate testing, and deliver scalable, secure solutions.',
    logo: '/logos/tokio-logo.png',
    logoColor: 'bg-cyan-600',
  },
  {
    id: '2',
    company: 'PTT Digital Solutions Company Limited',
    position: 'Developer',
    location: 'Bangkok, Thailand',
    startDate: 'Aug 2021',
    endDate: 'Dec 2023',
    type: 'Contract',
    description:
      'Built and enhanced enterprise-level applications using TypeScript and Angular. Worked closely with stakeholders to design, develop, and deploy new features while optimizing performance and ensuring maintainable, high-quality code.',
    logo: '/logos/ptt-logo.png',
    logoColor: 'bg-cyan-600',
  },
  {
    id: '3',
    company: 'Informatics Invasion of Excellence Center',
    position: 'Web Developer',
    location: 'Nakhon Si Thammarat, Thailand',
    startDate: 'Oct 2020',
    endDate: 'Jul 2021',
    type: 'Freelance',
    description:
      'Developed and maintained web applications using TypeScript and Angular to support research projects and digital initiatives. Delivered responsive, user-friendly interfaces and ensured cross-browser compatibility.',
    logo: '/logos/iice-logo.webp',
    logoColor: 'bg-gray-600',
  },
];

export const volunteerWork: VolunteerWork[] = [
  // {
  //   id: '1',
  //   position: 'Team Coordinator',
  //   organization: 'Green Peace',
  //   location: 'New York',
  //   startDate: 'January 2000',
  //   endDate: 'Current',
  //   type: 'Remote',
  //   description:
  //     'Greenpeace is a global campaigning network that acts to change attitudes and behaviour, to protect and conserve the environment and to promote peace. It comprises 26 independent national/regional Greenpeace organisations with presence in over 55 countries across Europe, Africa, the Americas, Asia and the Pacific, as well as a co-ordinating and supporting organisation, Greenpeace International.',
  //   logo: 'G',
  //   logoColor: 'bg-green-700',
  // },
];
