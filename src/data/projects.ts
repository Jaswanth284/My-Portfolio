import prjt1 from '../Assets/Comprehensive E-Commerce Platform Development.png';
import prjt2 from '../Assets/Graph-Based Airline Route Optimization System.png';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projectsData: Project[] = [
  {
    title: "Comprehensive E-Commerce Platform Development",
    description: "Developed a scalable full-stack e-commerce platform with secure authentication, real-time order tracking, and optimized checkout and recommendation features.",
    image: prjt1,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com",
  },
  {
    title: "Graph-Based Airline Route Optimization System",
    description: "Developed a C++ graph-based airline route optimization system implementing Dijkstra’s algorithm to improve shortest-path computation and routing efficiency.",
    image: prjt2,
    technologies: ["C++", "Data Structures", "Graph Algorithms", "Dijkstra’s Algorithm", "Algorithm Optimization"],
    github: "https://github.com",
  },
];