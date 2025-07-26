import type React from 'react';

import { DescriptionAboutMe, ItemContact, ItemTechnicalSkill } from '../';
import { codeString, contacts, skills, softSkill } from './types/types';

const AboutMe = (): React.JSX.Element => {
  return (
    <>
      <section className="flex flex-row justify-center m-auto w-8/12 gap-3.5">
        <div className="flex flex-col gap-3.5">
          <img
            src="foto-for-cv.JPG"
            alt="foto-for-cv"
            className="h-36 rounded-lg self-center"
          />
          <div>
            <div>
              <h2 className="uppercase font-bold text-xl font-mono">
                contacts
              </h2>
              <ul className="flex flex-col gap-3">
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
              <h2 className="uppercase font-bold text-xl font-mono">
                soft Skills
              </h2>
              <ul>
                {softSkill.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="uppercase font-bold text-xl">technical skills</h2>
              <ul>
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
              <h2 className="uppercase font-bold text-xl font-mono">
                code example
              </h2>
              <pre>
                <code>{codeString}</code>
              </pre>
            </div>
            <div>
              <h2 className="uppercase font-bold text-xl font-mono">
                languages
              </h2>
              <ul>
                <li className="font-serif">
                  <h3>Russian</h3>
                  <p>native</p>
                </li>
                <li className="font-serif">
                  <h3>English</h3>
                  <p>A2 and I continue to study further</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="h-36">
            <h1 className="uppercase font-bold text-xl font-mono">
              Katsiaryna Dounar
            </h1>
            <p></p>
          </div>
          <DescriptionAboutMe />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
