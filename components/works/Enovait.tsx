import { motion } from "framer-motion";
import { AiFillThunderbolt } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";

const Enovait = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer{" "}
        <span className="text-textGreen tracking-wide">@Enovait</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2015 - April 2018
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Created dynamic and user-friendly websites tailored to meet
          clients&apos; specific needs, employing modern web development
          frameworks.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Developed custom PC applications, ensuring seamless user experiences
          and optimized performance.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Demonstrated proficiency in installing computer system software,
          ensuring smooth operations and compatibility.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Facilitated training sessions for fellow employees, enhancing their
          skills and knowledge in software development practices.
        </li>
      </ul>
    </motion.div>
  );
};

export default Enovait;
