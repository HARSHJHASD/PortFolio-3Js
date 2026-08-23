import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import {
  featuredRepos,
  githubProfile,
  githubStatsFallback,
  githubUsername,
} from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Derive the most-used languages across the fetched repos.
const topLanguages = (repos) => {
  const counts = repos.reduce((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([language]) => language);
};

// Repos whose names signal Generative-AI work — a stronger stat than followers.
const AI_PATTERN =
  /(langchain|langgraph|langsmith|rag|agent|embedding|llm|gemini|openai|vector|hugging|dalle|prompt)/i;

const countAiRepos = (repos) =>
  repos.filter((repo) => AI_PATTERN.test(repo.name)).length;

const StatCard = ({ label, value }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
    <p className="text-[26px] font-bold text-white">{value}</p>
    <p className="mt-1 text-xs uppercase tracking-wide text-secondary">
      {label}
    </p>
  </div>
);

const RepoCard = ({ repo, index }) => (
  <motion.a
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    href={repo.url}
    target="_blank"
    rel="noreferrer"
    className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#915EFF]/50"
  >
    <div className="flex items-start justify-between gap-3">
      <h3 className="text-[17px] font-semibold text-white">{repo.title}</h3>
      <span className="shrink-0 text-secondary transition group-hover:text-[#915EFF]">
        ↗
      </span>
    </div>

    <p className="mt-2 flex-1 text-[13px] leading-6 text-secondary">
      {repo.description}
    </p>

    <div className="mt-4 flex flex-wrap items-center gap-2">
      {repo.tags.map((tag) => (
        <span
          key={`${repo.repo}-${tag}`}
          className="rounded-full bg-[#915EFF]/15 px-3 py-1 text-[11px] font-medium text-[#c4a7ff]"
        >
          {tag}
        </span>
      ))}
      {repo.language && !repo.tags.includes(repo.language) && (
        <span className="text-[11px] text-secondary">{repo.language}</span>
      )}
    </div>
  </motion.a>
);

const Github = () => {
  const [stats, setStats] = useState(githubStatsFallback);
  const [repos, setRepos] = useState(featuredRepos);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${githubUsername}`),
          fetch(
            `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`
          ),
        ]);

        if (!profileRes.ok || !reposRes.ok) return;

        const profile = await profileRes.json();
        const allRepos = await reposRes.json();
        if (cancelled || !Array.isArray(allRepos)) return;

        const byName = new Map(allRepos.map((repo) => [repo.name, repo]));

        setStats({
          public_repos: profile.public_repos ?? githubStatsFallback.public_repos,
          ai_repos:
            countAiRepos(allRepos) || githubStatsFallback.ai_repos,
          top_languages: topLanguages(allRepos),
        });

        // Merge live metadata into the curated list; keep hand-written copy.
        setRepos(
          featuredRepos.map((item) => {
            const live = byName.get(item.repo);
            return {
              ...item,
              url: live?.html_url ?? `${githubProfile}/${item.repo}`,
              language: live?.language ?? null,
            };
          })
        );
      } catch {
        // Offline or rate-limited (60 req/hr) — the static fallback stands.
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const languages = stats.top_languages?.length
    ? stats.top_languages
    : githubStatsFallback.top_languages;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Open source & experiments</p>
        <h2 className={styles.sectionHeadText}>GitHub.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        Beyond client work I build constantly in public — mostly Generative AI:
        LLM agents, LangChain and LangGraph workflows, RAG pipelines, embeddings
        and vector databases. Here are a few highlights.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3"
      >
        <StatCard label="Public repos" value={stats.public_repos} />
        <StatCard label="GenAI projects" value={stats.ai_repos} />
        <StatCard label="Top stack" value={languages[0] ?? "TypeScript"} />
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {repos.map((repo, index) => (
          <RepoCard
            key={repo.repo}
            index={index}
            repo={{
              ...repo,
              url: repo.url ?? `${githubProfile}/${repo.repo}`,
            }}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={githubProfile}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#915EFF] px-8 py-3 text-[15px] font-semibold text-white shadow-md shadow-primary transition hover:bg-[#7c4ddb]"
        >
          View all {stats.public_repos} repositories on GitHub ↗
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Github, "github");
