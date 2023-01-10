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
          <div className="bg-white/60 py-2 px-4 rounded-md shadow-lg max-w-[23rem]">
            <p className="">
              <span className="font-bold">Full name: </span>Daniel Vacek
            </p>
            <p>
              <span className="font-bold">School: </span>High school in Jihlava.
              Specialization IT
            </p>
            <p>
              <span className="font-bold">Year of birth: </span>9.4 1998
            </p>
            <p>
              <span className="font-bold">My town: </span>Velké Meziříčí
            </p>
          </div>
          <div className="bg-white/60 py-2 px-4 mb-6 rounded-md shadow-lg max-w-[23rem] md:w-[30rem]">
            <h3>My Story</h3>
            <p>
              So my real patient in programming begun last year. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Asperiores vitae
              aliquam maxime molestias laborum itaque distinctio obcaecati
              beatae, autem nostrum repellat cumque! Vel enim obcaecati pariatur
              velit eos, odio aut. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Debitis dicta iusto corporis quaerat, suscipit
              sit magnam corrupti ipsa consectetur numquam cumque neque nisi id
              vel nobis. Adipisci nam quos inventore.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default hocWrapper(About);
