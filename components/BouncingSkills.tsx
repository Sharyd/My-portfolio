import Image from 'next/image';
import React from 'react';
import SkillsType from '../types';
import { urlFor } from '../utils/client';

const BouncingSkills = ({ skills }: any) => {
  return (
    <div className="animate-bounce p-4 bg-black/60 w-20 h-20 md:w-28 md:h-28  flex rounded-full items-center justify-center">
      <img
        src={urlFor(skills.icon).url()}
        className="w-12 h-12 md:w-14 md:h-14"
        height={15}
        alt="react logo"
        width={15}
      />
    </div>
  );
};

export default BouncingSkills;
