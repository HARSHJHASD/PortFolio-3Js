import { motion } from "framer-motion";
import React from "react";

import { clients } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const envLabel = {
  live: { text: "Live", className: "bg-emerald-500/15 text-emerald-300" },
  uat: { text: "UAT", className: "bg-amber-500/15 text-amber-300" },
  dev: { text: "Dev", className: "bg-sky-500/15 text-sky-300" },
};

const ClientCard = ({ client, index }) => {
  const badge = client.env ? envLabel[client.env] : null;
  const isLinked = Boolean(client.url);

  const card = (
    <>
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${client.accent} text-sm font-bold text-white shadow-lg`}
      >
        {client.short}
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-[16px] font-semibold text-white">
            {client.name}
          </h3>
          {badge && (
            <span
              className={`rounded-full px-2 py-[2px] text-[10px] font-semibold uppercase tracking-wide ${badge.className}`}
            >
              {badge.text}
            </span>
          )}
        </div>
        <p className="truncate text-sm text-secondary">{client.scope}</p>
      </div>
      {isLinked && (
        <span className="ml-auto shrink-0 text-secondary transition group-hover:text-[#915EFF]">
          ↗
        </span>
      )}
    </>
  );

  const shell =
    "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#915EFF]/50";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.08, 0.45)}>
      {isLinked ? (
        <a
          href={client.url}
          target="_blank"
          rel="noreferrer"
          className={shell}
          title={`Open ${client.name}`}
        >
          {card}
        </a>
      ) : (
        <div className={shell}>{card}</div>
      )}
    </motion.div>
  );
};

const Clients = () => {
  return (
    <div className="mt-16 rounded-[20px] border border-white/10 bg-black-100/70 p-6 sm:p-8">
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Enterprise work</p>
        <h2 className={styles.sectionHeadText}>
          Clients I’ve Built Platforms For.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-tertiary/70 px-4 py-3 text-center text-sm text-secondary"
      >
        <span className="rounded-full bg-[#915EFF]/20 px-3 py-1 font-semibold text-[#915EFF]">
          100+ enterprise clients
        </span>
        <span>
          ESG, EHS, FinTech and EdTech platforms serving Lakhs of active users
          worldwide.
        </span>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {clients.map((client, index) => (
          <ClientCard key={client.name} client={client} index={index} />
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-secondary">
        Client deployments are access-controlled; Dev/UAT environments require
        credentials.
      </p>
    </div>
  );
};

export default SectionWrapper(Clients, "clients");
