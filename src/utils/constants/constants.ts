import { twMerge } from 'tailwind-merge';
export const STYLE_BUTTON = twMerge(
  'px-6 py-3',
  'bg-gray-800 font-bold text-white',
  'rounded-full shadow-lg',
  'hover:shadow-xl transition-shadow duration-700 ease-in-out',
  'transform hover:scale-105',
  'dark:bg-white dark:shadow-gray-8 dark:text-black'
);
