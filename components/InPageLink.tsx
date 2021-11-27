import { FunctionComponent, MouseEventHandler, RefObject } from 'react';

export type ElementLink = {
  href: RefObject<HTMLElement>;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const ElementLink: FunctionComponent<ElementLink> = ({ href, onClick, children }) => {
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
      {children}
    </a>
  );
};

export default ElementLink;
