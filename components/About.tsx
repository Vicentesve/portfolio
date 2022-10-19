import React from "react";
import about_img from "../public/profile_pic.png";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen px-10 mx-auto text-center"
    >
      <h3 className="mt-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      <div className="flex flex-col items-center h-full p-10 mx-auto space-x-5 max-w-7xl md:flex-row">
        {/* <motion.img
          src={urlFor(pageInfo?.profilePic).url()}
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex-shrink-0 object-cover w-56 h-56 rounded-full  md:rounded-lg 
        md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"
        /> */}
        <div className="mt-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">
              little background
            </span>
          </h4>
          <p className="mt-5 text-sm">{pageInfo?.backgroundInformation}</p>
        </div>
      </div>
    </motion.div>
  );
}
