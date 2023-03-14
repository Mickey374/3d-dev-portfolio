import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    python,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sql,
    xd,
    cnr,
    maverick,
    techaide,
    freelancer,
    carrent,
    jobit,
    tripguide,
    threejs,
    eng,
    fra,
    ita,
    spa,
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

  export const Languages = [
    {
      id: "en",
      name: "English",
      abb: "EN",
      image: eng,
    },
    {
      id: "it",
      name: "Italiano",
      abb: "IT",
      image: ita,
    },
    {
      id: "es",
      name: "Español",
      abb: "ES",
      image: spa,
    },
    {
      id: "fr",
      name: "Français",
      abb: "FR",
      image: fra,
    }
  ]
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Digital Content Creator",
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
      name: "My SQL",
      icon: sql,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
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
      name: "Java",
      icon: java,
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
      name: "Adobe XD",
      icon: xd,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Web Developer",
      company_name: "Freelancer",
      icon: freelancer,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Present",
      points: [
        "Developing and maintaining responsove web applications using React.js and other related technologies.",
        "Ability to collaborate with cross-functional teams including designers, product managers,product owners and other developers to understand requirements and create high-quality products.",
        "Building RESTful APIs using NodeJs and ExpressJS and utilizing Redux for state management in ReactJS applications.",
        "Implement unit and integration tests using Jest, Mocha etc. as well as deploy applications to cloud hosting platforms such as Heroku, Hostinger, GCP, AWS.",
      ],
    },
    {
      title: "Intern-Cyber Intelligence Unit",
      company_name: "IIT CNR - Pisa",
      icon: cnr,
      iconBg: "#FFFFFF",
      date: "June 2022 - Oct 2022",
      points: [
        "Use Twitter API with tweepy and other libraries to get tweets and all-level replies using a Python script for certain hashtags.",
        "Implemented a function module to link tweet replies to parent tweets using the conversation_id property.",
        "Performed keyword extraction with KeyBERT transformer on the tweets and replies",
        "Used a Chat GPT-2 model to analyze a predifined list of sentiments with probability from tweets.",
      ],
    },
    {
      title: "Data Science Associate",
      company_name: "Maverick Research",
      icon: maverick,
      iconBg: "#E6DEDD",
      date: "April 2021 - Sep 2021",
      points: [
        "With the knowledge of scripting tools like KoboCollect & SurveyToGo, I designed requirement procedures for new survey projects",
        "Ensured a well-outlined quality assurance of data inflow with internal stakeholders to ensure minimal error in data reporting.",
        "Performed preliminary and final data analysis using Advanced Excel and visualizations with Tableau for reporting.",
        "Ensured a high level of Data Governance, Data Privacy & Data Management of company's data.",
      ],
    },
    {
      title: "IT Officer/Product Developer",
      company_name: "TECHAiDE Global",
      icon: techaide,
      iconBg: "#383E56",
      date: "March 2020 - March 2021",
      points: [
        "Programming of Raspberry Pi (3B, 3B+, 4) with Nginx Server and MySQL DB for content sharing and offline file Access through a PHP Interface.",
        "Updating company’s website with Couch CMS.",
        "Network of Server, Thin Client (NComputing, HP) and Routers for Resource sharing.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
  
  export { services, technologies, experiences, testimonials, projects };