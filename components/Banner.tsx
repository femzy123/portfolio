import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef<string | any>("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textDark dark:text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Obafemi Ogunmokun.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I&apos;m a seasoned software engineer with 6+ years of experience,
        specializing in building applications across various industries. From
        finance and education to product management and design, I have a diverse
        background in creating innovative solutions. With expertise in
        technologies such as JavaScript, TypeScript, React, and Node.js,
        I&apos;m passionate about using technology to simplify and enhance daily
        life. Explore my portfolio to see examples of my work and how I bring
        creativity and functionality to every project. <br />
        {/* <Link href="/">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group mt-2">
            Learn More
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </Link> */}
      </motion.p>

      <Link href="#project" onClick={handleScroll}>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-gray-700 dark:border-textGreen rounded-md text-gray-700 dark:text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my Projects!
        </motion.button>
      </Link>
    </section>
  );
};

export default Banner;
