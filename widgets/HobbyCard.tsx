import ReactMarkdown from 'react-markdown';
import DownChevron from '../public/chevron-down.svg';
import UpChevron from '../public/chevron-up.svg';
import { FunctionComponent, useState } from 'react';

export type HobbyProps = {
  title: string;
  content: string;
  image: string;
  poster: string;
};

const HobbyTile: FunctionComponent<HobbyProps> = ({ title, content, image, poster }) => {
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
            <div className="m-4 md:m-8 text-white h-6 md:h-12 w-6 md:w-12 drop-shadow-sm">
              <UpChevron />
            </div>
          ) : (
            <div className="m-4 md:m-8 text-white h-6 md:h-12 w-6 md:w-12 drop-shadow-sm">
              <DownChevron />
            </div>
          )}
        </div>
        <video
          className="lazy h-16 md:h-32 w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
        >
          <source data-src={image} />
        </video>
      </div>
      <div
        className={
          (isContentVisible ? 'h-full p-4' : 'h-0') +
          ' m-2 overflow-hidden bg-white dark:bg-gray2-light dark:text-white text-xs md:text-base rounded-xl drop-shadow-md'
        }
      >
        <ReactMarkdown
          components={{
            em: ({ node, ...props }) => <span className="text-blue-400" {...props} />,
            p: ({ node, ...props }) => <p className="m-2" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default HobbyTile;
