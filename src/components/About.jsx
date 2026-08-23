import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          draggable={false}
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m an <span className="text-white font-semibold">AI Full-Stack (MERN) Developer</span>{" "}
        with 4+ years of experience building scalable enterprise platforms across
        ESG, EHS, FinTech and EdTech. I work end to end — React.js/Next.js and
        TypeScript on the frontend, Node.js and Express REST APIs on MongoDB on
        the backend, and React Native for mobile. I also build and ship
        Generative AI into production: LLM integration, LangChain, LangGraph and
        LangSmith, RAG pipelines, embeddings and AI agents served through custom
        backend endpoints.
      </motion.p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
        {[
          "Scalable React & Next.js architectures",
          "Node.js & Express REST APIs on MongoDB",
          "React Native mobile apps (published on Play Store)",
          "LLM apps, RAG, AI agents (OpenAI, Gemini, LangChain)",
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-secondary"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
