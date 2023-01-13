import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};
function GetInTouch({}: Props) {
  return (
    <div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <div className="pr-2">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="lightgray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-300 pr-2">
          Get In Touch
        </p>
        </div>
      </motion.div>
    </div>
  );
}

export default GetInTouch;
