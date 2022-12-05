import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 2, 2, 1];
  return (
    <div 
    className="h-screen flex overflow-hidden relative flex-col text-left md:text-left md:flex-row max-x-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.8 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="w-56 h-56 md:w-64 md:h-64 xl:w-72 xl:h-72"
              src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
              alt="project"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">Case</span>
              </h4>
              <p className="text-lg text-center md:text-left">
                Created real-time dashboards of recruitment candidates features
                for customer on AWS Quicksight with AWS RedShift reporting data
                warehouse.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top=[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
