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
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React JS & Next JS",
    icon: mobile,
  },
  {
    title: "Redux Toolkit Specialist",
    icon: backend,
  },
  {
    title: "Tailwind & UI Systems",
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
    company_name: "Sparrow - Risk Management System",
    icon: Sparrow,
    iconBg: "#E6DEDD",
    date: `Aug 2024 - Present ${calculateDuration("2024-08-01")}`,
    points: [
      "Built a full-scale ESG & EHS platform from scratch with enterprise-grade architecture.",
      "Developed dynamic UIs and complex reports using ReactJS, NextJS, Redux Toolkit, AG Grid, and D3.js.",
      "Delivered scalable features to support dynamic data and evolving client needs.",
      "Collaborated with design, product, and backend teams to align technology with business goals.",
      "Promoted clean code, reusability, and performance across the frontend stack.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Almondz Global Securities",
    icon: Almondz,
    iconBg: "#ffffff",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Led frontend development for Partner Onboarding, E-KYC Admin, and Client Back-office modules using Redux and Redux Persist.",
      "Improved UX with cleaner flows and reduced bugs, leading to better feedback and stronger product stability.",
      "Mentored junior developers through code reviews and best practices, driving team growth and code quality.",
    ],
  },
  {
    title: "Independent Front-end Consultant",
    company_name: "Freelance / Independent",
    icon: jobit,
    iconBg: "#ffffff",
    date: "Nov 2023 - Jun 2024",
    points: [
      "Led frontend development for Partner Onboarding, E-KYC Admin, and Client Back-office at Almondz Trade using Redux and Redux Persist.",
      "Improved UX with cleaner flows and fewer bugs, resulting in better feedback and stronger stability.",
      "Managed junior developers through code reviews, mentorship, and frontend best practices.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Antino Labs",
    icon: Antino,
    iconBg: "#ffffff",
    date: "Jan 2023 - Nov 2023",
    points: [
      "Developed robust and scalable web applications using ReactJS, NextJS, and Redux state management, improving performance and data handling.",
      "Delivered tailored solutions for Fintech, Edtech, Mobility, and Healthcare clients including Mama-Stop, Travel Hangout, 50Fin, and Dev-Labs.",
      "Built responsive user experiences and collaborated with product teams to implement efficient, reusable frontend architecture.",
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
