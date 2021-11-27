import Image from 'next/image';
import Hamburger from '../public/hamburger.svg';
import X from '../public/x.svg';

import { useState, FunctionComponent, useRef } from 'react';

const Menu: FunctionComponent = ({ children }) => {
  const [visible, setVisibility] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenuVisibility = () => {
    setVisibility(!visible);
  };

  return (
    <div ref={menuRef} className="absolute h-full w-full">
      <div
        className={
          (visible ? ' ' : '-translate-x-full') +
          ' z-10 fixed left-0 transition-transform rounded-tr-xl rounded-br-xl w-7/12 md:w-3/12 h-screen bg-white dark:bg-gray2-light drop-shadow-lg'
        }
      >
        <div
          className="right-0 absolute z-20 cursor-pointer text-gray-400 dark:text-gray-100 m-4 h-10 w-10"
          onClick={toggleMenuVisibility}
        >
          <X />
        </div>
        {children}
      </div>
      <div
        className={
          (visible ? 'opacity-0 z-0' : 'opacity-100') +
          ' transition-opacity z-10 text-gray-400 dark:text-gray-100 fixed cursor-pointer m-4 h-10 w-10'
        }
        onClick={toggleMenuVisibility}
      >
        <Hamburger />
      </div>
    </div>
  );
};

export default Menu;
