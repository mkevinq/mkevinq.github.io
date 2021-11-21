export type Project = {
  title: string;
  role: string;
  description: string;
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'Prism65',
    role: 'PCB & Case Designer, Firmware Programmer',
    description: 'Fully-featured luxury custom mechanical keyboard',
    link: '',
    image: '/imgs/prism65.png',
  },
  {
    title: 'StudyBuddy',
    role: 'Full Stack Developer',
    description: 'Reinforcing better habits while working at home using computer vision',
    link: 'https://github.com/Cameron-Beaulieu/studybuddy',
    image: '/imgs/studybuddy.png',
  },
  {
    title: 'Budgy',
    role: 'Full Stack Developer',
    description: 'Budget tracking by scanning pictures of receipts',
    link: 'https://github.com/mkevinq/budgy',
    image: '/imgs/budgy.png',
  },
  {
    title: 'Reciplease',
    role: 'Full Stack Developer',
    description: 'Live recipe suggestions by showing ingredients on camera',
    link: 'https://github.com/mkevinq/reciplease',
    image: '/imgs/reciplease.png',
  },
  {
    title: 'Journey',
    role: 'Full Stack Developer',
    description: 'Personal journal with sentiment analysis for mental-health',
    link: 'https://github.com/mkevinq/journey',
    image: '/imgs/journey.png',
  },
  {
    title: 'Smart Windows',
    role: 'Full Stack Developer',
    description: 'IoT system that controls windows in your house',
    link: 'https://github.com/yebrandon/smart-windows',
    image: '/imgs/smart-windows.png',
  },
  {
    title: 'Mineral Madness',
    role: 'Lead Developer',
    description: 'Fighting game written entirely in Python',
    link: 'https://github.com/mkevinq/mineral-madness',
    image: '/imgs/mineral-madness.png',
  },
];

export default projects;
