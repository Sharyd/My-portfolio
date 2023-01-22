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
            src="/../public/assets/computer.jpg"
            alt="computer image"
            className=" h-1/2 w-[350px] md:w-[500px] lg:w-full lg:h-full object-cover rounded-md"
            width={600}
            height={400}
          />
        </motion.div>

        <motion.div
          whileInView={{ x: [300, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="flex flex-col gap-6 items-center md:items-start"
        >
          <div className="bg-white/60 p-4 mb-6 rounded-md shadow-lg max-w-[23rem] md:w-[30rem]">
            <h3 className="text-xl p-2 text-black">My Story</h3>
            <p>
              My real desire for programming began a year ago. I studied IT in
              high school, in the past. After school, I never believed that I
              would be interested in to programming again. So years passed away
              and I realize it, I had to find a way to my future. So I started
              to learn web development, especially Frontend. First of all, I was
              learning the basics of JavaScript and also TypeScript. Then I
              jumped into React. After that, I was interested in NextJS(React
              framework for production). But in every application, you need some
              kind of data and store it in a database. So I started to learn
              firebase, mongoDB and Sanity. With that, I build some real-world
              projects like Instagram clone, pokemon Blog, and so on. I
              realized, that I want to learn so much more in the development
              world. I want to be in the company of good teammates and with that
              gain experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default hocWrapper(About);
