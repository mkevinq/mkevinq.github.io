import Image from 'next/image';
import { FunctionComponent, MouseEventHandler, RefObject } from 'react';

export type IconLink = {
  name: string;
  src: string | JSX.Element;
  href: string;
};

const IconLink: FunctionComponent<IconLink> = ({ name, src, href }) => {
  return (
    <a href={href}>
      <div className="relative flex items-center justify-center w-12 h-12 drop-shadow-md">
        {typeof src === 'string' ? <Image alt={name} src={src} layout="fill" /> : src}
      </div>
    </a>
  );
};

export default IconLink;
