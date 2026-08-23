import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  links,
  note,
  platform,
}) => {
  // Projects may expose several destinations (live site, store listing, repo).
  // Older entries only carry source_code_link; confidential work carries none.
  const cardLinks =
    links && links.length
      ? links
      : source_code_link
      ? [{ label: "Visit", url: source_code_link }]
      : [];
  const primaryLink = cardLinks[0];
  const isMobile = platform?.toLowerCase().includes("mobile");

  const preview = (
    <>
      <img
        draggable={false}
        src={image}
        alt={`${name} preview`}
        className="w-full h-full object-cover rounded-2xl"
      />
      {platform && (
        <span
          className={`absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur-md ${
            isMobile
              ? "bg-emerald-500/25 text-emerald-100 ring-1 ring-emerald-300/40"
              : "bg-[#915EFF]/25 text-white ring-1 ring-[#915EFF]/50"
          }`}
        >
          {isMobile ? "📱" : "🖥"} {platform}
        </span>
      )}
    </>
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col"
      >
        {primaryLink ? (
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full h-[230px] block cursor-pointer"
          >
            {preview}
          </a>
        ) : (
          <div className="relative w-full h-[230px]">{preview}</div>
        )}

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {cardLinks.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {cardLinks.map((link) => (
              <a
                key={`${name}-${link.label}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium text-white transition hover:border-[#915EFF] hover:bg-[#915EFF]/20"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        ) : (
          note && (
            <p className="mt-5 text-[12px] italic text-secondary">{note}</p>
          )
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
