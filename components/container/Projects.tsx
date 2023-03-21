import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';
import useSlider from '../../hooks/use-slider';
import ProjectType from '../../types';
import { client } from '../../utils/client';
import hocWrapper from '../hoc/hocWrapper';
import ProjectInfo from '../ProjectInfo';
import BtnSlider from '../SliderBtn';
import Heading from '../ui/Heading';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [filterProjects, setFilterProjects] = useState<ProjectType[]>([]);

  const { setSlideIndex, slideIndex, prevSlide, nextSlide } = useSlider(
    filterProjects?.length - 1
  );

  const handleProjectsFilter = (item: string) => {
    setActiveFilter(item);

    if (item !== 'All') {
      setFilterProjects(
        projects.filter(project => project.tags.includes(item))
      );
    } else {
      setFilterProjects(projects);
    }
  };

  useEffect(() => {
    const query = '*[_type == "projects"] | order(_createdAt asc)';

    client.fetch(query).then(data => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  return (
    <div className="flex items-center h-full flex-col justify-center relative max-w-[400px] md:max-w-[800px]">
      <Heading>See my projects</Heading>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="flex items-center gap-8 px-4 md:px-0 flex-wrap justify-center md:mb-8 mb-8"
      >
        {[
          'Insta Clone',
          'Recipe App',
          'MovieNow App',
          'All',
        ].map((item, index) => (
          <motion.button
            whileInView={{ rotate: [180, 0], opacity: [0, 1] }}
            transition={{ duration: 0.4, ease: 'easeIn' }}
            className={`bg-white/80 py-2 px-4 rounded-md hover:bg-white active:scale-95 font-semibold ${
              activeFilter === item ? 'bg-white' : ''
            }`}
            key={index}
            onClick={() => {
              handleProjectsFilter(item);
              setSlideIndex(0);
            }}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>
      <div className="relative max-w-[600px] overflow-x-hidden ">
        <div className="relative flex justify-center w-max items-center gap-0 ">
          {filterProjects?.map(project => (
            <ProjectInfo
              key={project._id}
              project={project}
              slideIndex={slideIndex}
            />
          ))}
        </div>
      </div>
      {filterProjects?.length >= 2 && (
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
      )}
      {filterProjects?.length >= 2 && (
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      )}
    </div>
  );
};

export default hocWrapper(Projects);
