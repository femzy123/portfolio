import { motion } from "framer-motion";
import { AiFillThunderbolt } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";

const RpInc = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer{" "}
        <span className="text-textGreen tracking-wide">@RP Inc.</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2021 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Spearheaded the design and development of the SprintZero app,
          employing best software engineering practices.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Conducted in-depth research on cloud technologies to identify optimal
          solutions that would enhance the functionality and performance of the
          SprintZero app.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Collaborated closely with the project management team to contribute to
          strategic planning and ensure project milestones were achieved.
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Demonstrated meticulousness in documenting codes and technologies,
          enabling seamless knowledge transfer and efficient maintenance.
        </li>
      </ul>
    </motion.div>
  );
};

export default RpInc;
