import React from 'react';
import { Link } from 'react-router';
import Footer from '../Components/Footer';
import { motion } from 'motion/react'
import Heroimg from "/Heroimg.jpg"


const Home = () => {
  return (
    
      <div className=' mx-auto lg:flex lg:items-center lg:justify-center relative top-[15vh]  lg:left-0 lg:right-0  '>

        <div id='HeroSection' className="glossy-overlay mx-4 lg:mx-8 max-w-7xl h-[80vh] grid grid-cols-1  place-items-center  md:flex flex-row-reverse md:justify-center md:items-center md:gap-8 md:px-8 lg:flex lg:justify-center lg:px-20 ">

          <div className=' w-full flex justify-center p-4'>
            <motion.img 
            initial={{ opacity: 0, y: 20  }} // Initial opacity is 1 (fully visible)
            animate={{ opacity: 1, y: 0  }}
            whileHover={{scale:1.1 }} 
            transition={{ duration: 1 , delay: 0 }} 
            className='rounded-full w-70  pb-4 border-2 border-white md:rounded-xl md:border-none' src={Heroimg} alt="" />
          </div>

          <div className="  text-white text-center md:text-left md:p-0 px-4 pb-10 max-w-2xl">
            <motion.h1 className="text-3xl font-bold md:text-5xl" initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}> Hi, I'm Emmanuel 
            </motion.h1>


            <motion.h2 className=" text-blue-600 pt-2 font-bold md:text-2xl" initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}>Full-Stack Developer</motion.h2>

            <motion.p className="text-sm text-justify md:text-lg mt-4 mb-6"
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }} >
              {/* Building innovative and scalable web applications with a passion for clean code and seamless user experiences. */}
              I’m a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
            </motion.p>
            <div className=" flex justify-center md:gap-6 md:justify-start">
              <Link to="/projects">
                <motion.button className="p-2 bg-transparent border-2 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                >
                  Check My Projects
                  </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button className=" hidden md:block p-2  bg-blue-600 border-2 border-white text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105" initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}>
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </div>
          
          
        </div>
      </div>

    
    
  );
};

export default Home;
