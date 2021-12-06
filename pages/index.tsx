import Image from 'next/image';
import Head from 'next/head';
import Phone from '../public/phone.svg';
import DownArrow from '../public/down-arrow.svg';
import { MouseEvent, useRef, useState, useEffect, createRef } from 'react';
import ProjectTile from '../widgets/ProjectTile';
import projects from '../constants/projects';
import Menu from '../widgets/Menu';
import ElementLink from '../components/InPageLink';
import Toggle from '../components/Toggle';
import experience from '../constants/experiences';
import ExperienceTile from '../widgets/ExperienceTile';
import contacts from '../constants/contacts';
import skills, { Skill, priorityHeightMap } from '../constants/skills';
import IconLink from '../components/IconLink';
import hobbies from '../constants/hobbies';
import HobbyTile from '../widgets/HobbyCard';
import { isInView } from '../utils/in-view';
import lozad from 'lozad';

const Home = () => {
  const [dark, setDarkMode] = useState(false);
  const [scrollIndicatorTriggered, showScrollIndicator] = useState(false);
  const [contactsVisible, setContactsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillRowRefs = useRef(
    Array.from({ length: Object.keys(priorityHeightMap).length }, () =>
      createRef<HTMLDivElement>(),
    ),
  );
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const isDragged = useRef(false);
  const mousePos = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Show scroll indicator after 2 seconds
    setTimeout(() => {
      if (window.scrollY === 0) {
        showScrollIndicator(true);
      }
    }, 2000);

    window.addEventListener('scroll', () => {
      if (window.scrollY !== 0) {
        showScrollIndicator(false);
      }
    });
  }, []);

  // Let the theme setting persist between page loads
  useEffect(() => {
    setDarkMode(Boolean(localStorage.getItem('darkMode')));
  }, []);

  // Check if the contacts section is in view
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (contactRef.current && isInView(contactRef.current)) {
        setContactsVisible(true);
      } else if (contactRef.current && !isInView(contactRef.current)) {
        setContactsVisible(false);
      }
    });
  }, []);

  // Drag scrolling
  useEffect(() => {
    skillRowRefs.current?.forEach(({ current }) => {
      if (current) {
        const mouseDownHandler = (event: globalThis.MouseEvent) => {
          mousePos.current = {
            x: event.clientX,
            y: event.clientY,
          };
          current.style.cursor = 'move';

          current.addEventListener('mousemove', mouseMoveHandler);
          document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = (event: globalThis.MouseEvent) => {
          // Prevents link from being clicked
          if (isDragged.current === false) {
            current.addEventListener('click', clickHandler, true);

            isDragged.current = true;
          }

          current.scrollBy({
            left: mousePos.current.x - event.clientX,
          });
          mousePos.current = {
            x: event.clientX,
            y: event.clientY,
          };
        };

        const mouseUpHandler = (event: globalThis.MouseEvent) => {
          if (!isDragged.current) {
            current.removeEventListener('click', clickHandler, true);
          }
          isDragged.current = false;
          current.removeEventListener('mousemove', mouseMoveHandler);
          document.removeEventListener('mouseup', mouseUpHandler);
          current.style.cursor = 'pointer';
        };

        const clickHandler = (event: globalThis.MouseEvent) => {
          event.preventDefault();
        };

        current.addEventListener('mousedown', mouseDownHandler);
      }
    });
  }, [skillRowRefs]);

  // Lazy loading video
  useEffect(() => {
    const observer = lozad(document.querySelectorAll('video.lazy'));
    observer.observe();
  }, []);

  const toggleDarkMode = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    value: boolean,
  ) => {
    localStorage.setItem('darkMode', value ? 'true' : '');
    setDarkMode(value);
  };

  return (
    <div className={dark ? 'dark' : ''}>
      <div className={'font-sans bg-gray-100 dark:bg-gray2-dark w-screen overflow-hidden'}>
        <Head>
          <title>Marc Kevin Quijalvo</title>
        </Head>
        <Menu>
          <h1 className="m-4 dark:text-white font-bold leading-10 text-3xl">MKQ</h1>
          <hr className="border-gray-200 dark:border-gray2-lighter"></hr>
          <div className="flex flex-row items-center justify-between">
            <Toggle value={dark} onToggle={toggleDarkMode} />
            <h3 className="text-gray-400 dark:text-gray2-full m-4">Dark Mode</h3>
          </div>
          <hr className="border-gray-200 dark:border-gray2-lighter"></hr>
          <ElementLink href={aboutRef}>
            <h3 className="m-4 dark:text-white font-semibold cursor-pointer">About</h3>
          </ElementLink>
          <ElementLink href={skillsRef}>
            <h3 className="m-4 dark:text-white font-semibold cursor-pointer">Skills</h3>
          </ElementLink>
          <ElementLink href={projectsRef}>
            <h3 className="m-4 dark:text-white font-semibold cursor-pointer">Projects</h3>
          </ElementLink>
          <ElementLink href={experienceRef}>
            <h3 className="m-4 dark:text-white font-semibold cursor-pointer">Experience</h3>
          </ElementLink>
          <ElementLink href={hobbiesRef}>
            <h3 className="m-4 dark:text-white font-semibold cursor-pointer">Hobbies</h3>
          </ElementLink>
          <ElementLink href={contactRef}>
            <h3 className="m-4 dark:text-white font-semibold cursor-pointer">Contact</h3>
          </ElementLink>
        </Menu>

        <div
          className={
            (contactsVisible ? 'translate-x-full' : '') +
            ' transition-all z-10 right-0 fixed text-gray-400 dark:text-gray-100 cursor-pointer'
          }
        >
          <ElementLink href={contactRef}>
            <div className="m-4 h-10 w-10">
              <Phone />
            </div>
          </ElementLink>
        </div>

        <div
          className="flex flex-col md:flex-row-reverse md:justify-evenly h-screen items-center justify-center space-y-12"
          id="about"
        >
          <div className="m-2 h-72 w-72 md:h-96 md:w-96 drop-shadow-xl">
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-green-400 animate-huewiggle h-full w-full"></div>
            <Image src="/imgs/me.jpg" alt="Kevin" layout="fill" className="rounded-xl" />
          </div>
          <div className="text-center drop-shadow-md" id="landing">
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
          <div
            className={
              (scrollIndicatorTriggered ? 'opacity-100' : 'opacity-0') +
              ' absolute h-6 w-6 bottom-10 text-gray-400 dark:text-gray-100 animate-bounce transition-opacity'
            }
          >
            <DownArrow />
          </div>
        </div>

        <div
          className="rounded-md bg-white text-sm md:text-base dark:bg-gray2-light dark:text-white text-left w-11/12 md:w-9/12 mx-auto my-20 p-4 drop-shadow-xl"
          ref={aboutRef}
          id="about"
        >
          <h1 className="m-4 text-3xl font-extrabold">Who am I?</h1>
          <p className="m-4 text-blue-400">
            A software developer, a tech enthusiast, a mechanical keyboard nerd... there are lots of
            things you can call me.
          </p>
          <p className="m-4">
            I&apos;m constantly learning new things, and evolving with the world. Innovation excites
            me, and I&apos;m always looking for new tools to play around with.
          </p>
          <p className="m-4">
            From web development to embedded systems, computer-aided design and AI, I experiment
            with many avenues of technology to build things that I find exciting.
          </p>
          <p className="m-4">
            In this website, you can find more information about my previous experiences and work. I
            hope you enjoy your stay!
          </p>
        </div>

        <div className="my-20 text-center" ref={skillsRef} id="skills-section">
          <h1 className="z-10 m-8 text-3xl dark:text-white font-extrabold drop-shadow-md">
            Skills
          </h1>
          <div className="flex flex-col gap-12" id="skills">
            {Object.entries(
              skills.reduce(
                (
                  acc: Record<number, { index: number; skill: Skill }[]>,
                  skill: Skill,
                  index: number,
                ) => {
                  const { priority } = skill;

                  if (!acc[priority]) {
                    acc[priority] = [];
                  }

                  acc[skill.priority].push({ index, skill });

                  return acc;
                },
                {},
              ),
            ).map(([priority, skills], index) => {
              return (
                <div
                  className="overflow-x-auto mx-auto min-w-0 max-w-max w-screen no-scrollbar"
                  key={'skillrow-' + priority}
                  ref={skillRowRefs.current?.[index]}
                >
                  <div
                    className={
                      priorityHeightMap[parseInt(priority) as keyof typeof priorityHeightMap] +
                      ' flex flex-row mb-4 w-full'
                    }
                  >
                    {skills.map(({ index, skill: { name, link, image } }, skillNum) => (
                      <div key={'skill-' + skillNum} className="px-4">
                        <IconLink name={name} href={link} src={image} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-20 text-center" ref={projectsRef} id="project-section">
          <h1 className="m-8 text-3xl dark:text-white font-extrabold drop-shadow-md">
            Past Projects
          </h1>
          <div className="flex flex-wrap gap-4 place-content-center" id="projects">
            {projects.map(({ title, role, description, video, link, poster }, index) => (
              <ProjectTile
                key={'project-' + index}
                title={title}
                role={role}
                description={description}
                video={video}
                link={link}
                poster={poster}
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

        <div ref={hobbiesRef} className="my-20" id="hobbies">
          <h1 className="m-8 text-3xl dark:text-white text-center font-extrabold drop-shadow-md">
            Hobbies
          </h1>
          {hobbies.map(({ title, content, image }, index) => (
            <HobbyTile key={'hobby-' + index} title={title} content={content} image={image} />
          ))}
        </div>

        <div
          ref={contactRef}
          className="text-center dark:text-white rounded-md bg-white dark:bg-gray2-light w-11/12 md:w-9/12 mx-auto my-20 p-4 drop-shadow-xl"
          id="contact"
        >
          <h2 className="m-4 text-2xl font-bold">Want to get in contact with me?</h2>
          <h3 className="m-4 text-lg">Find me using any of the outlets below!</h3>
          <hr className="m-4 border-gray-200 dark:border-gray2-lighter"></hr>
          <div className="flex flex-row flex-wrap w-full justify-around text-gray-600 dark:text-gray-100">
            {contacts.map(({ title, link, image }, index) => (
              <div
                key={'contact-' + index}
                className="m-4 opacity-80 hover:opacity-100 w-12 h-12 transition-opacity"
              >
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
