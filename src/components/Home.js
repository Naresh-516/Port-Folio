import React from 'react';
import img from '../Assets/pic.jpg';

const Home = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col md:flex-row justify-center items-center py-40 md:items-start md:gap-5">
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center md:items-center items-start">
  <p className="text-3xl font-semibold mb-4 mr-0 md:text-center text-left">Hello,</p>
  <p className="text-5xl font-bold mb-2 md:text-center text-left">
    This is <span className="text-yellow-400">Kashetti Naresh</span>
  </p>
  <p className="text-xl mb-4 md:text-center text-left">Software Developer</p> 
  <p className="text-md font-light md:text-center text-left">
    Enthusiastic software developer with a passion for coding, eager to apply strong problem-solving skills and technical knowledge to real-world projects.
  </p>
</div>

      <div className="w-full md:w-1/2 p-4 md:p-8 flex justify-center md:justify-center">
        <img
          src={img}
          alt="profile pic"
          className="rounded-3xl shadow-lg w-60 h-60 object-cover md:w-80 md:h-80"
        />
      </div>
    </div>
  );
};

export default Home;
