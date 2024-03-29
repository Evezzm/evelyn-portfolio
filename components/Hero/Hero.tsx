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
      "I am a Full Stack Developer",
      "I love to create beautiful & performant products",
    ],
    loop: true,
    delaySpeed: 2000,
  });

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
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold px-8 sm:px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
      <div className="z-20 flex flex-col sm:flex-row ">
        <a href="#about">
          <button className="heroButton">About</button>
        </a>
        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>
        <a href="#projects">
          <button className="heroButton">Projects</button>
        </a>
        <a href="#experience">
          <button className="heroButton">Experience</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
