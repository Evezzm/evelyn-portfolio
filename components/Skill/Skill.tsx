import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  // directionLeft?: boolean;
  skill: SkillType;
};

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        src={urlFor(skill?.image).url()}
        alt="skill"
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm sm:text-xl text-center font-bold text-black opacity-100 overflow-wrap:break-word">
            {skill?.skillName}
            <br />
            {skill?.skillNameExtended}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
