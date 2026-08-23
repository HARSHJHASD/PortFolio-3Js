import React from "react";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";

// Grouped skills, mirroring the resume.
const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "HTML5",
      "CSS3",
      "SSR",
      "Responsive Design",
    ],
  },
  {
    label: "Libraries",
    items: [
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Material UI",
      "Chakra UI",
      "Tailwind CSS",
      "Framer Motion",
      "AG Grid",
      "D3.js",
    ],
  },
  {
    label: "Backend & DB",
    items: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "Microservices",
      "MongoDB",
      "MongoDB Atlas",
      "MongoDB Compass",
    ],
  },
  {
    label: "AI & GenAI",
    items: [
      "OpenAI API",
      "Google GenAI API",
      "LLM Integration",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "RAG",
      "Prompt Engineering",
      "Embeddings & Vector DBs",
      "AI Agents",
      "GenAI with Node.js",
      "MCP",
      "Hugging Face",
      "Tokenization & Usage Tracking",
    ],
  },
  {
    label: "Tools & Testing",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Webpack",
      "Jest + React Testing Library",
      "Figma",
      "Claude",
      "Cursor",
      "GitHub Copilot",
    ],
  },
];

const Tech = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="w-full text-center">
        <p className={styles.sectionSubText}>Tools I use</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </div>
      {/* Existing Ball UI */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Grouped skill chips */}
      <div className="mt-4 w-full max-w-5xl space-y-5 px-4">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#915EFF]">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-tertiary px-3 py-1.5 text-[13px] text-white-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
