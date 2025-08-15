import type React from 'react';

import DescriptionProjectMe from './description-projects-me';

const DescriptionAboutMe = (): React.JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-1 gap-2">
          <h2 className="uppercase font-bold text-xl font-mono mb-2">
            Personal Statement
          </h2>
          <p>
            A student aspiring to grow in the field of front-end development. I
            have basic knowledge of HTML, CSS, JavaScript, and TypeScript, and I
            am currently learning React. I am looking for an opportunity to
            apply my skills and learn from professionals in real projects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h2 className="uppercase font-bold text-xl font-mono mb-2">
            Education
          </h2>
          <p className="font-bold font-mono">
            Belarusian State University, Faculty of Geography
          </p>
          <p className="font-mono">
            geoecologist, teacher of geography and ecology
          </p>
        </div>
        <div>
          <h2 className="uppercase font-bold text-xl font-mono mb-2">
            Courses
          </h2>
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <h3>RS School STAGE 0</h3>
            </li>
            <li>
              <h3>RS School STAGE 1-2</h3>
            </li>
            <li>
              <h3>RS School STAGE 3</h3>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase font-bold text-xl font-mono mb-2">
            Projects
          </h2>
          <DescriptionProjectMe />
        </div>
      </div>
    </>
  );
};

export default DescriptionAboutMe;
