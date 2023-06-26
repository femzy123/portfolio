import { motion } from "framer-motion";
import { AiFillThunderbolt } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";

const Nativshark = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Fullstack Engineer{" "}
        <span className="text-textDark dark:text-textGreen tracking-wide">
          @Nativshark
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        March 2020 - Dec 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Played a key role in developing the core engine that powered the
          NativShark platform, employing sound software architecture principles.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Conducted extensive research on cloud technologies, leveraging
          findings to optimize and enhance the NativShark platform.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Contributed to project management planning, ensuring alignment with
          business objectives and timely deliverables.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textDark dark:text-textGreen">
            <TiArrowForward />
          </span>
          Ensured comprehensive documentation of codes and technologies,
          enabling effective collaboration and future scalability.
        </li>
      </ul>
    </motion.div>
  );
};

export default Nativshark;
