import { FlipWords } from "./flipWord";
import { motion } from "motion/react";

const heroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/*Desktop View*/}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={Variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.9 }}
        >
          Hi I'm Isa
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300 "
            variants={Variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>

          <motion.div
            variants={Variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.3 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={Variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.5 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
      {/*Mobile View*/}
      <div className="flex flex-col space-y-3 md:hidden">
        <motion.p
          className="text-4xl font-medium "
          variants={Variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.9 }}
        >
          Hi I'm Isa
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300 "
            variants={Variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={Variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.3 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={Variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.5 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default heroText;
