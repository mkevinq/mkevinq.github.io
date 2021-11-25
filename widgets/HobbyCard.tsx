import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { Hobby } from '../constants/hobbies';
import { Project } from '../constants/projects';

const HobbyTile: FunctionComponent<Hobby> = ({ title, content, image }) => {
  const [isContentVisible, setContentVisibility] = useState(false);

  return (
    <div className="mx-auto w-5/6 md:w-5/6 m-2 cursor-pointer">
      <div
        className="text-white overflow-hidden rounded-xl drop-shadow-md"
        onClick={() => {
          setContentVisibility(!isContentVisible);
        }}
      >
        <div className="h-full w-full absolute flex items-center justify-between bg-black bg-opacity-20">
          <h2 className="m-4 md:m-8 md:text-4xl font-bold drop-shadow-md">{title}</h2>
          {isContentVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="m-4 md:m-8 text-white h-6 md:h-12 w-6 md:w-12 drop-shadow-sm"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="m-4 md:m-8 text-white h-6 md:h-12 w-6 md:w-12 drop-shadow-sm"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          )}
        </div>
        <video className="h-16 md:h-32 w-full object-cover" autoPlay loop muted>
          <source src={image} />
        </video>
      </div>
      <div
        className={
          (isContentVisible ? 'h-full p-4' : 'h-0') +
          ' m-2 overflow-hidden bg-white dark:bg-gray2-light dark:text-white text-xs md:text-base rounded-xl drop-shadow-md'
        }
      >
        {content.map((point, index) => (
          <p key={'hobby-' + title + '-' + index} className="m-2">
            {point}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HobbyTile;
