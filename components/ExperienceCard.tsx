import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="mt-16 flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="rounded-full w-24 h-24 object-cover object-center md:w-24 md:h-24 xl:w-32 xl:h-32 mt-2"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4md font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2 flex-row justify-center md:justify-start">
          {experience?.technologies?.map((tech) => (
            <img
              key={tech._id}
              className="w-10 h-10 rounded-full "
              src={urlFor(tech.image).url()}
              alt="tech"
            />
          ))}
        </div>
        <p className="uppercase text-sm py-5 text-gray-500">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-2 pr-2 w-99/100 text-md text-left h-56 lg:h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
