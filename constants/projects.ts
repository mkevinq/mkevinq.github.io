export type Project = {
  title: string;
  role: string;
  description: string;
  link: string;
  video: string;
};

const projects: Project[] = [
  {
    title: 'Prism65',
    role: 'PCB & Case Designer, Firmware Programmer',
    description: 'Fully-featured luxury custom mechanical keyboard',
    link: '',
    video: '/imgs/prism65.mp4',
  },
  {
    title: 'StudyBuddy',
    role: 'Full Stack Developer',
    description: 'Reinforcing better habits while working at home using computer vision',
    link: 'https://github.com/Cameron-Beaulieu/studybuddy',
    video: '/imgs/studybuddy.mp4',
  },
  {
    title: 'Budgy',
    role: 'Full Stack Developer',
    description: 'Budget tracking by scanning pictures of receipts',
    link: 'https://github.com/mkevinq/budgy',
    video: '/imgs/budgy.mp4',
  },
  {
    title: 'Reciplease',
    role: 'Full Stack Developer',
    description: 'Live recipe suggestions by showing ingredients on camera',
    link: 'https://github.com/mkevinq/reciplease',
    video: '/imgs/reciplease.mp4',
  },
  {
    title: 'Journey',
    role: 'Full Stack Developer',
    description: 'Personal journal with sentiment analysis for mental-health',
    link: 'https://github.com/mkevinq/journey',
    video: '/imgs/journey.png',
  },
  {
    title: 'Smart Windows',
    role: 'Full Stack Developer',
    description: 'IoT system that controls windows in your house',
    link: 'https://github.com/yebrandon/smart-windows',
    video: '/imgs/smart-windows.mp4',
  },
  {
    title: 'Mineral Madness',
    role: 'Lead Developer',
    description: 'Fighting game written entirely in Python',
    link: 'https://github.com/mkevinq/mineral-madness',
    video: '/imgs/mineralmadness.mp4',
  },
];

export default projects;