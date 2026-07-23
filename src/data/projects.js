import amazonCloneImg from "../assets/amazon-clone.png";
import todolistImg from "../assets/todolist.png";
import pharmacyImg from "../assets/pharmacy.png";
import chatappImg from "../assets/chatapp.png";

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
    title: "Pharmacy Inventory Management System",
    description: "A comprehensive management system for pharmacies. Features real-time stock tracking, medicine expiration alerts, prescription sales reporting, supplier management, and automated inventory reordering.",
    image: pharmacyImg,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/temesgenmeharie",
    liveUrl: null,
    hasVideo: false,
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description: "A sleek real-time messaging application featuring instant group & private messaging, online status indicators, file/media sharing, and dark mode customization built with WebSockets.",
    image: chatappImg,
    tags: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/temesgenmeharie",
    liveUrl: null,
    hasVideo: false,
  }
];

export default projects;
