import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
        alt="skill"
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-1xl xl:text-2xl font-bold text-black opacity-100">
            100%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
