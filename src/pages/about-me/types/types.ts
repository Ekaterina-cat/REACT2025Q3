export const contacts = [
  {
    imgSrc: 'icon-email.png',
    imgAlt: 'Email icon',
    href: 'https://workspace.google.com/intl/ru/gmail/',
    text: 'ekaterinaaleks9@gmail.com',
  },
  {
    imgSrc: 'icon-github.png',
    imgAlt: 'GitHub icon',
    href: 'https://github.com/Ekaterina-cat',
    text: 'Ekaterina-cat',
  },
  {
    imgSrc: 'icon-discord.png',
    imgAlt: 'Discord icon',
    href: 'https://discord.com/channels/@me',
    text: '@EkaterinaCat#9858',
  },
  {
    imgSrc: 'icon-phone.png',
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
