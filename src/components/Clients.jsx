import { motion } from "framer-motion";
import React from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const clients = [
  { name: "Endurance", short: "EN", accent: "from-[#7c3aed] to-[#38bdf8]" },
  { name: "Rubamin", short: "RU", accent: "from-[#14b8a6] to-[#2dd4bf]" },
  { name: "Rane", short: "RA", accent: "from-[#f59e0b] to-[#fb923c]" },
  { name: "SRF", short: "SR", accent: "from-[#ec4899] to-[#8b5cf6]" },
  { name: "APRAVA", short: "AP", accent: "from-[#2563eb] to-[#60a5fa]" },
  { name: "WEX", short: "WX", accent: "from-[#0f766e] to-[#34d399]" },
  { name: "OTSUKA", short: "OT", accent: "from-[#d946ef] to-[#f472b6]" },
  { name: "GreenLam", short: "GL", accent: "from-[#22c55e] to-[#84cc16]" },
  { name: "MamaStop", short: "MS", accent: "from-[#7c3aed] to-[#38bdf8]" },
  { name: "DevLabs", short: "DL", accent: "from-[#14b8a6] to-[#2dd4bf]" },
  { name: "50Fin", short: "50", accent: "from-[#f59e0b] to-[#fb923c]" },
  { name: "SudChemie", short: "SC", accent: "from-[#2563eb] to-[#60a5fa]" },
];

const ClientCard = ({ client, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.45)}
    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#915EFF]/50"
  >
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${client.accent} text-sm font-bold text-white shadow-lg`}
    >
      {client.short}
    </div>
    <div>
      <h3 className="text-[16px] font-semibold text-white">{client.name}</h3>
      <p className="text-sm text-secondary">Partner / client collaboration</p>
    </div>
  </motion.div>
);

const Clients = () => {
  return (
    <div className="mt-16 rounded-[20px] border border-white/10 bg-black-100/70 p-6 sm:p-8">
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Trusted by teams worldwide</p>
        <h2 className={styles.sectionHeadText}>Clients I’ve Worked With and For.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-tertiary/70 px-4 py-3 text-center text-sm text-secondary"
      >
        <span className="rounded-full bg-[#915EFF]/20 px-3 py-1 font-semibold text-[#915EFF]">
          100+ clients globally
        </span>
        <span>Applications and digital experiences used across diverse industries worldwide.</span>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {clients.map((client, index) => (
          <ClientCard key={client.name} client={client} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Clients, "clients");
