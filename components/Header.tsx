import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import GetInTouch from "./GetInTouch";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center"
      >
        {/* social icon */}
        <SocialIcon
          url="https://github.com/Evezzm"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Evezzm"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/evelyn-zeng/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      {/* <Link href="#contact-me"> */}
      <GetInTouch />
      {/* </Link> */}
    </header>
  );
}

export default Header;
