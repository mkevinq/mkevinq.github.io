import { useState, FunctionComponent, MouseEvent } from 'react';

export type ToggleProps = {
  value: boolean;
  onToggle: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, value: boolean) => void;
};

const Toggle: FunctionComponent<ToggleProps> = ({ value, onToggle }) => {
  return (
    <button
      className="m-4 flex items-center px-0.5 border-2 border-gray-300 dark:border-gray2-lightest rounded-full w-10 h-6"
      role="switch"
      aria-checked="false"
      onClick={(event) => {
        onToggle(event, !value);
      }}
    >
      <div
        className={
          (value ? 'translate-x-full' : '') +
          ' absolute transition rounded-full bg-gray-300 dark:bg-gray2-lightest w-4 h-4'
        }
      ></div>
    </button>
  );
};

export default Toggle;
