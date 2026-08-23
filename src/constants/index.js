import {
  Almondz,
  Antino,
  DevLabs,
  Sparrow,
  Vedaxo,
  backend,
  creator,
  css,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  orbyt,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "github",
    title: "GitHub",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack (MERN) Developer",
    icon: web,
  },
  {
    title: "React, Next.js & TypeScript",
    icon: mobile,
  },
  {
    title: "Node.js, Express & MongoDB",
    icon: backend,
  },
  {
    title: "GenAI, LLM & AI Agents",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

// helper function
const calculateDuration = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  months = months % 12;

  if (years > 0 && months > 0) {
    return `(${years} year${years > 1 ? "s" : ""} ${months} month${
      months > 1 ? "s" : ""
    })`;
  } else if (years > 0) {
    return `(${years} year${years > 1 ? "s" : ""})`;
  } else {
    return `(${months} month${months > 1 ? "s" : ""})`;
  }
};

const experiences = [
  {
    title: "Software Developer",
    company_name: "SPARROW RMS",
    location: "Gurugram, India",
    icon: Sparrow,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Jul 2026",
    points: [
      "Built a scalable enterprise ESG & EHS platform from scratch using React.js, Next.js, and TypeScript, enabling seamless onboarding and support for 100+ enterprise clients and 50,000+ active users.",
      "Integrated OpenAI/GenAI LLMs into incident reporting workflows and production React applications, reducing implementation and refactoring effort by ~30% and accelerating sprint delivery.",
      "Engineered enterprise dashboards and dynamic reporting interfaces with AG Grid, D3.js, and virtualized rendering, processing 50,000+ rows without main-thread blocking or frame drops.",
      "Optimized rendering performance using React.memo, lazy loading, and code splitting, cutting initial page load time by 40% and improving Lighthouse scores from 60 to 90+.",
      "Resolved 40+ production issues, led peer code reviews, and enforced clean architecture principles, reducing regression defects by 35%.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "ALMONDZ",
    location: "New Delhi, India",
    icon: Almondz,
    iconBg: "#ffffff",
    date: "Nov 2023 - Aug 2024",
    points: [
      "Delivered Partner Onboarding, E-KYC, and Back-office modules using React.js, Redux Toolkit, and REST APIs, improving operational efficiency and reducing manual onboarding effort.",
      "Engineered a mobile-first PWA with responsive layouts across multiple screen sizes, improving mobile usability, accessibility, and Lighthouse performance.",
      "Mentored junior frontend developers through regular code reviews and technical guidance, improving code quality and accelerating onboarding of new team members.",
    ],
  },

  {
    title: "Associate Software Developer",
    company_name: "ANTINO",
    location: "Gurugram, India",
    icon: Antino,
    iconBg: "#ffffff",
    date: "Jan 2023 - Nov 2023",
    points: [
      "Developed and deployed scalable FinTech applications using React.js and Next.js, increasing user transaction completion rates by 15% within the first quarter.",
      "Implemented a highly scalable Redux architecture and standardized UI component library, cutting code redundancy by 25% and accelerating new feature delivery by two weeks per quarter.",
      "Delivered frontend and 20% backend solutions for four concurrent client projects while consistently meeting delivery timelines, earning the Rising Star Award for outstanding performance.",
    ],
  },
  {
    title: "Full Stack Intern",
    company_name: "Vedaxo Tech Solutions",
    icon: Vedaxo,
    iconBg: "#ffffff",
    date: "Feb 2021 - Aug 2021",
    points: [
      "Led requirement gathering for project planning and engineered dynamic frontend layouts.",
      "Implemented secure client-side authentication mechanisms and responsive UI components.",
      "Collaborated with team members to ensure application stability and user-focused experience.",
    ],
  },
];

const education = [
  {
    school: "Sharda University",
    degree: "B.Tech & M.Tech — Software Engineering",
    detail: "CGPA: 8.6",
  },
];
const testimonials = [
  {
    testimonial:
      "Harsh was instrumental in building our internal dashboards at Antino Labs. His React and Next.js expertise meant we could scale features quickly without sacrificing performance.",
    name: "Ravi Kumar",
    designation: "Senior Software Engineer",
    company: "Antino Labs",
    image:
      "https://media.licdn.com/dms/image/D5603AQxxx/profile-displayphoto-shrink_100_100/0/...",
  },
  {
    testimonial:
      "We relied on Harsh to deliver customer-facing modules for our fintech app at Almondz Global Securities. His clean code and proactive communication ensured smooth launches.",
    name: "Ritesh Kumar",
    designation: "Product Manager",
    company: "Almondz Global Securities",
    image:
      "https://media.licdn.com/dms/image/D4D03AQxxx/profile-displayphoto-shrink_100_100/0/...",
  },
  {
    testimonial:
      "Harsh’s ability to implement complex features like real-time WebSocket updates and advanced charting was critical for our risk management platform at Sparrow.",
    name: "Sourav Saboudhi",
    designation: "Senior Software Engineer",
    company: "Sparrow Risk Management",
    image:
      "https://media.licdn.com/dms/image/D5603AQxxx/profile-displayphoto-shrink_100_100/0/...",
  },
  // {
  //   testimonial:
  //     "At MamaStop, Harsh worked closely with our design and backend teams to create a seamless frontend experience. His work improved our customer engagement metrics significantly.",
  //   name: "Ananya Sharma",
  //   designation: "Head of Product",
  //   company: "MamaStop",
  //   image: "https://media.licdn.com/dms/image/D5603AQxxx/profile-displayphoto-shrink_100_100/0/...",
  // },
];

const projects = [
  {
    name: "Orbyt — Live Social Web App",
    platform: "Web App",
    description:
      "A real-time social platform to discover people, places and meetups happening live around you. Interactive live map, instant chat, meetup creation, verified profiles and an Orbyt+ premium tier (Travel Mode, Incognito Mode, Boosted Meetups). Built in TypeScript with Google Gemini powering its AI experiences.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-ai",
        color: "green-text-gradient",
      },
      {
        name: "realtime",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "#383E56",
      },
    ],
    image: orbyt,
    source_code_link: "https://orbyt.strangerchat.space/",
    links: [
      { label: "Live App", url: "https://orbyt.strangerchat.space/" },
      { label: "Code", url: "https://github.com/HARSHJHASD/OrbytWebApp" },
    ],
  },
  {
    name: "Orbyt — Android App (React Native)",
    platform: "Mobile App · Published on Play Store",
    description:
      "The companion mobile app for Orbyt, built with React Native and shipped to the Google Play Store. Delivers the full live-map, meetup and real-time chat experience on Android with native navigation, push-ready notifications and location services.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "playstore",
        color: "pink-text-gradient",
      },
      {
        name: "realtime",
        color: "#383E56",
      },
    ],
    image: orbyt,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.orbyt.official.app",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.orbyt.official.app",
      },
    ],
  },
  {
    name: "DevLabs Alliance",
    description:
      "This EdTech project enables users to enroll in batches and webinars and offers teachers an opportunity to teach on the platform. It provides a user-friendly interface for browsing and enrollment, while empowering teachers to create and deliever their own Webinars and Batches.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "#383E56",
      },
    ],
    image: DevLabs,
    source_code_link: "https://www.devlabsalliance.com/",
    links: [{ label: "Live", url: "https://www.devlabsalliance.com/" }],
  },
  {
    name: "Almondz - Partner Onboarding(Fintech)",
    description:
      "The web application enables companies to onboard partners for a Referral Incentive program, allowing them to refer clients and earn a secondary income. It offers an proper process for verification of identity of user using multiple process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
    links: [],
    note: "Enterprise product — source and deployment are client-confidential.",
  },
  {
    name: "Almondz-Ekyc(Fintech)",
    description:
      "The App offers a comprehensive eKYC app for clients, incorporating multiple stages such as Digilocker verification, Finduit bank statement fetching, liveliness checks, and e-sign processes, ensuring a thorough and seamless completion of the eKYC process.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
    links: [],
    note: "Enterprise product — source and deployment are client-confidential.",
  },
];

