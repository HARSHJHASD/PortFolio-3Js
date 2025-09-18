import React from "react";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

// manual skill list (you can also keep this in constants.js if preferred)
const skills = [
  // Core Web
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "DOM",

  // Frontend Frameworks & Libraries
  "React.js",
  "Next.js",
  "Three.js",
  "Framer Motion",
  "Redux",
  "Context API",
  "Hooks",
  "JSX",

  // UI / Styling
  "Tailwind CSS",
  "Material UI",
  "Chakra UI",
  "NPM",
  "UI Development",
  "Responsive Design",

  // Data Visualization
  "D3.js",
  "Highcharts",

  // Tools & Utilities
  "Git",
  "Axios",
  "WebSockets",
  "Ag-Grid",
  "Orval",

  // Backend Basics
  "Node.js",

  // Soft Skills
  "Communication Skills",
  "Leadership",
  "Planning",
  "Management",
];



const Tech = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      {/* Existing Ball UI */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Inline bullet-separated skills */}
      <div className="mt-6 max-w-5xl text-center text-secondary text-[16px] leading-relaxed px-4">
        {skills.map((skill, idx) => (
          <span key={skill}>
            {skill}
            {idx < skills.length - 1 && <span className="mx-2">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
