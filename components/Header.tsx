import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import GetInTouch from "./Contact/GetInTouch";
import { Social } from "../typings";

type Props = {socials: Social[];};

function Header({socials}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center"
      >
        {/* social icon */}
        {socials.map((social) => (
          <SocialIcon
          key={social._id}
          url={social.url}
          fgColor="lightgray"
          bgColor="transparent" />
        ))}

      </motion.div>

      <a href="#contact">
      <GetInTouch />
      </a>
    </header>
  );
}

export default Header;