// ---------------------------------------------------------------------------
// Enterprise clients — ESG / EHS platforms delivered at Sparrow RMS.
// `url` points at the client's live deployment; `env` flags non-production
// environments (dev/UAT sit behind a client login wall).
// ---------------------------------------------------------------------------
const clients = [
  {
    name: "Rane",
    short: "RA",
    accent: "from-[#f59e0b] to-[#fb923c]",
    scope: "ESG reporting platform",
    url: "https://raneesg.sparrowios.com/",
    env: "live",
  },
  {
    name: "GreenLam",
    short: "GL",
    accent: "from-[#22c55e] to-[#84cc16]",
    scope: "ESG reporting platform",
    url: "https://greenlamesg.sparrowios.com/",
    env: "live",
  },
  {
    name: "Sparrow ESG",
    short: "SE",
    accent: "from-[#7c3aed] to-[#38bdf8]",
    scope: "Core ESG product platform",
    url: "https://esg.sparrowios.com/",
    env: "live",
  },
  {
    name: "OTSUKA",
    short: "OT",
    accent: "from-[#d946ef] to-[#f472b6]",
    scope: "ESG platform rollout",
    url: "https://otsuka.uat.sparrowios.com/",
    env: "uat",
  },
  {
    name: "WEX",
    short: "WX",
    accent: "from-[#0f766e] to-[#34d399]",
    scope: "EHS management suite",
    url: "https://wex.dev.sparrowehs.com/",
    env: "dev",
  },
  {
    name: "Rane EHS",
    short: "RD",
    accent: "from-[#f97316] to-[#fbbf24]",
    scope: "ESG analytics dashboard",
    url: "https://rane.dev.sparrowehs.com/esg/dashboard",
    env: "dev",
  },
  {
    name: "Sparrow EHS",
    short: "SH",
    accent: "from-[#0ea5e9] to-[#22d3ee]",
    scope: "EHS dashboard & reporting",
    url: "https://ios.dev.sparrowehs.com/ehsDashboard",
    env: "dev",
  },
  {
    name: "APRAAVA",
    short: "AP",
    accent: "from-[#2563eb] to-[#60a5fa]",
    scope: "EHS compliance modules",
    url: "https://apraava.dev.sparrowehs.com/login",
    env: "dev",
  },
  {
    name: "SudChemie",
    short: "SC",
    accent: "from-[#6366f1] to-[#a5b4fc]",
    scope: "EHS compliance modules",
    url: "https://sudchemie.dev.sparrowehs.com/login",
    env: "dev",
  },
  {
    name: "DevLabs Alliance",
    short: "DL",
    accent: "from-[#14b8a6] to-[#2dd4bf]",
    scope: "EdTech learning platform",
    url: "https://www.devlabsalliance.com/",
    env: "live",
  },
  {
    name: "Endurance",
    short: "EN",
    accent: "from-[#7c3aed] to-[#38bdf8]",
    scope: "ESG / EHS delivery",
  },
  {
    name: "Rubamin",
    short: "RU",
    accent: "from-[#14b8a6] to-[#2dd4bf]",
    scope: "ESG / EHS delivery",
  },
  {
    name: "SRF",
    short: "SR",
    accent: "from-[#ec4899] to-[#8b5cf6]",
    scope: "ESG / EHS delivery",
  },
  {
    name: "50Fin",
    short: "50",
    accent: "from-[#f59e0b] to-[#fb923c]",
    scope: "FinTech application",
  },
  {
    name: "MamaStop",
    short: "MS",
    accent: "from-[#8b5cf6] to-[#c4b5fd]",
    scope: "Commerce experience",
  },
];

