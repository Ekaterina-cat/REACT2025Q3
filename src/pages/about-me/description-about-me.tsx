import type React from 'react';

import DescriptionProjectMe from './description-projects-me';

const DescriptionAboutMe = (): React.JSX.Element => {
  return (
    <>
      <div>
        <div>
          <h2 className="uppercase font-bold text-xl font-mono">
            Personal Statement
          </h2>
          <p></p>
        </div>
        <div>
          <h2 className="uppercase font-bold text-xl font-mono">Education</h2>
          <p className="font-bold font-mono">
            Belarusian State University, Faculty of Geography
          </p>
          <p className="font-mono">
            geoecologist, teacher of geography and ecology
          </p>
        </div>
        <div>
          <h2 className="uppercase font-bold text-xl font-mono">Courses</h2>
          <ul>
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
          <h2 className="uppercase font-bold text-xl font-mono">Projects</h2>
          <DescriptionProjectMe />
        </div>
      </div>
    </>
  );
};

export default DescriptionAboutMe;
