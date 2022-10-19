import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import BackGroundCircles from "./BackGroundCircles";
import profile_pic from "../public/profile_pic.png";
import pp from "../public/pp.png";
import Link from "next/link";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackGroundCircles />

      {/* Hero Picture */}
      <Image
        className="relative object-cover mx-auto rounded-full"
        loader={() => urlFor(pageInfo?.heroImage).url()}
        unoptimized={true}
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
        width="130"
        height="130"
      />

      <div className="z-20">
        {/* Titles */}
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="px-10 text-5xl font-semibold text-center] lg:text-6xl">
          <Typewriter
            options={{
              strings: [`Hey there, I am ${pageInfo?.title}`],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* About */}
        <div className="pt-5">
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
    </div>
  );
}
