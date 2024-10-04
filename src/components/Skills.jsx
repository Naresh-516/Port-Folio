import React from 'react';

import html from '../Assets/html.png';
import css from '../Assets/css.png';
import tailwind from '../Assets/tailwindcss.png';
import js from '../Assets/js.png';
import react from '../Assets/react.png';
import mongodb from '../Assets/mongodb.png';
import java from '../Assets/java.webp';
import oracle from '../Assets/oracle.png';

const Skills = () => {
  return (
    <div className="bg-slate-800 text-white  py-20">
      <h2 className="text-yellow-400 flex justify-center items-center font-bold text-3xl">Skills</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
       
        <div className="hover:scale-110 transform transition duration-300">
          <img src={html} alt="HTML" className="h-20 w-20 object-contain"/>
          <p className="mt-2 text-center">HTML</p>
        </div>
        
        <div className="hover:scale-110 transform transition duration-300">
          <img src={css} alt="CSS" className="h-20 w-20 object-contain"/>
          <p className="mt-2 text-center">CSS</p>
        </div>

        <div className="hover:scale-110 transform transition duration-300">
          <img src={tailwind} alt="Tailwind CSS" className="h-20 w-20 object-contain"/>
          <p className="mt-2 text-center">Tailwind CSS</p>
        </div>

        <div className="hover:scale-110 transform transition duration-300">
          <img src={js} alt="JavaScript" className="h-20 w-20 object-contain"/>
          <p className="mt-2 text-center">JavaScript</p>
        </div>

        <div className="hover:scale-110 transform transition duration-300">
          <img src={react} alt="React" className="h-20 w-20 object-contain"/>
          <p className="mt-2 text-center">React</p>
        </div>

        <div className="hover:scale-110 transform transition duration-300">
          <img src={mongodb} alt="MongoDB" className="h-20 w-20 object-contain"/>
          <p className="mt-2 text-center">MongoDB</p>
        </div>

        <div className="hover:scale-110 transform transition duration-300">
          <img src={oracle} alt="Oracle" className="h-20 w-20 object-contain"/>
          <p className="mt-2 text-center">Oracle</p>
        </div>
        
        <div className="hover:scale-110 transform transition duration-300">
          <img src={java} alt="Java" className="h-20 w-20 object-contain"/>
          <p className="mt-2 text-center">Java</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
