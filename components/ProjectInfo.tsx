import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import ProjectType from '../types';
import { urlFor } from '../utils/client';

interface Props {
  project: ProjectType;
  slideIndex: number;
}

const ProjectInfo = ({ project, slideIndex }: Props) => {
  const { description, title, imgUrl, projectLink, codeLink } = project;

  return (
    <motion.article
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
      className="flex items-center justify-center p-2 flex-col max-w-[600px] transition ease-in-out duration-500 "
      style={{ transform: `translateX(${-100 * slideIndex}%)` }}
    >
      <h2 className="text-2xl font-semibold text-white/80">{title}</h2>
      <p className=" text-white/90 py-2 px-10 rounded-xl my-2 text-center w-3/4 md:w-full">
        {description}
      </p>
      <div className="relative group">
        <Image
          className="max-h-full md:max-w-full sm:max-w-[500px] max-w-[325px] m-auto object-cover rounded-md shadow-lg "
          src={urlFor(imgUrl).url()}
          width={700}
          height={400}
          alt="projects"
        />

        <div className="group-hover:flex flex absolute top-[50%] p-4 left-[50%] -translate-x-1/2 -translate-y-1/2 items-center gap-6">
          <a href={codeLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0.75, 1] }}
              whileHover={{ scale: [1, 0.75] }}
              transition={{
                duration: 0.2,
              }}
              className="w-14 h-14 bg-black/60 flex items-center justify-center rounded-full"
            >
              <AiFillGithub className="w-1/2 h-1/2  text-white rounded-full cursor-pointer " />
            </motion.div>
          </a>
          <a href={projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0.75, 1] }}
              whileHover={{ scale: [1, 0.75] }}
              transition={{
                duration: 0.2,
              }}
              className="w-14 h-14 bg-black/60 flex items-center justify-center rounded-full cursor-pointer"
            >
              <AiFillEye className="w-1/2 h-1/2  text-white rounded-full" />
            </motion.div>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectInfo;
