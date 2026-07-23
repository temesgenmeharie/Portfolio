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
  }
];

export default projects;
