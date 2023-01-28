import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo[] };

function About({ pageInfo }: Props) {
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
        className="-mb-20 md:mb-0 flex-shrink-0 rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover md:rounded-lg md:w-64 md:h-64 xl:w-100 xl:h-100 mt-8"
        src={urlFor(pageInfo[0]?.profilePic).url()}
        alt="profile image"
      />
      <div className="space-y-5 sm:space-y-10 md:px-10">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo[0]?.backgroundInformation}</p>
      </div>
    </div>
  );
}

export default About;
