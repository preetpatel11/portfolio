import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  github_trans,
  reactjs,
  python,
  redux,
  java,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  stan,
  softvan,
  gtu,
  Picture1,
  Picture2,
  FitnessWorld,
  stan_ly,
  csi,
  luminious,
  jobit,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Full Stack Developer",
  //   icon: creator,
  // },
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
    name: "JAVA",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
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
    name: "GitHub",
    icon: github_trans,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "CSI Consulting",
    icon: csi,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Contributed to the development and enhancement of a Time Management system as an active member of an Agile/Scrum team, utilizing Java Spring Boot and React JS.",
      "Incorporated both existing and new features into the application, demonstrating adaptability to evolving project requirements.",
      "Integrated React-based frontend with RESTful Web APIs, ensuring seamless interaction with MySQL databases.",
      "Analyzed data in CSV and XML formats for reporting purposes, enhancing data-driven decision-making processes.",
      "Collaborated on a Single Page Application with MVC clients and React JS-based front end, focusing on intuitive UI design.",
      "Worked extensively on Payroll system modules, adding/modifying features according to business needs, and contributed to the development of business layers and other functional modules.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Luminus Financial",
    icon: luminious,
    iconBg: "#383E56",
    date: "January 2022 - February 2023",
    points: [
      "Supported and enhanced existing ASP.NET web-based systems, adding features for continuous improvement.",
      "Contributed to the development of an ASP.NET Web API application, demonstrating adaptability in web-based environments.",
      "Wrote and modified stored procedures for optimized database interactions within the ASP.NET Web API.",
      "Developed controller classes and business layers, reinforcing the structural integrity of the application.",
      "Worked on various aspects and modules of the life insurance business, gaining diverse experience.",
      "Implemented comprehensive Server-Side Validation using annotation classes for enhanced data integrity and security",
      "Collaborated effectively with technical and non-technical stakeholders, ensuring seamless communication and project alignment.",
    ],
  },
  {
    title: "Softvan Engineer Intern",
    company_name: "Softvan Pvt Ltd.",
    icon: softvan,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - June 2021",
    points: [
      "Independently developed and deployed a dynamic e-commerce website utilizing Python, Flask, OpenCV, MySQL, HTML, CSS, and JavaScript.",
      "Implemented essential features, including user authentication, login, registration, and password recovery, which led to a 75% boost in user engagement and consequently, increased sales.",
      "Collaborated closely with mentors and team members to devise coding strategies and implementation approaches, facilitating knowledge transfer and practical application of learned skills.",
    ],
  },
  {
    title: "Student Laboratory Assistant",
    company_name: "GTU - L. J. Institute of Engineering and Technology",
    icon: gtu,
    iconBg: "#383E56",
    date: "Sep 2017 - May 2021",
    points: [
      "Functioned as a Lab Assistant, responsible for overseeing and instructing students in laboratory procedures, ensuring their adherence to safety protocols, and providing guidance on experiment execution",
      "Conducted regular equipment maintenance and calibration, guaranteeing the readiness and optimal functioning of laboratory apparatus before each session to facilitate a smooth and uninterrupted learning experience.",
      "Assisted in the management and organization of laboratory resources, including inventory control, equipment procurement, and troubleshooting, to maintain a well-equipped and efficient learning environment for students.",
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
    name: "Stan.ly",
    description:
      "Developed stan.ly's URL shortening platform, leading it from concept to production. Designed and architected the system for optimal performance and scalability, utilizing technologies like React and TypeScript for the frontend, MongoDB for the backend, and AWS, Amplify, and Lambda for hosting and scalability. The platform offered user-customizable short codes for convenience and included essential features like redirection, pagination, navigation, and search functionality, all aimed at providing a seamless user experience, complemented by a custom 404 error page.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "AWS - Amplify",
        color: "blue-text-gradient",
      },
      {
        name: "AWS - Lambda",
        color: "green-text-gradient",
      },
      {
        name: "React-Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: stan_ly,
    source_code_link: "https://www.stan.ly/",
  },
  {
    name: "Cloth Shopping Using Augmented Reality",
    description:
      "'Clothes Shopping Using Augmented Reality' is a web-based tool that utilizes a scanned image of the user's body and text input specifying the desired clothing items. It then filters clothing data based on these inputs and virtually augments the selected clothes onto the user's scanned image. This innovative solution eliminates the need for users to manually try on clothes in physical stores, offering a more convenient and time-saving way to visualize clothing items on themselves.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Augmented Reality",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "SQL-alchemy",
        color: "pink-text-gradient",
      },
    ],
    image: Picture1,
    source_code_link: "https://github.com/preetpatel11/Cloth-Shopping-Using-Augmented-Reality.git",
  },
  {
    name: "Fitness World",
    description:
      "Designed and developed a user-friendly fitness website, incorporating a wide array of features. The website boasted an interactive exercise platform enriched with online courses, informative blogs, and a BMI reporting system, all carefully curated with input from fitness experts. Its full responsiveness across various devices guaranteed an exceptional user experience. To maintain data accuracy and security, implemented rigorous data validation processes. Throughout the project, demonstrated proficiency in key web development technologies, including HTML, CSS, and JavaScript, ensuring a seamless and robust fitness platform for users to achieve their health and fitness goals.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: FitnessWorld,
    source_code_link: "https://github.com/preetpatel11/Web-Programming-Final-Project",
  },
  {
    name: "Prediction/Analysis of Heart Attack Chances",
    description:
      "In this project, the objective is to predict the likelihood of a heart attack in patients, utilizing the 'heart.csv' dataset featuring 14 relevant features such as age, sex, chest pain type, and more. The binary target field distinguishes between '0' for a lower chance of a heart attack and '1' for a higher chance. The dataset is divided into 80% training and 20% testing data. Two models, a Logistic Regression Model and a k-NN model with the Euclidean metric, are employed for prediction. The project concludes with a code file presenting model results, dataset visualizations, and insightful descriptions, offering a comprehensive approach to assessing heart attack risks.",
    tags: [
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "Numpy",
        color: "green-text-gradient",
      },
      {
        name: "Seaborn",
        color: "pink-text-gradient",
      },
      {
        name: "MatplotLib",
        color: "blue-text-gradient",
      },
    ],
    image: Picture2,
    source_code_link: "https://github.com/preetpatel11/Data-Analytics-Final-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
