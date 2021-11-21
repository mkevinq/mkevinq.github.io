import Image from 'next/image';
import { FunctionComponent } from 'react';
import { Project } from '../constants/projects';

const ProjectTile: FunctionComponent<Project> = ({ title, role, description, link, video }) => {
  return (
    <div className="relative overflow-hidden rounded-sm w-44 h-44 md:w-72 md:h-72 drop-shadow-md">
      <a href={Boolean(link) ? link : ''}>
        <div className="absolute h-full w-full">
          <video autoPlay loop muted>
            <source src={video} />
          </video>
        </div>
        <div className="relative p-4 h-full w-full transition-opacity bg-blue-300 opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-70 flex flex-col text-center items-center justify-center">
          <h2 className="font-bold">{title}</h2>
          <h3 className="text-xs font-thin">{role}</h3>
          <p className="pt-2 text-sm">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectTile;
