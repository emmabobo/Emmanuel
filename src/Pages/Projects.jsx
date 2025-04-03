import React from 'react';
import { Link } from 'react-router';
import { FaGithub ,FaRegArrowAltCircleRight } from "react-icons/fa";
import ProjectCard from '../Components/ProjectCard';
import projectsData from '../Components/ProjectData';
import { motion } from 'motion/react'; // Import motion from motion.dev
import Footer from '../Components/Footer';

function Projects() {
  return (

    <div className="mx-auto max-w-7xl  min-h-screen flex justify-center  relative top-[15vh]  lg:left-0 lg:right-0">
        <div className="glossy-overlay mx-4 px-2 py-8 mb-8 ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center md:mt-8">
            Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Initial state (invisible and slightly below)
                animate={{ opacity: 1, y: 0 }}  // Final state (fully visible and in place)
                transition={{ duration: 0.6, delay: index * 0.2 }} // Animation delay for staggered effect
                >
                <ProjectCard
                    images={project.images}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                />

                </motion.div>
            ))}
            
            </div>
             <div className=" flex justify-center ">

                <Link to={import.meta.env.VITE_GITHUB} className='text-center'>
                    <motion.button
                        initial={{ opacity: 0, y: 8 }} // Initial state (invisible and slightly below)
                        animate={{ opacity: 1, y: 0 }}  // Final state (fully visible and in place)
                        transition={{ duration: 0.5, delay:.5 }} // Animation delay for staggered effect
                        className=' flex  gap-2 items-center px-4 mt-8 p-2 bg-transparent border-2 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105'
                        >
                            <FaGithub /> More  <FaRegArrowAltCircleRight />
                    </motion.button>
                </Link>
             </div>
             <div className=''>
                <Footer  />
             </div>
             
        </div>
    </div>

  );
}

export default Projects;
