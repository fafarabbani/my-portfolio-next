/**
 * @copyright 2025 fafarabbani
 * @license
 */

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "./burst-bload";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex justify-center">
        <SectionHeading>👨‍💻 About Me</SectionHeading>
        <BurstBload />
      </div>
        <p>
          Hello, <span className='font-bold'>I'm Fafa!</span> My full name is <span className='font-bold'>Muhammad Izzuddin Fadlurrahman Ar Rabbani.</span> I have a passion for programming. I am dedicated to continually expanding my knowledge and skills in <span className='font-bold'>full-stack web development</span> while also learning new technologies. My favorite part of programming is the problem-solving aspect. I love the feeling of finally finding a solution to a problem. My core stack is <span className='font-bold'>PHP, React, Next.js, and Node.js.</span> I am always looking to learn new technologies. I am currently looking for a <span className='font-bold'>full-time position</span> as a software developer.
        </p>
    </motion.section>
  );
}
