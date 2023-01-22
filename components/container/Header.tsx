import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import SkillsRotator from '../SkillsRotator';
import Heading from '../ui/Heading';

const Header = () => {
  return (
    <header
      id="home"
      className="w-full px-2 py-8 m-auto h-full md:h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <Heading>Welcome to my portfolio website</Heading>

      <div className="flex items-center justify-center flex-col md:flex-row p-4">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1], rotate: '-12deg' }}
          transition={{ duration: 0.5 }}
          className="w-52 bg-white/70 rounded-md p-4 shadow-lg mb-8 md:mb-0 rotate-12 md:-rotate-12 self-end md:self-start"
        >
          <p>
            Hello, My name is Daniel and I want to be your Frontend developer.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1], y: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="flex items-center justify-center"
        >
          <Image
            className="w-full h-3/4 object-cover  md:h-full md:w-full"
            width={400}
            height={300}
            src="/../public/person2.png"
            alt=""
          />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="mt-28 mb-28 md:mt-10 md:mb-10 md:self-start "
        >
          <SkillsRotator />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
