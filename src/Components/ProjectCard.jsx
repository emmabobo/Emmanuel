import React from 'react';
import { Link } from 'react-router';



function ProjectCard({ title, description, technologies, link, images }) {
  return (
    <div className=" bg-cover p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all relative group">

      {/* Image that appears on hover on large screens */}
      <img
        src={images}
        alt={images.title}
        className="w-full h-[18rem] rounded-sm  mb-4 md:mb-0 "
      />

      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Text Section */}
        <div className="lg:w-3/5">
          <h3 className="text-xl text-white font-bold mb-2">{title}</h3>
          <p className="text-gray-400 md:h-30 mt-4">{description}</p>
          <div className="grid grid-cols-3 gap-2 mb-4 ">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-end">
            <Link to="/ErrorPage" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
              View Project →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
