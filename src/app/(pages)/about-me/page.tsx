import type React from 'react';
import { twMerge } from 'tailwind-merge';

import { Footer, Header } from '../../components/index';
import { DescriptionAboutMe, ItemContact, ItemTechnicalSkill } from './index';
import { codeString, contacts, skills, softSkill } from './index';
import Image from 'next/image';

const AboutMe = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-base-fon transition-colors dark:bg-white">
      <Header />
      <main className="grid">
        <section
          className={twMerge(
            'grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4',
            'text-white m-auto w-4/5',
            'dark:text-black'
          )}
        >
          <div className="grid grid-cols-1">
            <Image
              src="foto-for-cv.JPG"
              alt="foto-for-cv"
              className="h-36 rounded-lg self-center"
              width={100}
              height={5}
            />
            <div className="grid grid-cols-1 gap-10 p-6 bg-primary-800 rounded-lg dark:bg-primary-100">
              <div>
                <h2 className="uppercase font-bold text-xl font-mono mb-2">
                  contacts
                </h2>
                <ul className="grid grid-cols-1 gap-2">
                  {contacts.map((contact, index) => (
                    <ItemContact
                      key={index}
                      imgSrc={contact.imgSrc}
                      imgAlt={contact.imgAlt}
                      href={contact.href}
                      text={contact.text}
                    />
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="uppercase font-bold text-xl font-mono mb-2">
                  soft Skills
                </h2>
                <ul className="grid grid-cols-1 gap-2">
                  {softSkill.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="uppercase font-bold text-xl mb-2">
                  technical skills
                </h2>
                <ul className="grid grid-cols-1 gap-2">
                  {skills.map((skill, index) => (
                    <ItemTechnicalSkill
                      key={index}
                      skill={skill.skill}
                      level={skill.level}
                    />
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="uppercase font-bold text-xl font-mono mb-2">
                  code example
                </h2>
                <pre className="bg-primary-700 dark:bg-blue-50">
                  <code>{codeString}</code>
                </pre>
              </div>
              <div>
                <h2 className="uppercase font-bold text-xl font-mono mb-2">
                  languages
                </h2>
                <ul className="grid grid-cols-1 gap-2">
                  <li className="flex flex-row gap-2 font-serif">
                    <h3>Russian</h3>
                    <p>native</p>
                  </li>
                  <li className="flex flex-row gap-2 font-serif">
                    <h3>English</h3>
                    <p>A2 and I continue to study further</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={twMerge(
              'grid grid-cols-1 gap-4 p-6 bg-primary-800 rounded-lg',
              'dark:bg-primary-50 dark:text-black'
            )}
          >
            <div className="bg-primary-700 p-6 rounded shadow h-40 dark:bg-blue-50">
              <h1 className="uppercase font-bold text-xl font-mono mb-2 text-white dark:text-black">
                Katsiaryna Dounar
              </h1>
              <p className="text-gray-600">RSSchool student</p>
            </div>
            <DescriptionAboutMe />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
