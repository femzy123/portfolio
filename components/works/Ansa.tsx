import { motion } from "framer-motion";
import { AiFillThunderbolt } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";

const Ansa = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Developer Intern{" "}
        <span className="text-textDark dark:text-textGreen tracking-wide">
          @ANSA
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2013 - Nov 2013
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Developed an intranet web application for sales reporting, utilizing
          sound software architecture principles.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Conducted repair and maintenance of computer hardware, ensuring
          reliable and efficient systems.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Successfully handled administrative duties, contributing to the smooth
          functioning of the organization.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Installed computer system software, ensuring a secure and optimized
          computing environment.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Prepared detailed weekly reports on ongoing projects, enabling
          effective project tracking and communication.
        </li>
      </ul>
    </motion.div>
  );
};

export default Ansa;
