import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-light min-h-screen flex flex-col">
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-secondary text-2xl font-semibold text-[3.75rem] leading-[110%] tracking-[-0.075rem] word-spacing-[-0.075rem] m-0 whitespace-pre-wrap pb-8">
          Welcome to BJJ Flow !
        </h2>
      </main>

      <footer className="bg-dark text-light py-4 text-center text-sm">
        © 2025 BJJ Flow. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
