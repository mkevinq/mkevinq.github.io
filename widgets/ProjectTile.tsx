import { FunctionComponent } from 'react';

export type ProjectProps = {
  title: string;
  role: string;
  description: string;
  link: string;
  video: string;
  poster: string;
};

const ProjectTile: FunctionComponent<ProjectProps> = ({
  title,
  role,
  description,
  link,
  video,
  poster,
}) => {
  return (
    <a href={Boolean(link) ? link : ''}>
      <div className="rounded-sm w-44 h-44 xl:w-60 xl:h-60 hover:opacity-100 drop-shadow-md">
        <video
          className="lazy absolute h-full w-full"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
        >
          <source data-src={video} />
        </video>
        <div className="h-full w-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="p-4 h-5/6 md:h-4/6 w-5/6 bg-white dark:bg-gray2-light dark:text-white flex flex-col text-center justify-center drop-shadow-md">
            <h2 className="font-bold">{title}</h2>
            <h3 className="text-xs font-thin">{role}</h3>
            <p className="mt-2 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectTile;
