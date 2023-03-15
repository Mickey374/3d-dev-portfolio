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
    uslc,
    afbot,
    moviesapp,
    kpingbi,
    karigo,
    jeremy,
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
        "I wanted an online presence for my school. We had thought of this for a long time until we talked to Michael.He designed the interface and developed it from prototype to a live version. Now, I told him, you will manage the website forever because of your technical abilities.",
      name: "Michael Kpingbi",
      designation: "Founder",
      company: "Unique Star Learning Center",
      image: kpingbi,
    },
    {
      testimonial:
        "The idea of Karigo is to create a bridge between vendors with electronic shops to buyers within industries. Michael designed the UI which captured the full intent. The prototype version will be released and a lot of clients are excited already.He listens.",
      name: "Devbay Founders",
      designation: "Co-Founders",
      company: "Devbay LLC",
      image: karigo,
    },
    {
      testimonial:"Michael participated in a 4-month Data Science training program, where he learned data science processes, including data exploration, cleansing, feature extraction, and modelling. He worked well in small groups, was curious, open-minded, and mentored other students.",
      name: "Jeremy Banning",
      designation: "Associate Director-Data Science & Analytics",
      company: "Raytheon Technologies",
      image: jeremy,
    },
  ];
  
  const projects = [
    {
      name: "USLC School Website",
      description:
        "A website that showcases the facilities and activities of Unique Star Learning Center, located within the Western region of Ghana. The news section integrates a Couch Management System for news and article publications.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: uslc,
      source_code_link: "https://github.com/Mickey374/UniqueStar-Website",
      url: "https://uniquestarlearningcenter.com/",
    },
    {
      name: "Karigo Ecommerce App",
      description:
        "Web application that connects vendors to buyers to create a seamless market for their electronics products available on a common platform. With different payment modules, buyers have an option to pay in installment with payment reminders to vendors.",
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
      image: afbot,
      source_code_link: "https://github.com/Mickey374/afbot",
      url: "https://github.com/Mickey374/afbot",
    },
    {
      name: "Movies Review App",
      description:
        "A comprehensive movies review application designed with Spring Boot[JAVA] and ReactJS that allows users to view movies trailers and write reviews. Movies and Reviews are stored in a remote MongoDB  cluster with a set of predefined APIs.",
      tags: [
        {
          name: "springboot",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: moviesapp,
      source_code_link: "https://github.com/Mickey374/Movies-Review-FullStack-App",
      url: "https://github.com/Mickey374/Movies-Review-FullStack-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };