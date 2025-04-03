 // make sure this is correctly imported
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import logo from "/LogoW.png";
import logoText from "/logowhite.png";
// import { FaHome } from "react-icons/fa";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='fixed top-0 right-0 left-0 z-40 max-auto  bg-black '>
      <div className='text-white h-[10vh]  mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8'>
        {/* Logo section */}
        <div >
          <Link to="/" className="-m-1.5 p-1.5">
            {/* Uncomment the logos if necessary */}
            <span className="sr-only">La_Drogo</span>
            <img className=" h-8 w-auto lg:hidden " src={logo} alt="" />
            <img className='h-5 w-auto hidden lg:block' src={logoText} alt='' />
          </Link>
        </div>

        {/* Menu Items for Web */}
        <div id='webLink' className={` hidden md:flex md:justify-between md:gap-8  md:item-center  md:text-1xl `}>
          <div className='  hover:text-blue-600 hover:-translate-y-1 hover:border-b-4 md: transition-all md: '>
            <Link to='/'  >
              Home
             {/* <div className='p-0'>
              <FaHome />
             </div> */}
            </Link>
          </div>

          <div className='  hover:text-blue-600 hover:-translate-y-1 hover:border-b-4 transition-all md:pb-0'>
            <Link to='/Projects' >
              <div>
                Projects
              </div>
              
            </Link>
          </div>

          <div className='  hover:text-blue-600 hover:-translate-y-1 hover:border-b-4 transition-all  md:pb-0'>
            <Link to='/about' >
              About
            </Link>
          </div>

          <div className='  hover:text-blue-600 hover:-translate-y-1 hover:border-b-4 transition-all  md:pb-0'>
            <Link to='/contact' >
              Contact
            </Link>
          </div>
        </div>

        {/* Hamburger-menu for Mobile */}
        <div className="flex md:hidden">
          <button type="button" onClick={handleMobileMenu} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Menu Items for Mobile with transition */}
        <motion.div
          id='navLink'
          className='bg-black absolute top-[10vh] left-0 right-0 h-[90vh] items-left text-white p-8 text-2xl flex flex-col gap-8 md:hidden md:flex-row md:text-2xl md:h-0 md:p-0'
          initial={{ x: '100%' }} // initially offscreen to the right
          animate={{ x: mobileMenuOpen ? 0 : '100%' }} // move it into view when open
          exit={{ x: '100%' }} // exit offscreen to the right
          transition={{ type: 'spring', stiffness: 100, damping: 25 }} // smooth spring transition with easing
        >
          <div className='w-full border-b-4 pb-3 hover:text-blue-600 hover:-translate-y-1 transition-all md:border-none md:pb-0'>
            <Link to='/' onClick={handleMobileMenu}>
              Home
            </Link>
          </div>

          <div className='w-full border-b-4 pb-3 hover:text-blue-600 hover:-translate-y-1 transition-all md:border-none md:pb-0'>
            <Link to='/Projects' onClick={handleMobileMenu}>
              Projects
            </Link>
          </div>

          <div className='w-full border-b-4 pb-3 hover:text-blue-600 hover:-translate-y-1 transition-all md:border-none md:pb-0'>
            <Link to='/about' onClick={handleMobileMenu}>
              About
            </Link>
          </div>

          <div className='w-full border-b-4 pb-3 hover:text-blue-600 hover:-translate-y-1 transition-all md:border-none md:pb-0'>
            <Link to='/contact' onClick={handleMobileMenu}>
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
