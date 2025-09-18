import {
  Almondz,
  Antino,
  DevLabs,
  Sparrow,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Next Js Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
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
    title: "React.js/Next.js Developer",
    company_name: "Antino Labs",
    icon: Antino,
    iconBg: "#ffffff",
    date: "Full-time Jan 2022 to Nov 2023 (1 year 11 months)",
    points: [
      "Developed robust and scalable web applications using ReactJS and NextJS and implemented Redux state management for improved performance and efficient data handling",
      "Collaborated on web development projects for Fintech, Edtech, Mobility, and Healthcare sectors, delivering tailored solutions for diverse clients such as MamaStop,Travel Hangout, 50Fin, DevLabs etc.",
      "Directed full project lifecycle, spanning requirement gathering to post-implementation support. Actively engaged in code reviews, debugging, and troubleshooting, fostering collaborative communication with team members and stakeholders for seamless project execution.",
    ],
  },
  {
    title: "React.js/Next.js Developer",
    company_name: "Almondz Global Securities (AGSL)",
    icon: Almondz,
    iconBg: "#ffffff",
    date: "Full-time Nov 2023 to Aug 2024 (10 months)",
    points: [
      "Led the frontend team in developing Partner Onboarding (Admin, WebApp), E-KYC Admin, and Client Backoffice projects at Almondz Trade, employing Redux and server-side rendering.",
      "Enhanced UI/UX and integrated Face recognition and other features to elevate user interaction.",
      "Improved customer satisfaction, resulting in a 50% increase in positive feedback and a 20% reduction in Bugs.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Sparrow - Risk Management System",
    icon: Sparrow,
    iconBg: "#E6DEDD",
    date: `Full-time Aug 2024 to Present ${calculateDuration("2024-08-01")}`,
    points: [
      "Built a full-scale ESG & EHS platform from scratch with enterprise-grade architecture.",
      "Developed dynamic UIs and reports using ReactJS, NextJS, Redux Toolkit, AG Grid, and D3.js.",
      "Delivered scalable features to support dynamic data and evolving client needs.",
      "Worked closely with design, product, and backend teams to align tech with goals.",
      "Promoted clean code, re-usability, and performance across the frontend stack.",
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
