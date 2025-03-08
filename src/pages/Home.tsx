import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <section>
      <div className="bg-light min-h-screen flex flex-col">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center flex-grow max-w-5xl mx-auto px-4"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-secondary text-2xl font-semibold text-[3.75rem] leading-[110%] tracking-[-0.075rem] word-spacing-[-0.075rem] m-0 whitespace-pre-wrap pb-8 text-left"
          >
            Plan, personalize and optimize your grappling game.
          </motion.h2>
        </motion.main>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="bg-dark text-light py-4 text-center text-sm"
        >
          © 2025 BJJ Flow. All rights reserved.
        </motion.footer>
      </div>
    </section>
  );
};

export default Home;
