import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typing";
import { urlFor } from "../sanity";

type Props = { skill: Skill; directionLeft: boolean };

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className="object-cover w-20 h-20 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale md:w-24 md:h-24"
      />
      <div className="absolute z-0 w-20 h-20 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32 md:w-24 md:h-24">
        <div className="flex flex-col items-center justify-center h-full text-black">
          <h3 className="text-sm font-semibold tracking-[3px]">
            {skill?.title}
          </h3>
          <p className="text-sm font-semibold text-gray-500 opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
