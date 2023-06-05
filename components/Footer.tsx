import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <Link href="https://github.com/femzy123" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </Link>

      <Link
        href="https://www.linkedin.com/in/obafemiogunmokun/"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </Link>

      <Link href="https://twitter.com/femzycodes" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialTwitter />
        </span>
      </Link>
    </div>
  );
};

export default Footer;
