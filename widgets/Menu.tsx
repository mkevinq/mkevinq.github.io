import Image from 'next/image';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="right-0 absolute z-20 cursor-pointer text-gray-400 dark:text-gray-100 m-4 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toggleMenuVisibility}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        {children}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={
          (visible ? 'opacity-0' : 'opacity-100') +
          ' transition-opacity z-10 text-gray-400 dark:text-gray-100 fixed cursor-pointer m-4 h-12 w-12'
        }
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={toggleMenuVisibility}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

export default Menu;
