import Image from 'next/image';
import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';

const About = (props) => {
  return (
    <section className="bg-background lg:pb-28 mx-auto flex flex-col justify-center md:min-w-0 lg:min-w-[800px]">
      <h2 className="text-gray-200 text-xl md:text-3xl font-bold horizontal-line">
        <span className="text-primary text-md md:text-xl font-SpaceMono font-thin">02.</span> About Me
      </h2>
      <div className="block md:grid md:grid-cols-3 md:gap-x-20 mt-2 md:mt-6 lg:max-w-4xl">
        <div className="col-span-2 text-gray-400 text-sm md:text-base">
          <p>
            Hi! My name is Marko and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I
            decided to try building musician website for my friend - turns out building website taught me a lot about HTML, CSS, JavaScript!
          </p>
          <p className="mt-4">
            Fast-forward to today, and I have gained a lot of experience in various technologies and business branches. So far I've been involved in
            creating <span className="text-primary">Roster</span> - hotel management service, <span className="text-primary">Legal</span> -
            application for a layers, <span className="text-primary">CRM</span> - customer relationship management,{' '}
            <span className="text-primary">Skylead</span> - Linkedin automation and <span className="text-primary">Accounting</span>.
          </p>
          <p className="mt-4">Here are a few technologies I've been working with in my carrier:</p>
          <ul className="block md:grid grid-cols-2 gap-y-3 p-0 mt-4 overflow-hidden list-none">
            <li className="flex items-center">
              <span className="text-primary flex items-center mr-2">
                <CaretRightOutlined />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center">
              <span className="text-primary flex items-center mr-2">
                <CaretRightOutlined />
              </span>
              TypeScript
            </li>
            <li className="flex items-center">
              <span className="text-primary flex items-center mr-2">
                <CaretRightOutlined />
              </span>
              React.js (Redux, React Query, Tailwind, Material UI)
            </li>
            <li className="flex items-center">
              <span className="text-primary flex items-center mr-2">
                <CaretRightOutlined />
              </span>
              Node.js (Express, NestJS)
            </li>
            <li className="flex items-center">
              <span className="text-primary flex items-center mr-2">
                <CaretRightOutlined />
              </span>
              Databases (PostgreSQL, MySQL, MongoDB)
            </li>
            <li className="flex items-center">
              <span className="text-primary flex items-center mr-2">
                <CaretRightOutlined />
              </span>
              Puppeteer
            </li>
            <li className="flex items-center">
              <span className="text-primary flex items-center mr-2">
                <CaretRightOutlined />
              </span>
              AWS (S3, SQS, EC2)
            </li>
          </ul>
        </div>
        <div className="brightness-75 saturate-150 mt-14 max-w-xs md:mt-0">
          <Image className="rounded-lg cursor-pointer mx-auto drop-shadow-2xl" src={'/images/me/me_1.jpeg'} alt="me" width={250} height={250} />
        </div>
      </div>
    </section>
  );
};

export default About;
