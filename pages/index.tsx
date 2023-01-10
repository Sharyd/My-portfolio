import type { NextPage } from 'next';
import About from '../components/container/About';
import Contact from '../components/container/Contact';
import FallingBalls from '../components/ui/FallingBalls';
import Header from '../components/container/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/container/Projects';
import Skills from '../components/container/Skills';

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden font-custom ">
        <Navbar />
        <main>
          <Header />
          <section
            id="about"
            className="py-8 px-4 min-h-screen bg-gradient-to-r from-cyan-600 to-blue-500 m-auto w-full"
          >
            <About />
          </section>
          <section
            id="projects"
            className="py-8 px-4 min-h-screen bg-gradient-to-r from-cyan-600 to-blue-600 flex items-start justify-center w-full"
          >
            <Projects />
          </section>
          <section
            id="skills"
            className="py-8 px-4 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600 flex items-start justify-center w-full"
          >
            <Skills />
          </section>
        </main>
        <footer
          id="contact"
          className="py-8 px-4 h-full min-h-screen bg-gradient-to-r from-cyan-600 to-blue-600 flex items-start justify-center w-full"
        >
          <Contact />
        </footer>
      </div>
    </>
  );
};

export default Home;
