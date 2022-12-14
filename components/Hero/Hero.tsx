import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../typings";
import BackgroundCircle from "./BackgroundCircle";

type Props = {
  pageInfo: PageInfo[];
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo[0]?.name}`,
      "I am a Front End Developer",
      "I ♡ creating beautiful websites",
      "I ♡ building performant applications",
      "I ♡ creating delightful user experiences",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  `Hi, my name is ${pageInfo[0]?.name}`
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo[0]?.heroImage).url()}
        alt="profile-image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          {pageInfo[0]?.role}
        </h2>
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
      <div className="z-20 flex flex-col sm:flex-row">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
