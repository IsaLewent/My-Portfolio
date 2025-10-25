import { useState } from "react";
import { motion } from "motion/react";
const Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

function Navigation() {
  return (
    <ul className="nav-ul">
      <motion.li
        className="nav-li"
        variants={Variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5, ease: "easeInOut" }}
      >
        <a href="#home" className="nav-link">
          Home
        </a>
      </motion.li>
      <motion.li
        className="nav-li"
        variants={Variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.3, ease: "easeInOut" }}
      >
        <a href="#about" className="nav-link">
          About
        </a>
      </motion.li>
      {/* <li className="nav-li">
        <a href="#work" className="nav-link">
          Work
        </a>
      </li> */}
      <motion.li
        className="nav-li"
        variants={Variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, ease: "easeInOut" }}
      >
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </motion.li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40"
      id="home"
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <motion.a
            href="#"
            variants={Variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8, ease: "easeInOut" }}
            className="text-[30px] font-bold transition-colors text-neutral-400 hover:text-lavender"
          >
            Isa
          </motion.a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white  sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div className="block overflow-hidden text-center sm:hidden">
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
