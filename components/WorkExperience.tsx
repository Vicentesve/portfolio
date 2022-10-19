import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typing";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left"
    >
      <h3 className="mt-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Experience
      </h3>

      <div className="flex w-full h-full p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
