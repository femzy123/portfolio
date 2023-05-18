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
        <span className="text-textGreen tracking-wide">@Nativshark</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Design and Development of the SprintZero app.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Research on cloud technologies to determine how they can benefit the
          SprintZero app.
        </li>
      </ul>
    </motion.div>
  );
};

export default Nativshark;
