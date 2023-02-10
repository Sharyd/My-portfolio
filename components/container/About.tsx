import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import hocWrapper from '../hoc/hocWrapper';
import Heading from '../ui/Heading';

const About = () => {
  return (
    <div className="flex relative items-center h-full justify-center flex-col mb-24 lg:mb-0  ">
      <Heading>About me</Heading>
      <div className="flex items-center flex-col lg:flex-row gap-10 w-[80rem] justify-center ">
        <motion.div
          className="max-h-full max-w-full "
          whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut', type: 'tween' }}
        >
          <Image
            src="/computer.jpg"
            alt="computer image"
            className=" h-1/2 w-[350px] md:w-[525px]  xl:w-full xl:h-full object-cover rounded-md"
            width={600}
            height={400}
          />
        </motion.div>

        <motion.div
          whileInView={{ x: [300, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="flex flex-col gap-6 items-center md:items-start"
        >
          <div className="bg-white/60 p-4 mb-6 rounded-md shadow-lg md:max-w-[450px] max-w-[350px] ">
            <h3 className="text-xl p-2 text-black">My Story</h3>
            <p>
              My passion for programming started a year ago. My field of study
              in high school was Information Technology. After graduating high
              school, I would never believe I would ever find a passion and
              interest in programming again. After some time, I realised I
              needed to find a way for my future. So I started learning web
              development, primarily the front-end part. Firstly, I was learning
              the basics of JavaScript and TypeScript. Then I started
              programming in React. Afterwards, I was interested in NextJS
              (React framework for production). Every application has some data
              to process, retrieve and store. For data management, I needed to
              learn databases. I started with learning Firebase, MongoDB and
              Sanity. With those, I built projects like an Instagram clone, a
              Pokemon blog etc. I want to learn much more about developing
              applications. I want to work for a company where teamwork is
              essential. I want to gain new experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default hocWrapper(About);
