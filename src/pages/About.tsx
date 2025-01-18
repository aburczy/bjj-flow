import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-light min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl text-left">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Discover the Spirit of BJJ Flow
        </h1>
        <p className="text-lg text-dark leading-relaxed mb-8">
          At <span className="text-secondary font-semibold">BJJ Flow</span>, we
          believe that Brazilian Jiu-Jitsu is more than just a martial art —
          it's a journey of self-improvement, resilience, and connection. Our
          mission is to provide practitioners of all levels with the tools and
          resources to progress, both on and off the mats.
        </p>
        <p className="text-lg text-dark leading-relaxed">
          From mastering techniques to tracking progress and connecting with
          like-minded individuals,{" "}
          <span className="text-secondary font-semibold">BJJ Flow</span> is your
          ultimate companion for achieving your goals and embracing the true
          spirit of BJJ.
        </p>
        <button className="mt-8 bg-secondary hover:bg-primary text-light font-bold py-2 px-6 rounded transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
