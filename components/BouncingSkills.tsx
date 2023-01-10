import Image from 'next/image';
import React from 'react';

interface Props {
  location: string;
}

const BouncingSkills = ({ location }: Props) => {
  return (
    <div className="animate-bounce p-4 bg-black/60 w-24 h-24 md:w-32 md:h-32  flex rounded-full items-center justify-center">
      <Image
        src={location}
        className="w-12 h-12 md:w-14 md:h-14"
        height={15}
        alt="react logo"
        width={15}
      />
    </div>
  );
};

export default BouncingSkills;
