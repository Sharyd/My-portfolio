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
      <Heading>My skills and experience</Heading>
      <div className="relative overflow-x-hidden overflow-y-hidden flex-col  max-w-[800px] h-[400px] rounded-xl p-2 bg-black/60 items-center justify-center">
        <p className="text-center flex-1 text-white/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur
          delectus itaque fugiat veritatis enim tempora asperiores, hic ad
          aliquam voluptatem quaerat dolorum odio voluptatibus explicabo! Nulla
          praesentium quae blanditiis! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsam aliquam, consectetur, quos dolores ratione
          commodi itaque nostrum facilis enim sequi perspiciatis. Dicta
          consequuntur saepe enim. Quae voluptate fugiat dolorum sunt.
        </p>

        <div
          className={` absolute bottom-0 left-0 flex gap-2 items-center ${classes['infinite-move']}`}
        >
          <BouncingSkills location="/../public/assets/react.png" />
          <BouncingSkills location="/../public/assets/git.png" />
          <BouncingSkills location="/../public/assets/sass.png" />
          <BouncingSkills location="/../public/assets/typescript.png" />
          <BouncingSkills location="/../public/assets/html.png" />
          <BouncingSkills location="/../public/assets/redux.png" />
          <BouncingSkills location="/../public/assets/css.png" />
        </div>
      </div>
    </div>
  );
};

export default hocWrapper(Skills);
