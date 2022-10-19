import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const projets = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col max-w-[2000px] h-screen mx-auto text-center xl:px-10"
    >
      <h3 className="mt-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full h-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {projects.map((project, i) => (
          <div
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-full p-20 space-y-5 snap-center md:p-44"
            key={project._id}
          >
            <a
              className="h-[60%] flex justify-center"
              href={project.linkToBuild}
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-full"
                src={urlFor(project.image).url()}
                alt=""
              />
            </a>

            <div className="max-w-6xl space-y-10 md:px-10">
              <h4 className="text-2xl font-semibold text-center md:text-4xl">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              <div className="flex items-center justify-center space-x-5">
                {project?.technologies?.map((technology) => (
                  <motion.img
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt=""
                    width="35"
                    className="object-cover w-10 h-10 rounded-full"
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
        {/* {projets.map((project, i) => (
          <div
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-full p-20 space-y-5 snap-center md:p-44"
            key={i}
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-[100px]"
              key={i}
              src="/about_photo.jpg"
              alt=""
            />

            <div className="max-w-6xl space-y-10 md:px-10">
              <h4 className="text-2xl font-semibold text-center md:text-4xl">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projets.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                recusandae vel molestias modi, iusto, error quis facilis odio
                voluptates natus maxime aut quasi, id nisi sapiente
                exercitationem labore tempora amet!
              </p>
            </div>
          </div>
        ))} */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
