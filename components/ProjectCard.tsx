import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="flex flex-col relative items-center overflow-hidden rounded-3xl shadow-lg border border-[#2A0E61] h-[500px] mx-[2%] py-[5px]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="h-[50%] object-contain w-[110%] bg-opacity-10"
      />

      <div className=" pt-[-16px]  h-[50%] px-3 md:h-[40%] my-[3%]">
        <h1 className="text-2xl font-semibold text-white text-center">
          {title}
        </h1>
        <p className="mt-2 md:text-[15px] max-sm:text-[13px]  text-gray-300">
          {description}
        </p>
      </div>

      <button className="border font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full mb-5">
        <span>read more</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
    </div>
  );
};

export default ProjectCard;
