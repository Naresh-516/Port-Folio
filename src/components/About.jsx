import React from 'react';

const About = () => {
  return (
    <div className="bg-slate-800 text-white  flex flex-col md:flex-row justify-center items-center md:items-start py-12 md:gap-8">
      
      {/* Information Section */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h2 className="text-yellow-400 flex justify-center items-center font-bold text-3xl">About Me</h2>
        <p className="text-lg mb-4">
          I am a fresher full-stack developer passionate about creating dynamic and responsive web applications. I specialize in both frontend and backend technologies, and I am always eager to learn and apply new skills in real-world projects.
        </p>
        <p className="text-lg">
          I have hands-on experience with technologies like HTML, CSS, JavaScript, React, Node.js, and more. I am excited to begin my career and contribute to impactful projects.
        </p>
      </div>

      {/* Education Section */}
      <div className="w-full md:w-1/2 p-4 md:p-8 py-20">
        <h2 className="text-yellow-400 flex justify-center items-center font-bold text-3xl">Education</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Bachelor of Technology in Computer Science</strong> -Anurag College of Engineering (2020 - 2024)
            <p className="text-sm text-gray-400">CGPA-7.41</p>
          
          </li>
          <li className="mb-2">
            <strong>Intermediate in MPC</strong> - SR Junior College (2018 - 2020)
            <p className="text-sm text-gray-400">Marks-983</p>
          </li>
          <li className="mb-2">
            <strong>Secondary School of Education</strong> - Sri chaitanya High School (2018)
            <p className="text-sm text-gray-400">CGPA-9.7</p>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default About;
