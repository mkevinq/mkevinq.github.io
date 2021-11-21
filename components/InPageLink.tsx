import { FunctionComponent, MouseEventHandler, RefObject } from 'react';

export type ElementLink = {
  title: string;
  href: RefObject<HTMLElement>;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const ElementLink: FunctionComponent<ElementLink> = ({ title, href, onClick }) => {
  const moveToElement = () => {
    href.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      onClick={(event) => {
        moveToElement();
        onClick?.(event);
      }}
    >
      <h3 className="m-4 dark:text-white font-semibold cursor-pointer">{title}</h3>
    </a>
  );
};

export default ElementLink;
