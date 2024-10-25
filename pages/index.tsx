import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import {motion} from "framer-motion"
import Banner from "../components/Banner";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Obafemi Ogunmokun</title>
        <meta name="description" content="Obafemi Ogunmokun Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="w-full h-screen font-bodyFont bg-gray-100 dark:bg-bodyColor text-bodyColor dark:text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>

          <div className="h-[88vh] w-full mx-auto p-4">
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            {/* <div className="flex justify-center text-[10px]">
              Design inspired by:{" "}
              <Link href="https://brittanychiang.com/" target="_blank" className="ml-1">
                Brittany Chiang
              </Link>{" "}
            </div> */}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;
