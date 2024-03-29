import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="h-screen flex overflow-hidden relative flex-col text-left md:text-left md:flex-row max-x-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>
      <h3 className="absolute top-36 text-center text-wrap uppercase tracking-[3px] text-gray-400 text-xs">
        Move left and right for more projects
      </h3>
      <div className="relative w-full flex snap-x snap-mandatory z-20 mt-8 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <a href={project?.linkToBuild} target="blank">
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 0.8 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="aspect-auto w-80 sm:w-80 md:w-96"
                src={urlFor(project?.image).url()}
                alt="project"
              />
            </a>
            <div className="space-y-5 sm:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl sm:text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {project?.title}
                </span>
              </h4>
              <div className="flex flex-row items-center justify-center space-x-2">
                {project.technologies.map((tech) => (
                  <img
                    className="h-10 w-10"
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt="skill"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-center md:text-left">
                {project?.summary}
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
