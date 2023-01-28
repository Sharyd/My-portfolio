import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');

  const [isScrolled, setIsScrolled] = useState(false);

  const arrayOfList = ['home', 'about', 'projects', 'skills', 'contact'];
  const hoverListClass =
    'after:hover:w-full after:hover:text-white after:hover:left-0 hover:text-white after:hover:absolute after:top-[1.8rem] md:after:top-[1.5rem]  after:hover:border-2 after:hover:color-white after:hover:animate-animated-line';
  const activeListClass =
    'after:w-full after:text-white after:left-0 after:absolute after:top-[1.8rem] md:after:top-[1.5rem] after:border-2  after:color-white after:animate-animated-line';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`h-16 z-50 shadow-none transition-all bg-black/60 fixed w-full items-center md:items-center flex justify-between py-2 px-4 ${
        !isScrolled &&
        'md:h-[3.25rem] md:bg-transparent md:items-start shadow-lg'
      } `}
    >
      <p className="text-white/90">My Portfolio</p>
      <ul className="md:flex hidden gap-8 capitalize text-white/90 mr-2  ">
        {arrayOfList.map(item => (
          <li
            className={`${active === item && 'text-white'} relative `}
            key={`link-${item}`}
            onClick={() => setActive(item)}
          >
            <div />
            <a
              className={`${
                active === item ? activeListClass : hoverListClass
              }`}
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-8 h-8 rounded-full relative md:hidden block">
        {!toggle ? (
          <AiOutlineMenu
            className="w-3/4 h-3/4 text-white/90 hover:text-white cursor-pointer "
            onClick={() => setToggle(true)}
          />
        ) : (
          <AiOutlineClose
            className="w-3/4 h-3/4 text-white/90 hover:text-white cursor-pointer "
            onClick={() => setToggle(false)}
          />
        )}

        {toggle && (
          <AnimatePresence>
            <motion.aside
              className="fixed top-16 bottom-0 right-0 z-50 p-2 w-48 sm:w-64 h-screen bg-black/60 border-l shadow-lg"
              animate={{ x: [300, 0] }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              exit={{ x: [0, 300] }}
            >
              <ul className="text-white/90 flex flex-col items-center justify-center gap-8 text-xl mt-10">
                {arrayOfList.map(item => (
                  <li
                    onClick={() => setActive(item)}
                    key={item}
                    className={`hover:text-white relative ${
                      active === item && 'text-white'
                    }`}
                  >
                    <a
                      className={`${
                        active === item ? activeListClass : hoverListClass
                      }`}
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
