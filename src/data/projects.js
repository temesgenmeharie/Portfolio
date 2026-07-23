import amazonCloneImg from "../assets/amazon-clone.png";
import todolistImg from "../assets/todolist.png";

export const projects = [
  {
    id: 1,
    title: "Amazon Website Clone",
    description: "A full-stack e-commerce platform inspired by Amazon. Features category browsing (Electronics, Clothing, Home & Kitchen, Books, etc.), product search, interactive shopping cart, user sign-in, and responsive product showcases.",
    image: amazonCloneImg,
    tags: ["React", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/temesgenmeharie/amazon-frontend-clone.git",
    liveUrl: "https://amazon-frontend-clone-phi.vercel.app",
    hasVideo: false,
  },
  {
    id: 2,
    title: "Task Manager & Todo List",
    description: "A feature-rich task management web application. Supports scheduling tasks with date & time pickers, status filtering ('All Tasks', 'Active', 'Completed'), editing, deleting, and visual completion status.",
    image: todolistImg,
    tags: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/temesgenmeharie/ToDoList.git",
    liveUrl: "https://todolist-three-olive-11.vercel.app",
    hasVideo: false,
  },
  {
    id: 3,
    title: "Academic and Online Exam Management System",
    description: "A comprehensive academic and online examination management system designed to streamline school operations, manage student assessments, and facilitate secure online testing with automated grading and performance analytics.",
    image: "https://placehold.co/600x300/e2e8f0/64748b?text=Academic+System",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/temesgenmeharie",
    liveUrl: null,
    hasVideo: false,
  },
  {
    id: 4,
    title: "E-Commerce Application",
    description: "A full-stack e-commerce platform built with Flutter and Supabase. A comprehensive online store with payment integration and admin dashboard.",
    image: "https://placehold.co/600x300/e2e8f0/64748b?text=E-Commerce+App",
    tags: ["Flutter", "Supabase"],
    githubUrl: "https://github.com/temesgenmeharie",
    liveUrl: null,
    hasVideo: true,
  },
  {
    id: 5,
    title: "Job Portal",
    description: "A modern job portal built with React, TypeScript, Tailwind CSS, and Supabase. Includes authentication, data persistence, and a responsive UI for browsing and managing job listings.",
    image: "https://placehold.co/600x300/e2e8f0/64748b?text=Job+Portal",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/temesgenmeharie",
    liveUrl: null,
    hasVideo: true,
  }
];

export default projects;
