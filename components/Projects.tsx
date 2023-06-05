import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { nativshark, sprintzero } from "../public/assets";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />

      <div className="flex flex-col gap-14">
        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-28 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://web.sprintzero.app"
            target="_blank"
          >
            <div>
              <Image
                className="w-[full] h-full object-contain"
                src={sprintzero}
                alt="sprintzero"
              />
            </div>
          </Link>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">
            Featured Project
          </p> */}
            <h3 className="text-2xl font-bold">Sprintzero</h3>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              A product design/management application built to help manage
              products from conception to launch and beyond.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Firebase</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Tailwindcss</li>
              <li>ANT Design</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row-reverse items-center justify-center gap-28 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://web.sprintzero.app"
            target="_blank"
          >
            <div>
              <Image
                className="w-[full] h-full object-contain"
                src={nativshark}
                alt="nativshark"
              />
            </div>
          </Link>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-right xl:-mr-16 z-10">
            <h3 className="text-2xl font-bold">Nativshark</h3>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              A product design/management application built to help manage
              products from conception to launch and beyond.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Firebase</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Tailwindcss</li>
              <li>ANT Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
