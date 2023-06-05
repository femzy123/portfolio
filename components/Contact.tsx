import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        What&apos;s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Currently looking for any new opportunities, my inbox is always open.
        WHather you have a question or just want to say hi, I&apos;ll surely get
        back to you!
      </p>
      <Link href="mailto:obafemiogunmokun@gmail.com">
        <button className="w-40 h-14 border border-textGreen rounded">Say Hello</button>
      </Link>
    </section>
  );
};

export default Contact;
