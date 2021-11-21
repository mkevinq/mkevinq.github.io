import Image from 'next/image';
import { MouseEvent, MutableRefObject, useRef, useState } from 'react';
import ProjectTile from '../widgets/ProjectTile';
import projects from '../constants/projects';
import Menu from '../widgets/Menu';
import ElementLink from '../components/InPageLink';
import Toggle from '../components/Toggle';
import experience from '../constants/experiences';
import contacts from '../constants/contacts';
import ExperienceTile from '../widgets/ExperienceTile';
import IconLink from '../components/IconLink';

const Home = () => {
  const [dark, setDarkMode] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    value: boolean,
  ) => {
    setDarkMode(value);
  };

  return (
    <div className={dark ? 'dark' : ''}>
      <div className={'font-sans bg-gray-100 dark:bg-gray2-dark w-screen overflow-hidden'}>
        <Menu>
          <h1 className="m-4 dark:text-white font-bold leading-12 text-3xl">MKQ</h1>
          <hr className="border-gray-200 dark:border-gray2-lighter"></hr>
          <div className="flex flex-row items-center justify-between">
            <Toggle onToggle={toggleDarkMode} />
            <h3 className="text-gray-400 dark:text-gray2-full m-4">Dark Mode</h3>
          </div>
          <hr className="border-gray-200 dark:border-gray2-lighter"></hr>
          <ElementLink title="About" href={aboutRef} />
          <ElementLink title="Skills" href={skillsRef} />
          <ElementLink title="Projects" href={projectsRef} />
          <ElementLink title="Experience" href={experienceRef} />
          <ElementLink title="Contact" href={contactRef} />
        </Menu>

        <div
          className="flex flex-col md:flex-row-reverse md:justify-evenly h-screen items-center justify-center space-y-12"
          id="about"
        >
          <div className="rounded-md m-2 h-72 w-72 md:h-96 md:w-96 drop-shadow-xl">
            <Image src="/imgs/me.jpg" alt="Kevin" layout="fill" className="rounded-xl" />
          </div>
          <div className="text-center" id="landing">
            <h1
              className="mb-4 md:mb-8 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400 animate-hue font-extrabold"
              id="introduction-text-header"
            >
              Hi, I&apos;m Kevin!
            </h1>
            <p className="mt-4 md:mt-8 text-xl md:text-4xl dark:text-white font-medium">
              Nice to meet you!
            </p>
          </div>
        </div>

        <div
          className="rounded-md bg-white dark:bg-gray2-light text-left w-11/12 md:w-9/12 mx-auto my-20 p-4 drop-shadow-xl"
          ref={aboutRef}
          id="about"
        >
          <h1 className="m-4 text-3xl dark:text-white font-extrabold">Who am I?</h1>
          <p className="m-4 text-small text-blue-400 font-small">
            A software developer, a tech enthusiast, a mechanical keyboard nerd... there are lots of
            things you can call me.
          </p>
          <p className="m-4 text-small dark:text-white font-small">
            I&apos;m constantly learning new things, and evolving with the world. Innovation excites
            me, and I&apos;m always looking for new tools to play around with.
          </p>
          <p className="m-4 text-small dark:text-white font-small">
            From web development to embedded systems, computer-aided design and AI, I&apos;ve
            experimented with many avenues of technology to build things that I find exciting.
          </p>
          <p className="m-4 text-small dark:text-white font-small">
            In this website, you can find more information about my previous experiences and work. I
            hope you enjoy your stay!
          </p>
        </div>

        <div className="text-center" ref={projectsRef} id="project-section">
          <h1 className="m-8 text-3xl dark:text-white font-extrabold drop-shadow-md">
            Past Projects
          </h1>
          <div className="flex flex-wrap gap-4 place-content-center" id="projects">
            {projects.map(({ title, role, description, video, link }, index) => (
              <ProjectTile
                key={'project-' + index}
                title={title}
                role={role}
                description={description}
                video={video}
                link={link}
              />
            ))}
          </div>
        </div>

        <div ref={experienceRef} className="my-20" id="experience">
          <h1 className="m-8 text-3xl dark:text-white text-center font-extrabold drop-shadow-md">
            Experience
          </h1>
          {experience.map(({ title, role, date, description, points, link, image }, index) => (
            <div key={'experience-' + index} className="my-4">
              <ExperienceTile
                title={title}
                role={role}
                date={date}
                description={description}
                points={points}
                link={link}
                image={image}
              />
            </div>
          ))}
        </div>

        <div
          ref={contactRef}
          className="text-center dark:text-white rounded-md bg-white dark:bg-gray2-light text-left w-11/12 md:w-9/12 mx-auto my-20 p-4 drop-shadow-xl"
          id="contact"
        >
          <h2 className="m-4 text-2xl font-bold">Want to get in contact with me?</h2>
          <h3 className="m-4 text-lg">Find me using any of the outlets below!</h3>
          <hr className="m-4 border-gray-200 dark:border-gray2-lighter"></hr>
          <div className="flex flex-row flex-wrap w-full justify-around">
            {contacts.map(({ title, link, image }, index) => (
              <div key={'contact-' + index} className="m-4">
                <IconLink name={title} src={image} href={link} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 mb-12 text-center text-gray-400 dark:text-gray2-lightest">
          <p>This website was built from scratch using Tailwind CSS and Next.js.</p>
          <p>© 2021 Marc Kevin Quijalvo</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
