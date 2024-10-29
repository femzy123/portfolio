import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import Image from "next/image";
import {
  covid,
  femgpt,
  femgram,
  interviewsim,
  medfinder,
  nativshark,
  sprintzero,
  sumzy,
  tcmp,
} from "../public/assets";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />

      <div className="flex flex-col gap-14">
        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-12 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="http://interviewsim.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-[full] h-full object-contain"
                src={interviewsim}
                alt="interviewsim"
              />
            </div>
          </Link>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">
            Featured Project
          </p> */}
            <Link
              href="http://interviewsim.vercel.app/"
              target="_blank"
              className="text-2xl font-bold"
            >
              InterviewSim
            </Link>
            <p className="bg-gray-200 dark:bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              InterviewSim is an innovative, AI-driven platform designed to
              revolutionize the interview preparation process. Leveraging
              cutting-edge natural language processing and machine learning
              algorithms, InterviewSim simulates real-world job interviews,
              providing users with personalized practice sessions, expert
              feedback, and actionable insights to improve their responses.
              Built utilizing advanced AI technology, InterviewSim&apos;s
              adaptive learning system continuously learns and refines its
              questioning and feedback mechanisms, ensuring users receive the
              most effective and relevant preparation for acing their next
              interview.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Typescript</li>
              <li>Postgres</li>
              <li>Supabase</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row-reverse items-center justify-center gap-12 lgl:gap-0 mt-10">
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
            <Link
              href="https://nativshark.com"
              target="_blank"
              className="text-2xl font-bold"
            >
              Nativshark
            </Link>
            <p className="bg-gray-200 dark:bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
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

        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-12 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://medfinder.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-[full] h-full object-contain"
                src={medfinder}
                alt="medfinder"
              />
            </div>
          </Link>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <Link
              href="https://medfinder.vercel.app/"
              target="_blank"
              className="text-2xl font-bold"
            >
              Medfinder
            </Link>
            <p className="bg-gray-200 dark:bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              MedFinder is an innovative location-based platform streamlining
              healthcare access by connecting users with nearby medical
              facilities, pharmacies, and healthcare services. Leveraging
              advanced mapping technology and a comprehensive database,
              MedFinder enables effortless searching, location, and navigation
              to providers, saving time and stress in urgent situations. Built
              with cutting-edge web technologies, MedFinder&apos;s intuitive
              interface and precise geolocation ensure a seamless experience,
              providing proximity-based search, detailed provider information,
              turn-by-turn directions, and specialized care filters, ultimately
              enhancing healthcare accessibility and efficiency.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row-reverse items-center justify-center gap-12 lgl:gap-0 mt-10">
          <Link
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://oautcmp.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-[full] h-full object-contain"
                src={tcmp}
                alt="tcmp"
              />
            </div>
          </Link>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-right xl:-mr-16 z-10">
            <Link
              href="https://oautcmp.com"
              target="_blank"
              className="text-2xl font-bold"
            >
              TCMP
            </Link>
            <p className="bg-gray-200 dark:bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              TCMP is a pioneering telemedicine platform bridging the healthcare
              gap in rural areas. By connecting patients with licensed
              healthcare professionals through secure, remote consultations,
              TCMP enhances access to quality medical care, regardless of
              geographical constraints. With a focus on underserved communities,
              TCMP improves health outcomes, reduces disparities, and empowers
              rural populations to manage their well-being.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Vue</li>
              <li>Typescript</li>
              <li>Nodejs</li>
              <li>Tailwindcss</li>
              <li>Postgres</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-12 lgl:gap-0 mt-10">
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
            <Link
              href="https://sumzy.netlify.app/"
              target="_blank"
              className="text-2xl font-bold"
            >
              Sumzy
            </Link>
            <p className="bg-gray-200 dark:bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
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

        <div className="w-full flex flex-col xl:flex-row-reverse items-center justify-center gap-12 lgl:gap-0 mt-10">
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
            <Link
              href="https://covid-19-tracker-2257e.web.app/"
              target="_blank"
              className="text-2xl font-bold"
            >
              Covid 19 Tracker
            </Link>
            <p className="bg-gray-200 dark:bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
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
      </div>
    </section>
  );
};

export default Projects;
