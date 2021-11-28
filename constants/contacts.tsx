import Gmail from '../public/gmail.svg';
import GitHub from '../public/github.svg';
import Devpost from '../public/devpost.svg';
import LinkedIn from '../public/linkedin.svg';

export type Contact = {
  title: string;
  link: string;
  image: string | JSX.Element;
};

const contacts: Contact[] = [
  {
    title: 'Gmail',
    link: 'mailto:mkevinquijalvo@gmail.com',
    image: <Gmail />,
  },
  {
    title: 'GitHub',
    link: 'https://github.com/mkevinq',
    image: <GitHub className="text-black dark:text-white" />,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marc-quijalvo/',
    image: <LinkedIn />,
  },
  {
    title: 'Devpost',
    link: 'https://devpost.com/mkevinquijalvo',
    image: <Devpost className="text-black dark:text-white" />,
  },
];

export default contacts;
