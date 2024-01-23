import Image from 'next/image';
import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';

const About = (props) => {
  return (
    <section className="bg-background mx-auto flex flex-col justify-center md:min-w-0 lg:min-w-[800px] hoverable">
      <h2 className="text-gray-200 text-xl md:text-3xl font-bold horizontal-line">
        <span className="text-primary text-md md:text-xl font-SpaceMono font-thin">02.</span> About Me
      </h2>
      <div className="block md:grid lg:grid-cols-3 lg:gap-x-20 mt-2 md:mt-6 lg:max-w-4xl">
        <div className="col-span-2 text-gray-400 text-sm md:text-base">
          <p>
            Hi, I'm Marko! I find joy in creating things that come to life on the internet. My journey into web development began in 2017 when I
            decided to build a website for a musician friend. Little did I know, this venture would teach me valuable skills in HTML, CSS, and
            JavaScript.
          </p>
          <p className="mt-4">
            Today, I've accumulated diverse experience across various technologies and industries. I've been part of exciting projects like Roster, a
            hotel management service streamlining guest reservations and room assignments; Legal, an application aiding lawyers in case tracking and
            document management; CRM, a system revolutionizing customer interaction and data analysis for businesses; Skylead, a LinkedIn automation
            tool for connecting with potential clients; and Accounting, a financial management app for tracking expenses and income. Beyond the
            digital realm, I'm an avid learner, constantly exploring emerging technologies and industry trends. I believe in the power of continuous
            improvement and am eager to contribute my skills and passion to impactful projects.
          </p>
          <p className="mt-4">Here are a few technologies I've been working with in my carrier:</p>
          <ul className="block md:grid grid-cols-2 space-y-2 md:space-y-0 md:gap-y-3 p-0 mt-4 overflow-hidden list-none">
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
        <div className="brightness-75 saturate-150 mt-14 md:mt-0 hidden lg:block">
          <Image
            className="shadow-lg rounded-lg mx-auto hover:scale-105 shadow-teal-900 transition-transform ease-out duration-200"
            src={'/images/me/me_1.jpeg'}
            alt="me"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
