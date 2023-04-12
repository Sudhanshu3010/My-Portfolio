import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "Android Developer",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Education",
      company_name: "G.H. Raisoni College of Engineering, Nagpur",
      icon: meta,
      iconBg: "#383E56",
      date: "August 2020 - April 2024",
      points: [
        "BE in Information Technology ",
        "3rd year (2023*)",
        "8.63 CGPA",
      ],
    },
    {
      title: "Designing",
      company_name: "video Editing ",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Made Graphic posters for V.S. Informatics",
        "Video editing experience in editing cinematic videos using Adobe Premiere pro and Adobe After Effects.",
      ],
    },
    {
      title: "Soft-Skills",
      company_name: "",
      icon: meta,
      iconBg: "#383E56",
      date: "",
      points: [
        "TeamWork",
        "Problem Solving",
        "Quick Learner",
        "Adaptability",
      ],
    },
    {
      title: "Technical-Skills",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Good knowledge of algorithms and data structures",
        "C++ / Java",
        "Flutter [ Dart | Fire base | Material UI]",
        "HTML5 / CSS3 / Javascript / Bootstrap5 ",
        "Also Familiar with - React",
        
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
      name: "Food Grid",
      description:
        "Food Grid is an online food delivery app UI using Flutter. Making it Interactive using Material UI, and Firebase for the purpose of backend",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Sudhanshu3010/Food-Grid",
    },
    {
      name: "Drag 3d",
      description:
        "Drag 3d is a car simulation game made with Unity Game Engine with nice graphics and Physics. Drag 3d includes various assets and packs from unity asset store and Blender.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Book-Baazar",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Sudhanshu3010/Book-Baazar",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };