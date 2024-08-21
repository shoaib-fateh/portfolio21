"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

const SkillsSection = () => {
  let width_height = {
    width: 80,
    height: 80,
  };
  const Frontend_skill = [
    {
      skill_name: "Html 5",
      Image: "/html.png",
      width_height,
    },
    {
      skill_name: "Css",
      Image: "/css.png",
      width_height,
    },
    {
      skill_name: "Java Script",
      Image: "/js.png",
      width_height,
    },
    {
      skill_name: "Tailwind Css",
      Image: "/tailwind.png",
      width_height,
    },
    {
      skill_name: "Bootstrap",
      Image: "/boostrap.jpeg",
      width_height,
    },
    {
      skill_name: "React",
      Image: "/react.png",
      width_height,
    },
    {
      skill_name: "Redux",
      Image: "/redux.png",
      width_height,
    },
    {
      skill_name: "Type Script",
      Image: "/ts.png",
      width_height,
    },
    {
      skill_name: "Next js 13",
      Image: "/next.png",
      width_height,
    },
  ];
  const Backend_skill = [
    {
      skill_name: "Material UI",
      Image: "/mui.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Node js",
      Image: "/node-js.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Github",
      Image: "/github.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Git",
      Image: "/git.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Postger SQL",
      Image: "/postger.png",
      width: 70,
      height: 70,
    },
  ];

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[18px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-7" />
          <h1 className="text-white text-[13px]">Think Different</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[10px]"
        >
          Make Modern Web Applications
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          className="cursive text-[20px] text-gray-200 mb-10 text-center"
        >
          Never miss a task, deadline or idea
        </motion.div>
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width_height.width}
            height={image.width_height.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
