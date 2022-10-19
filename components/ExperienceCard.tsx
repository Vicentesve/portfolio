import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center justify-center  space-y-7 flex-shrink-0 w-[350px] md:w-[400px] xl:w-[600px] snap-center bg-[#292929] 
    p-10 opacity-40 transition-opacity duration-200 cursor-pointer overflow-hidden hover:opacity-100 "
    >
      {/* <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center bg-white"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      /> */}

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="mt-1 text-2xl font-semibold">{experience?.company}</p>
        <div className="flex my-2 space-x-2">
          {experience?.technologies?.map((techImage) => (
            <h1 key={techImage._id}>hola</h1>
            /* <motion.img
              key={techImage._id}
              className="object-cover w-8 h-8 bg-white rounded-full"
              src={urlFor(techImage.image).url()}
            /> */
          ))}
        </div>
        <p className="pb-5 text-gray-300 uppercase ">
          {new Date(experience.dataStarted).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
          })}{" "}
          -{" "}
          {experience.isCurrentWorkingHere
            ? "Present"
            : new Date(experience.dataEnded).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
              })}
        </p>

        <ul className="ml-5 text-lg list-disc">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
