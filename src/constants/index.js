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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Senior Frontend Engineer",
    icon: web,
  },
  {
    title: "React, Next.js & TypeScript",
    icon: mobile,
  },
  {
    title: "Performance & UX Systems",
    icon: backend,
  },
  {
    title: "OpenAI & Google GenAI Integrations",
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
    icon: Sparrow,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Jul 2026",
    points: [
      "Built a scalable enterprise ESG & EHS platform from scratch using React.js, Next.js, and TypeScript, enabling seamless onboarding and support for 100+ enterprise clients and 50,000+ active users.",
      "Integrated LLM-powered features into a production React application, reducing implementation and refactoring effort by ~30% and accelerating sprint delivery.",
      "Engineered enterprise dashboards and dynamic reporting interfaces with AG Grid, D3.js, and virtualized rendering, processing 50,000+ rows without main-thread blocking or frame drops.",
      "Optimized rendering performance using React.memo, lazy loading, and code splitting, cutting initial page load time by 40% and improving Lighthouse scores from 60 to 90+.",
      "Resolved 40+ production issues, led peer code reviews, and enforced clean architecture principles, reducing regression defects by 35%.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "ALMONDZ",
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
    icon: Antino,
    iconBg: "#ffffff",
    date: "Jan 2023 - Nov 2023",
    points: [
      "Developed and deployed scalable FinTech applications using React.js and Next.js, increasing user transaction completion rates by 15% within the first quarter.",
      "Implemented a highly scalable Redux architecture and standardized UI component library, cutting code redundancy by 25% and accelerating new feature delivery by two weeks per quarter.",
      "Successfully delivered frontend solutions for four concurrent client projects while consistently meeting delivery timelines, earning the Rising Star Award for outstanding performance.",
    ],
  },
  {
    title: "Full Stack Development Intern",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
