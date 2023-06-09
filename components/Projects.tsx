import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { covid, femgpt, femgram, nativshark, sprintzero, sumzy } from "../public/assets";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />

      <div className="flex flex-col gap-14">
        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-28 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://femgpt.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-[full] h-full object-contain"
                src={femgpt}
                alt="femgpt"
              />
            </div>
          </Link>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">
            Featured Project
          </p> */}
            <h3 className="text-2xl font-bold">FemGPT</h3>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              FemGPT is an advanced ChatGPT clone app built with JavaScript,
              Node.js, HTML, and CSS. It offers a seamless interface for
              engaging in intelligent and dynamic conversations. With its
              powerful natural language processing capabilities, FemGPT allows
              users to ask questions, seek recommendations, and have meaningful
              discussions.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Javascript</li>
              <li>Nodejs</li>
              <li>HTML & CSS</li>
              <li>OpenAI</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row-reverse items-center justify-center gap-28 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://nativshark.com"
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
              NativShark is a revolutionary language learning platform that
              leverages artificial intelligence and immersive techniques to
              provide a highly effective and engaging language learning
              experience. With personalized lessons, interactive exercises, and
              real-time feedback, NativShark empowers learners to master new
              languages with confidence and fluency.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Tailwindcss</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-28 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://sumzy.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-[full] h-full object-contain"
                src={sumzy}
                alt="sprintzero"
              />
            </div>
          </Link>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">
            Featured Project
          </p> */}
            <h3 className="text-2xl font-bold">Sumzy</h3>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              Sumzy is an open-source article summarizer that simplifies your
              reading experience by transforming lengthy articles into clear and
              concise summaries. It utilizes the power of OpenAI GPT-4 to
              provide efficient and accurate summaries.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Tailwindcss</li>
              <li>Redux</li>
              <li>OpenAI</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row-reverse items-center justify-center gap-28 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://covid-19-tracker-2257e.web.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-[full] h-full object-contain"
                src={covid}
                alt="covid app"
              />
            </div>
          </Link>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-right xl:-mr-16 z-10">
            <h3 className="text-2xl font-bold">Covid 19 Tracker</h3>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              Covid19-tracker is a comprehensive and user-friendly app designed
              to track and display up-to-date Covid-19 data from around the
              world. Built with React, Firebase, Chart.js, and Leaflet, this app
              provides a seamless and informative experience for users seeking
              accurate information on the global pandemic.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Firebase</li>
              <li>Leaflet</li>
              <li>Chartjs</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-28 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://femgram-37983.web.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-[full] h-full object-contain"
                src={femgram}
                alt="femgram"
              />
            </div>
          </Link>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">
            Featured Project
          </p> */}
            <h3 className="text-2xl font-bold">Femgram</h3>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              Femgram is a stylish photo gallery web app powered by React,
              Firebase, and Framer Motion. It provides a seamless user
              experience for browsing and showcasing photos. With its minimalist
              design, secure cloud storage, and elegant animations, Femgram
              offers a visually appealing way to explore stunning photographs on
              any device.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Framer Motion</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
