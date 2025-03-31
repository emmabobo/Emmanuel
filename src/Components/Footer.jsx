import React from 'react';
import { Link } from 'react-router';
import { FaLinkedin ,FaGithub  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-transparent text-white pt-8 pb-4 text-center lg:pb-8">
      <div className=" max-w-7xl mx-auto px-4">
        
        <div className="flex items-center justify-center pb-8">
          <Link to={import.meta.env.VITE_LINKEDIN} className="text-xl mx-4 hover:text-blue-400"> <FaLinkedin /> </Link>
          <Link to= {import.meta.env.VITE_GITHUB} className="text-xl mx-4 hover:text-blue-400"> <FaGithub /> </Link>
          <Link to={import.meta.env.VITE_X} className="text-xl mx-4 hover:text-blue-400"><FaXTwitter /></Link>
        </div>

        <div>
          <p className="text-sm mb-1">&copy; 2025 La_Drogo. All Rights Reserved.</p>
          <p className="text-sm">Built with ❤️ using HTML, CSS, and JavaScript</p> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
