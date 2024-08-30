import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-96 bg-gradient-to-tl from-gray-200 to-white  flex justify-center items-center">
      <div className="grid-cols grid-row-1 px-8">

      <div className="text-center">
        {/* Animated heading */}
        <h1 className="text-4xl font-bold text-gray-800 animate-fadeInUp">
          Welcome to SkillHub
        </h1>
        {/* Animated subheading */}
        <p className="mt-4 text-lg text-gray-600 animate-fadeInUp delay-100">
          Empowering your learning journey with expert-led courses.
        </p>
        {/* Animated button */}

        <button className=" mt-8 px-6 py-3 bg-gray-300 text-black hover:text-white font-semibold rounded-lg shadow-lg hover:bg-gray-500 transition-transform transform hover:scale-105 animate-fadeInUp delay-200">
          Get Started
        </button>
      </div>
      </div>
      <div className="text-center">
      <img width={400} src="images/skill.png"  alt="" />
      </div>
    </div>
  );
};

export default Hero;
