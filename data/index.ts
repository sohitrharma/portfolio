export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  {
    name: "Resume",
    link: "/Rohit_Sharma_Resume.pdf",
    external: true,
    newTab: true,
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Led cross-functional teams to achieve 95% on-time delivery rate",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    description: "",
    title: "Coordinated with global teams to ensure seamless project execution",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 3,
    title: "Tech Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about technology and development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently developing an AI-based interview platform",
    description: "InterviewGenius",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in working together? Get in touch!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const educationTimeline = [
  {
    duration: "2022 - 2024",
    degree: "Master of Science in Computer Engineering",
    institution: "San Jose State University",
    location: "San Jose, California",
    gpa: "3.40/4.00",
    coursework: [
      "Data Structures and Algorithms",
      "Machine Learning",
      "Data Mining",
      "Software Engineering Processes",
      "Computer Architecture",
    ],
  },
  {
    duration: "2016 - 2020",
    degree: "Bachelor of Engineering in Electronics and Telecommunication",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    gpa: "3.34/4.00",
    coursework: [
      "Database Management Systems",
      "Microprocessors and Microcontrollers",
      "Computer Networks",
      "Object-Oriented Programming",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Eazie - Banking made simple",
    des: "A modern banking application with a user-friendly interface and seamless user experience using Next.js and Tailwind CSS.",
    img: "/eazie.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/sentry.svg"],
    link: "https://eazie.vercel.app/",
  },
  {
    id: 2,
    title: "InterviewGenius - AI Interview Platform",
    des: "An AI-based interview platform that helps candidates prepare for technical interviews using Next.js and Tailwind CSS.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/sentry.svg"],
    link: "In Progress",
  },
  {
    id: 3,
    title: "AI Podcast Streaming",
    des: "Currently in development",
    // des: "A podcast streaming platform that uses AI to recommend podcasts based on user preferences, built with Next.js and Tailwind CSS.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://www.github.com/sohitrharma",
  },
  {
    id: 4,
    title: "Realtime Video Super Resolution",
    des: "A video super-resolution application that enhances video quality in real-time using Node.js and TensorFlow.js.",
    img: "/vsr.png",
    iconLists: [
      "/tensorflow.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/gsap.svg",
    ],
    link: "https://github.com/sohitrharma/Real-Time-Video-Super-Resolution",
  },
];

export const testimonials = [
  {
    quote:
      "Rohit's professionalism and dedication were evident in every aspect of his work. His ability to deliver high-quality results on time is commendable. He is a valuable asset to any team.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Rohit's technical expertise and creative approach brought our project to life. His commitment to excellence and client satisfaction is unparalleled.",
    name: "Emily White",
    title: "CTO of BrightWave Solutions",
  },
  {
    quote:
      "Rohit's understanding of our needs and his ability to translate them into functional and user-friendly solutions were impressive. He is a collaborative and skilled developer.",
    name: "David Lee",
    title: "Project Manager at TechNova Inc.",
  },
];

export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Teaching Assistant",
    company: "San Jose State University",
    desc: "Guided students in mastering embedded systems and software engineering principles through lab sessions, assignment grading, and one-on-one support, fostering a 25% increase in student engagement and understanding. Key responsibilities included leading lab sessions for CMPE 125 and CMPE 131 courses, grading assignments, and mentoring students in software development best practices.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    logo: "/sjsu.png",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Capgemini",
    desc: "Spearheaded the development and enhancement of HSBC's compliance web application, driving a 45% improvement in regulatory adherence and 80% increase in system efficiency. Successfully integrated new features, optimized system performance, and ensured seamless deployment of updates, while collaborating with cross-functional teams to deliver high-quality software solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    logo: "/capgemini.png",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Capgemini",
    desc: "Contributed to the development and maintenance of web applications, focusing on access rights management and achieving a 30% increase in data retrieval speed. Managed access rights, optimized data retrieval, and implemented best practices in software development, while collaborating with cross-functional teams to deliver software solutions and performing code reviews.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    logo: "/capgemini.png",
  },
  {
    id: 4,
    title: "Cyber Security Intern",
    company: "Ernst & Young",
    desc: "Conducted comprehensive cybersecurity audits and vulnerability assessments, identifying potential risks and providing actionable recommendations to enhance security measures. Developed security policies and procedures for clients, assisted in improving overall cybersecurity posture of client systems, and provided recommendations for security measure enhancements.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    logo: "/ey.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://www.github.com/sohitrharma",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/rohitsanjaysharma",
  },
];
