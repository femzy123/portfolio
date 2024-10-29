import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { profileImg } from "../public/assets";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About" />

      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            With over six years of experience as a software engineer, I have
            contributed to diverse sectors including finance, education, product
            management, design, and SaaS by building impactful applications. My
            technical expertise spans a robust stack of modern technologies like
            JavaScript, TypeScript, React, Next.js, Node.js, Nest.js, GCP, and
            AWS, which I leverage to create functional and efficient solutions.
          </p>
          <p>
            As a full-stack engineer, I bring a deep understanding of both
            front-end and back-end development, enabling me to seamlessly manage
            the entire software development lifecycle.
          </p>
          <p>
            I am driven by a passion for harnessing technology to make a
            tangible difference in people&apos;s lives. My focus is on building
            applications and systems that enhance productivity, streamline
            processes, and simplify daily tasks for users. This commitment to
            improving user experiences has been the cornerstone of my work
            throughout my career.
          </p>
          {/* <p>
            Looking ahead, my aspirations extend towards the realms of AI and
            cybersecurity. I am eager to dive deeper into these fields,
            leveraging artificial intelligence to develop intelligent systems
            that can automate complex tasks and enhance decision-making
            processes. Additionally, I am keen on contributing to the
            cybersecurity landscape, working towards building robust and secure
            applications that safeguard sensitive data and protect against
            evolving threats.
          </p> */}
          <p>
            With a dedication to continuous learning and a desire to stay at the
            cutting edge, I am committed to expanding my expertise and
            delivering innovative solutions that positively impact both
            individuals and businesses.
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              ReactJs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              NodeJs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              NextJs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              Google Cloud
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              AWS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              Supabase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              Mongodb
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textDark dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              PostgreSql
            </li>
          </ul>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover object-top"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>

            <div className="hidden absolute left-6 top-6 lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
