import React, { useState } from 'react';
import classNames from 'classnames';
import { CaretRightOutlined } from '@ant-design/icons';

import { ExperienceData } from '../data/experience';

const Experience = (props) => {
  const [experience, setExperience] = useState(ExperienceData[0]);

  return (
    <section className="bg-background mx-auto mt-0 md:mt-24 md:w-[800px] hoverable">
      <h2 className="text-gray-200 text-xl md:text-3xl font-bold md:horizontal-line mb-2 md:mb-10">
        <span className="text-primary text-md md:text-xl font-SpaceMono font-thin">03.</span> Where I've Worked
      </h2>
      <div className="grid md:grid-cols-[200px_1fr]">
        <div className="flex md:flex-col font-SpaceMono overflow-x-scroll md:overflow-x-hidden mb-4">
          {ExperienceData.map((item) => (
            <button
              className={classNames(
                'text-left min-w-[145px] md:w-full p-3 border-b-2 md:border-b-0 md:border-l-2 text-xs md:text-sm focus:bg-background-light hover:bg-background-light transition-transform duration-200 ease-out',
                {
                  'text-primary': experience.id === item.id,
                  'text-gray-500': experience.id !== item.id,
                  'md:border-l-primary': experience.id === item.id,
                  'md:border-l-gray-500': experience.id !== item.id,
                  'border-b-primary': experience.id === item.id,
                  'border-b-gray-500': experience.id !== item.id,
                }
              )}
              key={item.id}
              onClick={() => setExperience(item)}
            >
              {item.companyName}
            </button>
          ))}
        </div>
        <div className="md:ml-2">
          <h3 className="text-gray-300 text-lg md:text-xl">
            {experience.position}
            <span className="text-primary"> @{experience.companyName}</span>
          </h3>
          <date className="text-gray-400 font-SpaceMono text-sm">{experience.dateEngaged}</date>

          <ul className="text-gray-400 text-sm md:text-base space-y-3 mt-3">
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility.id}>
                <span>
                  <CaretRightOutlined />
                </span>{' '}
                {responsibility.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
