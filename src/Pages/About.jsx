import React from 'react';
import { Link } from 'react-router';  // Fix import path to 'react-router-dom'
import HeroImg from '../assets/Heroimg.jpg';
import { motion } from 'motion/react';  // Import motion from framer-motion
import Footer from '../Components/Footer';

function About() {
  return (
    <div className="mx-auto max-w-7xl min-h-screen ">
        <motion.div
            className=" relative top-[15vh]  lg:left-0 lg:right-0  p-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            
            <div className='glossy-overlay  mb-8 p-4'>

                <motion.div
                    className=" py-8 rounded-xl border-white/10 border flex flex-col-reverse items-center justify-center p-2 md:grid md:grid-cols-2 md:gap-8 lg:gap-16"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 50 }}>
                    
                    <div className="text-center md:text-left">    
                        <div>
                            <motion.h1
                                className="text-4xl text-white font-bold text md:text-4xl"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Emmanuel<span className="text-blue-800"> A. </span>
                            </motion.h1>

                            <motion.h2
                                className="text-gray-300 text-2xl"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <strong>Full Stack Developer</strong>
                            </motion.h2>
                    
                            <motion.p
                                className="text-sm pt-4 text-gray-400 text-justify"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >   
                                I am a passionate Full stack developer with a knack for crafting scalable web applications. With years of hands-on experience, I have honed my skills in Front-end technologies like React and Next.js, as well as Back-end technologies like Node.js and Database tools. My goal is to leverage my skills to create innovative solutions that drive business growth and deliver the best user experience.
                            </motion.p>
                            
                            <motion.p
                                className="pt-4 pb-4 text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Code. <span className="text-blue-800 font-bold">Create.</span> Connect.
                            </motion.p>
                        </div>

                        <div className="flex flex-col items-center gap-4 md:flex-row">
                            <motion.button
                                className="border-2 py-2 w-[50%] text-white rounded-md hover:bg-gradient-to-r from-blue-500 to-cyan-400 hover:-translate-y-1 transition-all"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link to="/">Download CV</Link>
                            </motion.button>

                            <motion.button
                                className="py-2 w-[50%] hover:-translate-y-1 transition-all bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-md hover:bg-blue-600"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link to="/about">Contact</Link>
                            </motion.button>
                        </div>
                    </div>

                    <div>
                        <motion.img
                        className="w-60 lg:w-80 md:w-100"
                        src={HeroImg}
                        alt="Hero"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>

                </motion.div>



                {/* Technologies section */}
                <motion.div
                    className="rounded-xl border-white/10 border mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="mt-4 text-center text-1xl font-bold text-gray-300"><span className='rounded-lg bg-gray-700/60 px-6 py-1 '>Technologies</span> </h1>
                    <div className="flex items-center justify-center gap-4 pt-4 pb-4 md:flex-row md:gap-6">
                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <img className="h-10 hover:-translate-y-1 transition-all" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML" />
                            <p className="hidden">HTML</p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            >
                            <img className="h-10 hover:-translate-y-1 transition-all" src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
                            <p className="hidden">CSS</p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            >
                            <img className="h-10 hover:-translate-y-1 transition-all" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
                            <p className="hidden">React</p>
                        </motion.div>

                            
                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <img className="h-10 hover:-translate-y-1 transition-all" src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" />
                            <p className="hidden">Node.js</p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <img className="h-10 hover:-translate-y-1 transition-all" src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
                            <p className="hidden">JavaScript</p>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.1 }}
                            >
                            <img className="h-10 hover:-translate-y-1 transition-all" src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" />
                            <p className="hidden">MongoDB</p>
                        </motion.div>
                    </div>
                </motion.div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-6 my-8">
                        <motion.div
                            className="p-2 py-4 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <h3 className="text-1xl text-center  font-bold mb-4 "> <span className='rounded-lg bg-gray-700/60 px-6 py-1 '>Education</span>  </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.S. in Computer Science </strong> - <span className="hidden"> LAUTECH (2015-2021)</span>
                                </li>
                                <li className="text-sm">
                                    Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="p-2 py-4 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.3 }}
                        >
                            <h3 className="text-1xl text-center font-bold mb-4"> <span className='rounded-lg bg-gray-700/60 px-6 py-1'> Work Experience </span> </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Frontend Engineer at Scout_Startup (2019 - 2020)</h4>
                                    <p className="text-sm">Developed and maintained microservices for cloud-based applications.</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                                    <p className="text-sm">Assisted in building front-end components and integrating REST APIs</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className=''>
                <Footer  />
                </div>
            </div>
                

        </motion.div>
        
    </div>
  );
}


export default About;
