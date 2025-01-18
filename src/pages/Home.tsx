import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-light min-h-screen flex flex-col">
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-secondary text-2xl font-semibold">
          Welcome to BJJ Flow!
        </h2>
        <p className="text-dark mt-4 text-center">
          Your ultimate companion to progress in Brazilian Jiu-Jitsu.
        </p>
        <button className="mt-6 bg-secondary hover:bg-primary text-light font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </main>

      <footer className="bg-dark text-light py-4 text-center text-sm">
        © 2025 BJJ Flow. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
