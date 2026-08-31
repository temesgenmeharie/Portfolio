import amazonCloneImg from "../assets/amazon-clone.png";
import todolistImg from "../assets/todolist.png";
import pharmacyImg from "../assets/pharmacy.png";
import chatappImg from "../assets/chatapp.png";

// PIMS gallery screenshots
import pimsImg1 from "../assets/pims/pims-1.png";
import pimsImg2 from "../assets/pims/pims-2.png";
import pimsImg3 from "../assets/pims/pims-3.png";
import pimsImg4 from "../assets/pims/pims-4.png";
import pimsImg5 from "../assets/pims/pims-5.png";
import pimsImg6 from "../assets/pims/pims-6.png";

export const projects = [
  {
    id: 1,
    title: "Amazon Website Clone",
    description:
      "A full-stack e-commerce platform inspired by Amazon. Features category browsing (Electronics, Clothing, Home & Kitchen, Books, etc.), product search, interactive shopping cart, user sign-in, and responsive product showcases.",
    image: amazonCloneImg,
    tags: ["React", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/temesgenmeharie/amazon-frontend-clone.git",
    liveUrl: "https://amazon-frontend-clone-phi.vercel.app",
    hasVideo: false,
    gallery: [amazonCloneImg],
  },
  {
    id: 2,
    title: "Task Manager & Todo List",
    description:
      "A feature-rich task management web application. Supports scheduling tasks with date & time pickers, status filtering ('All Tasks', 'Active', 'Completed'), editing, deleting, and visual completion status.",
    image: todolistImg,
    tags: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/temesgenmeharie/ToDoList.git",
    liveUrl: "https://todolist-three-olive-11.vercel.app",
    hasVideo: false,
    gallery: [todolistImg],
  },
  {
    id: 3,
    title: "Pharmacy Inventory Management System",
    description:
      "A full-stack pharmacy management platform built with NestJS and React. Features real-time stock tracking, medicine expiration alerts, prescription sales reporting, supplier management, JWT-secured authentication, AWS S3 file storage, automated reordering, and Swagger API documentation.",
    image: pimsImg1,
    tags: [
      "NestJS", "PostgreSQL", "Prisma ORM",
      "React 19", "TypeScript", "Tailwind CSS 4",
    ],
    techStack: {
      backend: [
        { name: "NestJS 10.x", note: "TypeScript Node.js framework" },
        { name: "PostgreSQL 16", note: "via Prisma ORM" },
        { name: "JWT + Passport.js", note: "Authentication" },
        { name: "AWS S3 / MinIO", note: "File storage" },
      ],
      frontend: [
        { name: "React 19 + TypeScript", note: "UI framework" },
        { name: "Tailwind CSS 4.x", note: "Styling" },
        { name: "Zustand + React Query", note: "State management" },
        { name: "Recharts", note: "Charts & analytics" },
      ],
    },
    githubUrl: "https://github.com/temesgenmeharie/PIMS",
    liveUrl: null,
    hasVideo: false,
    gallery: [pimsImg1, pimsImg2, pimsImg3, pimsImg4, pimsImg5, pimsImg6],
    category: "Full Stack",
    isShowcase: true,
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description:
      "A sleek real-time messaging application featuring instant group & private messaging, online status indicators, file/media sharing, and dark mode customization built with WebSockets.",
    image: chatappImg,
    tags: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/temesgenmeharie",
    liveUrl: null,
    hasVideo: false,
    gallery: [chatappImg],
  },
];

export default projects;
