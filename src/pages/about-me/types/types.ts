export const contacts = [
  {
    imgSrc: 'path/to/image1.jpg',
    imgAlt: 'Email icon',
    href: 'https://workspace.google.com/intl/ru/gmail/',
    text: 'ekaterinaaleks9@gmail.com',
  },
  {
    imgSrc: 'path/to/image2.jpg',
    imgAlt: 'GitHub icon',
    href: 'https://github.com/Ekaterina-cat',
    text: 'Ekaterina-cat',
  },
  {
    imgSrc: 'path/to/image3.jpg',
    imgAlt: 'Discord icon',
    href: 'https://discord.com/channels/@me',
    text: '@EkaterinaCat#9858',
  },
  {
    imgSrc: 'path/to/image4.jpg',
    imgAlt: 'Phone icon',
    href: 'tel:+375298824888',
    text: '+375 29 882-48-88',
  },
];

export const skills = [
  { skill: 'HTML, CSS', level: 'Advanced' },
  { skill: 'JavaScript', level: 'Intermediate' },
  { skill: 'TypeScript', level: 'Beginner' },
  { skill: 'React', level: 'Beginner' },
  { skill: 'Tailwind CSS', level: 'Beginner' },
];

export const softSkill = [
  'Communication',
  'Adaptability',
  'Teamwork',
  'Ethics and Professionalism',
];

export const codeString = `function solution(str, ending) {
  const n = ending.length;
  const arg = str.slice(str.length - n);
  if (arg === ending) {
    return true;
  } else {
    return false;
  }
}`;
