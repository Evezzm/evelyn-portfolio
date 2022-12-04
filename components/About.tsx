import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        about
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="-mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-64 xl:w-100 xl:h-100"
        src="https://img2.woyaogexing.com/2019/07/22/4b2e2ac865034cdfb605904a50691f77!400x400.jpeg"
      />
      <div className="space-y-10 ox-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7A80A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          A dedicated and hardworking front-end developer with proven front-end
          programming experiences and knowledge of Javascript, React.js, Redux
          Toolkit, Typescript, CSS, HTML and MongoDB. I am now looking to pivot
          my career into front-end developer role, where I can work for a
          progressive organization and actively contribute to their objectives.
        </p>
      </div>
    </div>
  );
}

export default About;
