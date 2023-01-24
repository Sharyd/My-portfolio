import React, { useEffect, useState } from 'react';
import BouncingSkills from '../BouncingSkills';
import FallingBalls from '../ui/FallingBalls';
import hocWrapper from '../hoc/hocWrapper';
import Heading from '../ui/Heading';
import classes from '../../styles/infiniteMove.module.css';
import { client } from '../../utils/client';
import SkillsType from '../../types';
const Skills = () => {
  const [skills, setSkills] = useState<SkillsType[]>([]);

  useEffect(() => {
    const query = '*[_type == "skills"] | order(_createdAt asc) ';
    client.fetch(query).then(data => {
      setSkills(data);
    });
  }, []);

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
                {skills.map(skill => (
                  <li key={skill._id}>- {skill.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center">
            These are my best skills, but I want to learn more. Furthermore, I
            have some knowledge of libraries like Redux Toolkit, React Query
            etc.
          </p>
        </div>

        <div
          className={` absolute bottom-0 left-0 flex gap-2 items-center ${classes['infinite-move']}`}
        >
          {skills.map(value => (
            <BouncingSkills key={value._id} skills={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default hocWrapper(Skills);
