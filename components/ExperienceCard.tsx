import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="rounded-full w-24 h-24 object-cover object-center md:w-24 md:h-24 xl:w-32 xl:h-32"
        src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4md font-light">Front-end Developer</h4>
        <p className="font-bold text-2xl mt-1">Async Working</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-10 h-10 rounded-full "
            src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full "
            src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full "
            src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-500">Started work</p>
        <ul className="list-disc space-y-4 ml-5 text-md">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
