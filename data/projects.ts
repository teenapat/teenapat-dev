export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
}

export interface Technology {
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'deployment' | 'api' | 'tool';
  logo: string; // path to image in /public/logos/
  url: string; // link to official site
}

export const technologies: Technology[] = [
  {
    name: 'React',
    type: 'frontend',
    logo: '/logos/react.svg',
    url: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    type: 'frontend',
    logo: '/logos/next-js.png',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Vue.js',
    type: 'frontend',
    logo: '/logos/vue.svg',
    url: 'https://vuejs.org/',
  },
  {
    name: 'Angular',
    type: 'frontend',
    logo: '/logos/angular.svg',
    url: 'https://angular.dev/',
  },
  {
    name: 'TypeScript',
    type: 'frontend',
    logo: '/logos/typescript.png',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwind CSS',
    type: 'frontend',
    logo: '/logos/tailwindcss.webp',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Node.js',
    type: 'backend',
    logo: '/logos/nodejs.png',
    url: 'https://nodejs.org/',
  },
  {
    name: 'Express',
    type: 'backend',
    logo: '/logos/express.svg',
    url: 'https://expressjs.com/',
  },
  {
    name: 'NestJS',
    type: 'backend',
    logo: '/logos/nestjs.svg',
    url: 'https://nestjs.com/',
  },
  {
    name: 'Python',
    type: 'backend',
    logo: '/logos/python.svg',
    url: 'https://www.python.org/',
  },
  {
    name: 'Django',
    type: 'backend',
    logo: '/logos/django.svg',
    url: 'https://www.djangoproject.com/',
  },
  {
    name: 'PostgreSQL',
    type: 'database',
    logo: '/logos/postgresql.svg',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'MongoDB',
    type: 'database',
    logo: '/logos/mongodb.svg',
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'MySQL',
    type: 'database',
    logo: '/logos/mysql.svg',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'Supabase',
    type: 'database',
    logo: '/logos/supabase.svg',
    url: 'https://supabase.com/',
  },
  {
    name: 'Vercel',
    type: 'deployment',
    logo: '/logos/vercel.png',
    url: 'https://vercel.com/',
  },
  {
    name: 'Netlify',
    type: 'deployment',
    logo: '/logos/netlify.svg',
    url: 'https://www.netlify.com/',
  },
  {
    name: 'AWS',
    type: 'deployment',
    logo: '/logos/aws.svg',
    url: 'https://aws.amazon.com/',
  },
  {
    name: 'Docker',
    type: 'deployment',
    logo: '/logos/docker.svg',
    url: 'https://www.docker.com/',
  },
  {
    name: 'REST API',
    type: 'api',
    logo: '/logos/restapi.svg',
    url: 'https://restfulapi.net/',
  },
  {
    name: 'GraphQL',
    type: 'api',
    logo: '/logos/graphql.svg',
    url: 'https://graphql.org/',
  },
  {
    name: 'Stripe',
    type: 'api',
    logo: '/logos/stripe.svg',
    url: 'https://stripe.com/',
  },
  {
    name: 'OpenAI',
    type: 'api',
    logo: '/logos/openai.svg',
    url: 'https://openai.com/',
  },
  {
    name: 'Git',
    type: 'tool',
    logo: '/logos/git.svg',
    url: 'https://git-scm.com/',
  },
  {
    name: 'VS Code',
    type: 'tool',
    logo: '/logos/vscode.svg',
    url: 'https://code.visualstudio.com/',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'teenapat',
    description:
      'just a personal portfolio website to showcase my skills, experience, and projects. Built with Next.js and Tailwind CSS for a modern, responsive design.',
    technologies: [
      technologies.find((t) => t.name === 'Next.js')!,
      technologies.find((t) => t.name === 'TypeScript')!,
      technologies.find((t) => t.name === 'Tailwind CSS')!,
      technologies.find((t) => t.name === 'Node.js')!,
      technologies.find((t) => t.name === 'Vercel')!,
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/teenapat/teenapat-dev',
    status: 'in-progress',
    startDate: 'Sep 2025',
    endDate: 'Present',
  },
  // {
  //   id: '2',
  //   name: 'Task Management App',
  //   description:
  //     'A collaborative task management application with real-time updates, team collaboration features, file attachments, and progress tracking. Built with modern web technologies for optimal performance.',
  //   technologies: [
  //     technologies.find((t) => t.name === 'React')!,
  //     technologies.find((t) => t.name === 'Node.js')!,
  //     technologies.find((t) => t.name === 'Express')!,
  //     technologies.find((t) => t.name === 'MongoDB')!,
  //     technologies.find((t) => t.name === 'REST API')!,
  //     technologies.find((t) => t.name === 'AWS')!,
  //   ],
  //   liveUrl: 'https://taskmanager-app.netlify.app',
  //   githubUrl: 'https://github.com/username/task-manager',
  //   status: 'completed',
  //   startDate: 'Oct 2023',
  //   endDate: 'Dec 2023',
  // },
  // {
  //   id: '3',
  //   name: 'AI Chat Assistant',
  //   description:
  //     'An intelligent chat assistant powered by OpenAI GPT models. Features include conversation history, multiple chat rooms, file uploads, and custom AI personalities for different use cases.',
  //   technologies: [
  //     technologies.find((t) => t.name === 'Vue.js')!,
  //     technologies.find((t) => t.name === 'TypeScript')!,
  //     technologies.find((t) => t.name === 'Python')!,
  //     technologies.find((t) => t.name === 'Django')!,
  //     technologies.find((t) => t.name === 'OpenAI')!,
  //     technologies.find((t) => t.name === 'PostgreSQL')!,
  //     technologies.find((t) => t.name === 'Docker')!,
  //   ],
  //   liveUrl: 'https://ai-chat-assistant.com',
  //   status: 'in-progress',
  //   startDate: 'Apr 2024',
  // },
  // {
  //   id: '4',
  //   name: 'Real Estate Portal',
  //   description:
  //     'A comprehensive real estate platform with property listings, advanced search filters, virtual tours, mortgage calculator, and agent management system. Includes map integration and mobile-responsive design.',
  //   technologies: [
  //     technologies.find((t) => t.name === 'Angular')!,
  //     technologies.find((t) => t.name === 'TypeScript')!,
  //     technologies.find((t) => t.name === 'NestJS')!,
  //     technologies.find((t) => t.name === 'MySQL')!,
  //     technologies.find((t) => t.name === 'GraphQL')!,
  //     technologies.find((t) => t.name === 'AWS')!,
  //   ],
  //   githubUrl: 'https://github.com/username/real-estate-portal',
  //   status: 'completed',
  //   startDate: 'Jun 2023',
  //   endDate: 'Sep 2023',
  // },
  // {
  //   id: '5',
  //   name: 'Social Media Dashboard',
  //   description:
  //     'A comprehensive social media management dashboard that aggregates data from multiple platforms, provides analytics, scheduling tools, and engagement tracking for businesses and influencers.',
  //   technologies: [
  //     technologies.find((t) => t.name === 'React')!,
  //     technologies.find((t) => t.name === 'Next.js')!,
  //     technologies.find((t) => t.name === 'Supabase')!,
  //     technologies.find((t) => t.name === 'REST API')!,
  //     technologies.find((t) => t.name === 'Tailwind CSS')!,
  //     technologies.find((t) => t.name === 'Netlify')!,
  //   ],
  //   liveUrl: 'https://social-dashboard.netlify.app',
  //   status: 'planned',
  //   startDate: 'Jul 2024',
  // },
];
