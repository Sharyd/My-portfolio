import Image from 'next/image';
import React from 'react';
import BouncingSkills from '../BouncingSkills';
import FallingBalls from '../ui/FallingBalls';
import hocWrapper from '../hoc/hocWrapper';
import Heading from '../ui/Heading';
import classes from '../../styles/infiniteMove.module.css';

const Skills = () => {
  return (
    <div className="flex items-center h-full justify-center flex-col relative mb-24 md:mb-0 ">
      <div className="absolute">
        <FallingBalls />
      </div>
      <Heading>My skills</Heading>
      <div className="relative overflow-x-hidden overflow-y-hidden flex-col w-[400px] sm:w-[550px] md:w-[700px] lg:w-[800px] h-[500px] rounded-xl p-2 bg-black/60 items-center justify-center">
        <div className="flex justify-between items-center text-white/80 flex-col gap-8">
          <div className="flex items-center flex-col ">
            <h3 className="px-2 mb-4 text-lg text-white border-b ">Skills</h3>
            <div className="flex items-center justify-center">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>NextJS</li>
                <li>CSS</li>
                <li>TailwindCSS</li>
                <li>Recoil</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <p className="text-center">
            These are my best skills, but i need to learn more. Also i have some
            knowledge in libraries like Redux, React Query and so on.
          </p>
        </div>

        <div
          className={` absolute bottom-0 left-0 flex gap-2 items-center ${classes['infinite-move']}`}
        >
          <BouncingSkills location="/../public/assets/react.png" />
          <BouncingSkills location="/../public/assets/git.png" />
          <BouncingSkills location="/../public/assets/sass.png" />
          <BouncingSkills location="/../public/assets/typescript.png" />
          <BouncingSkills location="/../public/assets/javascript.png" />
          <BouncingSkills location="/../public/assets/redux.png" />
          <BouncingSkills location="/../public/assets/css.png" />
        </div>
      </div>
    </div>
  );
};

export default hocWrapper(Skills);
