import React, { useState } from 'react';

const Navbar = ({homeref,aboutref,skillsref,projectsref,contactref,scrollToSection}) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-gray-800 p-4 fixed top-0 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="text-white text-lg font-bold">
          Kashetti <span className='text-yellow-400'>Naresh</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <button onClick={()=>scrollToSection(homeref)} className="text-gray-300  hover:border-b-4 rounded-sm hover:border-yellow-400">
          Home
          </button>
          
          <button onClick={()=>scrollToSection(aboutref)} className="text-gray-300 hover:border-b-4 rounded-sm hover:border-yellow-400 ">
          About
          </button>
          <button onClick={()=>scrollToSection(skillsref)}className="text-gray-300 hover:border-b-4 rounded-sm hover:border-yellow-400 ">
            Skills
            </button>
          <button onClick={()=>scrollToSection(projectsref)}className="text-gray-300 hover:border-b-4 rounded-sm hover:border-yellow-400 ">
            Projects
            </button>
          <button onClick={()=>scrollToSection(contactref)}className="text-gray-300 hover:border-b-4 rounded-sm hover:border-yellow-400 ">
            Contact
            </button>
          
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          
          <button onClick={()=>scrollToSection(homeref)} className="block px-4 py-2 text-white">
          Home
          </button>
          
          <button onClick={()=>scrollToSection(aboutref)} className="block px-4 py-2 text-white">
          About
          </button>
          <button onClick={()=>scrollToSection(skillsref)} className="block px-4 py-2 text-white">
            Skills
            </button>
          <button onClick={()=>scrollToSection(projectsref)} className="block px-4 py-2 text-white">
            Projects
            </button>
          <button onClick={()=>scrollToSection(contactref)}  className="block px-4 py-2 text-white">
            Contact
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
