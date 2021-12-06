export type Project = {
  title: string;
  role: string;
  description: string;
  link: string;
  poster: string;
  video: string;
};

const projects: Project[] = [
  {
    title: 'Prism65',
    role: 'PCB & Case Designer, Firmware Programmer',
    description: 'Fully-featured luxury custom mechanical keyboard',
    // LinkedIn link for now, because there is no other place with information
    link: 'https://www.linkedin.com/in/marc-quijalvo/',
    video: '/imgs/prism65.mp4',
    poster: '/imgs/prism65.png',
  },
  {
    title: 'StudyBuddy',
    role: 'Full Stack Developer',
    description: 'Reinforcing better habits while working at home using computer vision',
    link: 'https://github.com/Cameron-Beaulieu/studybuddy',
    video: '/imgs/studybuddy.mp4',
    poster: '/imgs/studybuddy.png',
  },
  {
    title: 'Budgy',
    role: 'Full Stack Developer',
    description: 'Budget tracking by scanning pictures of receipts',
    link: 'https://github.com/mkevinq/budgy',
    video: '/imgs/budgy.mp4',
    poster: '/imgs/budgy.png',
  },
  {
    title: 'Reciplease',
    role: 'Full Stack Developer',
    description: 'Live recipe suggestions by showing ingredients on camera',
    link: 'https://github.com/mkevinq/reciplease',
    video: '/imgs/reciplease.mp4',
    poster: '/imgs/reciplease.png',
  },
  {
    title: 'Journey',
    role: 'Full Stack Developer',
    description: 'Personal journal with sentiment analysis for mental-health',
    link: 'https://github.com/mkevinq/journey',
    video: '/imgs/journey.mp4',
    poster: '/imgs/journey.png',
  },
  {
    title: 'Smart Windows',
    role: 'Full Stack Developer',
    description: 'IoT system that controls windows in your house',
    link: 'https://github.com/yebrandon/smart-windows',
    video: '/imgs/smart-windows.mp4',
    poster: '/imgs/smart-windows.png',
  },
  {
    title: 'Mineral Madness',
    role: 'Lead Developer',
    description: 'Fighting game written entirely in Python',
    link: 'https://github.com/mkevinq/mineral-madness',
    video: '/imgs/mineralmadness.mp4',
    poster: '/imgs/mineral-madness.png',
  },
];

export default projects;
