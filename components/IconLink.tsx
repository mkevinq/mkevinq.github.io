import Image from 'next/image';
import { FunctionComponent } from 'react';
import SVG from 'react-inlinesvg';

export type IconLink = {
  name: string;
  src: string;
  href: string;
  ext: string;
};

const IconLink: FunctionComponent<IconLink> = ({ name, src, href, ext }) => {
  return (
    <a href={href}>
      {ext === '.svg' ? (
        <SVG
          className="h-full w-full"
          src={src}
          onError={(e) => {
            console.log(e);
          }}
          uniquifyIDs={true}
        />
      ) : (
        <Image className="image" alt={name} src={src} layout="fill" />
      )}
    </a>
  );
};

export default IconLink;
