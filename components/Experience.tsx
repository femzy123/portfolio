import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import RpInc from "./works/RpInc";
import Nativshark from "./works/Nativshark";

const Experience = () => {
  const [rpinc, setRpinc] = useState(true)
  const [nativshark, setNativshark] = useState(false)
  const [lopwork, setLopwork] = useState(false)
  const [enovait, setEnovait] = useState(false)

  const selectRP = () => {
    setRpinc(true)
    setNativshark(false)
    setLopwork(false)
    setEnovait(false)
  }

  const selectNativshark = () => {
    setRpinc(false);
    setNativshark(true);
    setLopwork(false);
    setEnovait(false);
  };

  const selectLopworks = () => {
    setRpinc(false);
    setNativshark(false);
    setLopwork(true);
    setEnovait(false);
  };

  const selectEnovait = () => {
    setRpinc(false);
    setNativshark(false);
    setLopwork(false);
    setEnovait(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title='"Where I have worked' />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={selectRP}
            className={`border-l-2 ${
              rpinc ? "border-l-textGreen" : "border-l-hoverColor"
            } text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            RP Inc.
          </li>
          <li
            onClick={selectNativshark}
            className={`border-l-2 ${
              nativshark ? "border-l-textGreen" : "border-l-hoverColor"
            } text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            NativShark
          </li>
          <li
            onClick={selectLopworks}
            className={`border-l-2 ${
              lopwork ? "border-l-textGreen" : "border-l-hoverColor"
            } text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Lopworks Limited
          </li>
          <li
            onClick={selectEnovait}
            className={`border-l-2 ${
              enovait ? "border-l-textGreen" : "border-l-hoverColor"
            } text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Enovait
          </li>
        </ul>
        {rpinc && <RpInc />}
        {nativshark && <Nativshark />}
      </div>
    </section>
  );
};

export default Experience;
