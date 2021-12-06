import JavaScript from '../public/javascript.svg';
import Java from '../public/java.svg';
import React from '../public/react.svg';
import NextJS from '../public/nextjs.svg';
import NodeJS from '../public/nodejs.svg';
import NestJS from '../public/nestjs.svg';
import Sass from '../public/sass.svg';
import MongoDB from '../public/mongodb.svg';
import ElasticSearch from '../public/elasticsearch.svg';
import MySQL from '../public/mysql.svg';
import TailwindCSS from '../public/tailwindcss.svg';
import TensorFlow from '../public/tensorflow.svg';
import Bash from '../public/bash.svg';
import Docker from '../public/docker.svg';
import Kubernetes from '../public/kubernetes.svg';
import Terraform from '../public/terraform.svg';
import C from '../public/c.svg';
import CSharp from '../public/c-sharp.svg';
import Dotnet from '../public/dotnet.svg';
import Linux from '../public/linux.svg';
import Python from '../public/python.svg';
import Flask from '../public/flask.svg';
import Firebase from '../public/firebase.svg';
import Flutter from '../public/flutter.svg';
import Go from '../public/go.svg';
import GitHub from '../public/github.svg';
import Git from '../public/git.svg';
import TypeScript from '../public/typescript.svg';
import GoogleCloud from '../public/google-cloud.svg';
import RabbitMQ from '../public/rabbitmq.svg';
import Unity from '../public/unity.svg';

export const priorityHeightMap = {
  1: 'h-24',
  2: 'h-16',
  3: 'h-12',
};

export type Skill = {
  name: string;
  image: string | JSX.Element;
  link: string;
  priority: keyof typeof priorityHeightMap;
};

const skills: Skill[] = [
  {
    name: 'JavaScript',
    image: <JavaScript className="h-full" />,
    link: 'https://en.wikipedia.org/wiki/JavaScript',
    priority: 1,
  },
  {
    name: 'TypeScript',
    image: <TypeScript className="h-full" />,
    link: 'https://www.typescriptlang.org/',
    priority: 1,
  },
  {
    name: 'C',
    image: <C className="h-full" />,
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    priority: 1,
  },
  {
    name: 'C#',
    image: <CSharp className="h-full" />,
    link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
    priority: 1,
  },
  {
    name: 'Go',
    image: <Go className="h-4/6" />,
    link: 'https://go.dev/',
    priority: 1,
  },
  {
    name: 'Bash',
    image: <Bash className="h-full" />,
    link: '',
    priority: 2,
  },
  {
    name: 'Python',
    image: <Python className="h-full" />,
    link: 'https://www.python.org/',
    priority: 1,
  },
  {
    name: 'Java',
    image: <Java className="h-full" />,
    link: 'https://www.java.com/',
    priority: 1,
  },
  {
    name: 'Linux',
    image: <Linux className="h-full" />,
    link: 'https://en.wikipedia.org/wiki/Linux',
    priority: 1,
  },
  {
    name: 'Git',
    image: <Git className="h-full" />,
    link: 'https://git-scm.com/',
    priority: 2,
  },
  {
    name: 'GitHub',
    image: <GitHub className="h-full" />,
    link: 'https://github.com/',
    priority: 3,
  },
  {
    name: 'Google Cloud',
    image: <GoogleCloud className="h-full" />,
    link: 'https://cloud.google.com/',
    priority: 2,
  },
  {
    name: 'Firebase',
    image: <Firebase className="h-full" />,
    link: 'https://firebase.google.com/',
    priority: 3,
  },
  {
    name: 'Docker',
    image: <Docker className="h-full" />,
    link: 'https://www.docker.com/',
    priority: 2,
  },
  {
    name: 'Kubernetes',
    image: <Kubernetes className="h-full" />,
    link: 'https://kubernetes.io/',
    priority: 2,
  },
  {
    name: 'Terraform',
    image: <Terraform className="h-full" />,
    link: 'https://www.terraform.io/',
    priority: 2,
  },
  {
    name: 'React',
    image: <React className="h-full" />,
    link: 'https://reactjs.org/',
    priority: 2,
  },
  {
    name: 'Next.js',
    image: <NextJS className="h-full text-black dark:text-white" />,
    link: 'https://nextjs.org/',
    priority: 2,
  },
  {
    name: 'Tailwind CSS',
    image: <TailwindCSS className="h-full" />,
    link: 'https://tailwindcss.com/',
    priority: 3,
  },
  {
    name: 'SASS',
    image: <Sass className="h-full" />,
    link: 'https://sass-lang.com/',
    priority: 3,
  },
  {
    name: 'Flask',
    image: <Flask className="h-full text-black dark:text-white" />,
    link: 'https://palletsprojects.com/p/flask/',
    priority: 3,
  },
  {
    name: '.NET',
    image: <Dotnet className="h-full text-black dark:text-white" />,
    link: 'https://dotnet.microsoft.com/',
    priority: 3,
  },
  {
    name: 'Node.js',
    image: <NodeJS className="h-full" />,
    link: 'https://nodejs.org/',
    priority: 1,
  },
  {
    name: 'NestJS',
    image: <NestJS className="h-full" />,
    link: 'https://nestjs.com/',
    priority: 2,
  },
  {
    name: 'MongoDB',
    image: <MongoDB className="h-full" />,
    link: 'https://www.mongodb.com/',
    priority: 2,
  },
  {
    name: 'MySQL',
    image: <MySQL className="h-full" />,
    link: 'https://www.mysql.com/',
    priority: 3,
  },
  {
    name: 'ElasticSearch',
    image: <ElasticSearch className="h-full" />,
    link: 'https://www.elastic.co/',
    priority: 3,
  },
  {
    name: 'RabbitMQ',
    image: <RabbitMQ className="h-full" />,
    link: 'https://www.rabbitmq.com/',
    priority: 3,
  },
  {
    name: 'TensorFlow',
    image: <TensorFlow className="h-full" />,
    link: 'https://www.tensorflow.org/',
    priority: 3,
  },
  {
    name: 'Unity',
    image: <Unity className="h-full" />,
    link: 'https://unity.com/',
    priority: 3,
  },
  {
    name: 'Flutter',
    image: <Flutter className="h-full" />,
    link: 'https://flutter.dev/',
    priority: 2,
  },
];

export default skills;
