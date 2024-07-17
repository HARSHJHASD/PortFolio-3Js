import {
  Antino,
  DevLabs,
  Vedaxo,
  Voxturr,
  backend,
  carrent,
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
    title: "Node Js",
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

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Vedaxo Tech Solutions",
    icon: Vedaxo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed responsive web applications using ReactJS, ensuring a seamless and engaging user experience.",
      "Consulted with clients on most appropriate Design and Layout.",
      "Collaborated closely with UX/UI designers and backend developers to integrate front-end components seamlessly.",
      "Owned the end-to-end software development lifecycle, from requirements to deployment, focusing on scalability and maintainability",
    ],
  },
  {
    title: "React.js/Next.js Developer",
    company_name: "Antino Labs",
    icon: Antino,
    iconBg: "#ffffff",
    date: "Feb 2023 - Nov 2023",
    points: [
      "Developed robust and scalable web applications using ReactJS and NextJS and implemented Redux state management for improved performance and efficient data handling",
      "Collaborated on web development projects for Fintech, Edtech, Mobility, and Healthcare sectors, delivering tailored solutions for diverse clients such as MamaStop,Travel Hangout, 50Fin, DevLabs etc.",
      "Directed full project lifecycle, spanning requirement gathering to post-implementation support. Actively engaged in code reviews, debugging, and troubleshooting, fostering collaborative communication with team members and stakeholders for seamless project execution.",
    ],
  },
  {
    title: "React.js/Next.js Developer",
    company_name: "Voxturr",
    icon: Voxturr,
    iconBg: "#ffffff",
    date: "Nov 2023 - Present",
    points: [
      "Developed responsive web applications using ReactJS, ensuring a seamless and engaging user experience.",
      "Consulted with clients on most appropriate Design and Layout.",
      "Collaborated closely with UX/UI designers and backend developers to integrate front-end components seamlessly.",
      "Owned the end-to-end software development lifecycle, from requirements to deployment, focusing on scalability and maintainability.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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
