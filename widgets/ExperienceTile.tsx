import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { FunctionComponent } from 'react';

export type ExperienceProps = {
  title: string;
  role: string;
  startDate: Date;
  endDate: Date;
  description: string;
  details: string;
  image: string;
};

const ExperienceTile: FunctionComponent<ExperienceProps> = ({
  title,
  role,
  startDate,
  endDate,
  description,
  details,
  image,
}) => {
  const startTime = startDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  const endTime = endDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  const monthDifference = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24 / 30,
  );

  return (
    <div
      className="rounded-md flex flex-col md:flex-row items-center bg-white dark:bg-gray2-light text-center text-sm md:text-base dark:text-white w-11/12 md:w-9/12 mx-auto p-4 drop-shadow-xl"
      id="experience"
    >
      <div className="relative m-4 w-32 h-32 md:w-72 md:h-72">
        <Image alt="" layout="fill" src={image} />
      </div>
      <div className="my-4 flex-1 text-center">
        <div className="mx-4 md:text-left">
          <h1 className="text-2xl font-extrabold">{title}</h1>
          <p className="text-xs text-blue-400">{role}</p>
          <p className="text-xs text-gray-400">
            {startTime} - {endTime} ({monthDifference} months)
          </p>
        </div>
        <p className="m-4 text-left">{description}</p>
        <ReactMarkdown
          components={{
            em: ({ node, ...props }) => <span className="text-blue-400" {...props} />,
            p: ({ node, ...props }) => <p className="m-4 text-left" {...props} />,
            ul: ({ node, ordered, ...props }) => (
              <ul className="mx-8 text-left list-disc" {...props} />
            ),
          }}
        >
          {details}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ExperienceTile;
