import Image from 'next/image';
import { FunctionComponent } from 'react';
import { Project } from '../constants/projects';

const ProjectTile: FunctionComponent<Project> = ({ title, role, description, link, video }) => {
  return (
    <a href={Boolean(link) ? link : ''}>
      <div className="rounded-sm w-52 h-52 md:w-72 md:h-72 hover:opacity-100 drop-shadow-md">
        <div className="absolute h-full w-full">
          <video autoPlay loop muted>
            <source src={video} />
          </video>
        </div>
        <div className="h-full w-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="p-4 h-5/6 md:h-4/6 w-5/6 bg-white dark:bg-gray2-light dark:text-white flex flex-col text-center justify-center rounded-xl drop-shadow-md">
            <h2 className="font-bold">{title}</h2>
            <h3 className="text-xs font-thin">{role}</h3>
            <p className="pt-2 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectTile;
