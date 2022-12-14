import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import {Skill as SkillType} from "../../typings";

type Props = {
  skills: SkillType[];
};

function Skills({skills}: Props) {
  return (
    <motion.div
      initial={{ x:-200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 0.8 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-400 text-xs">
        {/* Hover over a skill for current proficiency */}
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {/* {skills?.slice(0,skills.length/2).map(skill=>(
          <Skill key={skill._id} skill={skill}/>
        ))}
        {skills?.slice(skills.length/2,skills.length).map(skill=>(
          <Skill key={skill._id} skill={skill}/>
        ))} */}
        {skills?.map(skill=>(
          <Skill key={skill._id} skill={skill}/>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
