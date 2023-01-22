import Image from 'next/image';
import React from 'react';

const SkillsRotator = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex rotate-6 animate-infinite-rotate">
        <div className="flex items-center justify-center w-60 h-60 bg-black/50 rounded-full">
          <p className="text-white uppercase">My skills</p>
        </div>
        <div className="bg-white rounded-full p-4 w-max absolute left-40 animate-bouncing-first shadow-lg">
          <Image
            className="w-10 h-10"
            height={20}
            width={20}
            src="/react.png"
            alt=""
          />
        </div>
        <div className="bg-white rounded-full p-4 w-max absolute top-40 animate-bouncing-second shadow-lg">
          <Image
            className="w-10 h-10"
            height={20}
            width={20}
            src="/css.png"
            alt=""
          />
        </div>
        <div className="bg-white rounded-full p-4 w-max absolute top-40 left-40 animate-bouncing-first shadow-lg">
          <Image
            className="w-10 h-10"
            height={20}
            width={20}
            src="/javascript.png"
            alt=""
          />
        </div>
        <div className="bg-white rounded-full p-4 w-max absolute animate-bouncing-second shadow-lg">
          <Image
            className="w-10 h-10"
            height={20}
            width={20}
            src="/typescript.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsRotator;