// ---------------------------------------------------------------------------
// GitHub showcase — surfaces the 96 public repos (heavily GenAI / agent focused)
// ---------------------------------------------------------------------------
const githubUsername = "HARSHJHASD";
const githubProfile = "https://github.com/HARSHJHASD";

// Shown if the public GitHub API is unavailable / rate-limited (60 req/hr/IP).
const githubStatsFallback = {
  public_repos: 96,
  ai_repos: 30,
  top_languages: ["JavaScript", "TypeScript", "HTML"],
};

// Repos to feature, by exact repo name. The raw repos have terse names and no
// descriptions, so I supply friendly titles + blurbs; live data (url, language,
// stars) is merged in from the API when the fetch succeeds.
const featuredRepos = [
  {
    repo: "OrbytWebApp",
    title: "Orbyt — Web App",
    description:
      "Real-time social platform (Meet People IRL) built in TypeScript with Google Gemini powering its AI experiences.",
    tags: ["TypeScript", "Gemini AI"],
  },
  {
    repo: "Agent_Self_UI_Update_Agent",
    title: "Self-Updating UI Agent",
    description:
      "An LLM agent that autonomously reads a goal and modifies a live UI to satisfy it.",
    tags: ["AI Agents", "LLM"],
  },
  {
    repo: "langChain_LanGraph_LanChain",
    title: "LangChain + LangGraph",
    description:
      "Multi-step agent workflows and stateful graphs built with LangChain and LangGraph.",
    tags: ["LangChain", "LangGraph"],
  },
  {
    repo: "RAG_using_Json_Data_and_Embedding",
    title: "RAG over JSON Data",
    description:
      "Retrieval-Augmented Generation pipeline: embed JSON knowledge, retrieve context, and ground LLM answers.",
    tags: ["RAG", "Embeddings"],
  },
  {
    repo: "Chrome_Vector_Db_used_for_storing_Encoding",
    title: "ChromaDB Vector Store",
    description:
      "Storing and querying text embeddings in a Chroma vector database for semantic search.",
    tags: ["Vector DB", "Chroma"],
  },
  {
    repo: "LangChain_dalle_Image_generation",
    title: "AI Image Generation",
    description:
      "Generating images from natural-language prompts by orchestrating DALL·E through LangChain.",
    tags: ["LangChain", "DALL·E"],
  },
];

export {
  clients,
  education,
  experiences,
  featuredRepos,
  githubProfile,
  githubStatsFallback,
  githubUsername,
  projects,
  services,
  technologies,
  testimonials,
};
