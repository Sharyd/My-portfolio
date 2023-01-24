import React, { ReactNode } from 'react';
import { AiFillGithub } from 'react-icons/ai';
const AppWrap = (Component: () => JSX.Element) =>
  function HOC() {
    const yearNow = new Date().getFullYear();
    return (
      <div className="relative flex items-start justify-center min-h-screen w-full tracking-wide">
        <div
          className={`hidden md:block absolute w-max text-white/60 text-center bottom-[-1rem] left-[50%] -translate-x-1/2 -translate-y-1/2`}
        >
          <p>@{yearNow} Daniel Vacek</p>
          <p>&copy; For education purposes. Project owns Daniel Vacek</p>
        </div>
        <a
          className={`absolute bottom-0 right-6 hidden md:block`}
          href="https://github.com/sharyd"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-14 h-14 bg-black/40 flex items-center justify-center rounded-full hover:scale-75 transition-all">
            <AiFillGithub className="w-1/2 h-1/2  text-white/60 rounded-full cursor-pointer " />
          </div>
        </a>
        <Component />
      </div>
    );
  };

export default AppWrap;
