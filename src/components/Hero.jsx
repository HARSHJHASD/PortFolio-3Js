import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // start date: Jan 1, 2022 (local timezone)
  const experience = useMemo(() => {
    const start = new Date("2022-01-01T00:00:00");
    const now = new Date();

    // difference in milliseconds
    const diffMs = now - start;

    // convert to years using average year length (including leap years)
    const yearsDecimal = diffMs / (1000 * 60 * 60 * 24 * 365.25);

    // round to one decimal place
    const rounded = Math.round(yearsDecimal * 10) / 10;

    return rounded.toFixed(1); // returns string like "3.7"
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Harsh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Developer with {experience} years of experience
            <br className='sm:block hidden' />
            in Frontend Development using ReactJs.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
