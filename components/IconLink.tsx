import Image from 'next/image';
import { FunctionComponent, MouseEventHandler, RefObject } from 'react';

export type IconLink = {
  name: string;
  src: string;
  href: string;
};

const IconLink: FunctionComponent<IconLink> = ({ name, src, href }) => {
  return (
    <a href={href}>
      <div className="relative w-12 h-12">
        <Image src={src} layout="fill" />
      </div>
    </a>
  );
};

export default IconLink;
