import Image from 'next/image';
import { useState, FunctionComponent } from 'react';
import { Experience } from '../constants/experiences';

const ExperienceTile: FunctionComponent<Experience> = ({
  title,
  role,
  date,
  description,
  points,
  link,
  image,
}) => {
  return (
    <div
      className="rounded-md flex flex-col md:flex-row items-center bg-white dark:bg-gray2-light text-center w-11/12 md:w-9/12 mx-auto p-4 drop-shadow-xl"
      id="experience"
    >
      <div className="relative m-4 w-32 h-32 md:w-72 md:h-72">
        <Image alt="" layout="fill" src={image} />
      </div>
      <div className="my-4 flex-1 text-center">
        <div className="mx-4 md:text-left">
          <h1 className="text-2xl dark:text-white font-extrabold">{title}</h1>
          <p className="text-xs text-blue-400 font-small">{role}</p>
          <p className="text-xs text-gray-400 font-small">{date}</p>
        </div>
        <p className="m-4 text-left text-small dark:text-white font-small">{description}</p>
        <p className="m-4 text-left dark:text-white font-small">
          Some of my contributions include:
        </p>
        <ul className="mx-8 text-left dark:text-white list-disc">
          {points.map((point, index) => (
            <li key={'point-' + index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTile;
