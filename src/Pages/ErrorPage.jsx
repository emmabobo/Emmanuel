import React from 'react'
import { Link } from 'react-router';
import { motion } from 'motion/react'
import Ellipse33 from '../assets/Ellipse33.svg'
import Group33 from '../assets/Group33.svg'


function ErrorPage() {
  return (
    <div className='mx-auto bg-black max-w-7xl  min-h-[90vh] relative top-[10vh] '>
        
      <motion.div
      className='relative  text-white h-screen text-center md:text-left   overflow-clip flex justify-center items-center md:justify-start   '
      >
        <div className=' text-white mx-8 lg:mx-24  '>
          <div className='text-5xl font-bold pb-4 md:text-7xl lg:text-8xl'>
            404 -error
          </div>

          <div className='text-2xl pb-4 md:text-3xl '>
            PAGE NOT FOUND YET.
          </div>

          <p className='text-[10px] pb-4 md:text-[14px]'>
            Your Search has ventured beyond the known universe.
          </p>

          <div flex item-center justify-center  >
            <button className='border-2 border-white px-4 py-2 font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
            '>
            <Link to="/">
              Back To Home
            </Link>
          </button>
          </div>

        </div>
        

        <motion.div className='absolute right-0'>
        <img src={Ellipse33} alt="" className='h-[600px]'/>
        </motion.div>

        <motion.div className='absolute top-[8vh] md:top-[25vh] md:right-[10vh] '>
        <img src={Group33} alt="" className='w-2xs' />
        </motion.div>

      </motion.div>
      
    </div>
  )
}

export default ErrorPage
