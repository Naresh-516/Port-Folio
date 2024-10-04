import React from 'react';
import projectsData from './Projectsinfo.json';
import { useState } from 'react';
import Previous from '../Assets/pre.png';
import Next from '../Assets/next.webp';

const Projects = () => {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index < projectsData.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePrevious() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  let projectslist = projectsData[index];

  return (
    <div className="bg-slate-800 p-4  py-20">
      <h2 className="text-yellow-400 flex justify-center items-center font-bold text-3xl mb-4">
        Projects
      </h2>

      <div className="relative flex justify-center items-center">
       <div>
        <img
          onClick={handlePrevious}
          src={Previous}
          disabled={index === 0}
          className="absolute left-0 cursor-pointer w-10 h-10 disabled:opacity-0 m-0" alt='prev button'
        />
         </div>
       
        <div className="flex flex-col justify-center items-center sm:flex-row ">
        <img
          src={projectslist.image}
          alt={projectslist.name}
          className="w-2/5 h-72 rounded-lg mx-4"
        />
         <div className="text-center mt-6 ">
        <h2 className="text-amber-300 font-bold">{projectslist.name}</h2>
        <p className="mt-2 text-slate-300">{projectslist.description}</p>
        <ul className="flex flex-wrap gap-2 justify-center mt-4">
          {projectslist.technologies.map((tech, index) => (
            <li key={index} className="bg-gray-200 px-3 py-1 rounded-md text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      </div>

        <div><img
          onClick={handleNext}
          disabled={index === projectsData.length - 1}
          className="absolute right-0 cursor-pointer w-10 h-10 disabled:opacity-50"
          src={Next} alt='prev button'
        /></div>
      </div>

      
    </div>
  );
};

export default Projects;
