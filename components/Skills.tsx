import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typing";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col max-w-[2000px] h-screen mx-auto text-center xl:px-10"
    >
      <h3 className="mt-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Skills
      </h3>
      <h3 className="uppercase text-gray-500 text-sm tracking-[3px] mt-2">
        Hover over a skill for currency profienciency
      </h3>

      <div className="flex items-center justify-center h-full">
        <div className="grid justify-center grid-cols-3 gap-5 md:grid-cols-4">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft={false} />
          ))}

          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
