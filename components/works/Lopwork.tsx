import { motion } from "framer-motion";
import { AiFillThunderbolt } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";

const Lopwork = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Developer{" "}
        <span className="text-textDark dark:text-textGreen tracking-wide">@Lopworks</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sept 2018 - Feb 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Demonstrated expertise in API management, utilizing IBM API Connect
          and Tyk to streamline and secure communication channels.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Leveraged Vue.js, React.js, and Elixir to build scalable applications,
          implementing robust software architecture patterns.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Led the planning and development of applications, ensuring alignment
          with client requirements and industry best practices.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Conducted comprehensive training sessions for clients&apos; staff,
          empowering them to effectively utilize various technologies.
        </li>
      </ul>
    </motion.div>
  );
};

export default Lopwork;
