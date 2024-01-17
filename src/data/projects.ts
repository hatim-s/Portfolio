import gameFinder from "../assets/images/game-finder.png";
import pathFinder from "../assets/images/path-finder.png";
import portfolio from "../assets/images/portfolio.png";
import sorting from "../assets/images/sorting.png";
import operatingSystem from "../assets/images/operating-system.png";
import compiler from "../assets/images/compiler.png";
import database from "../assets/images/database.png";

interface Project {
  index: string;
  name: string;
  description: string;
  image?: string;
  repository: string;
  website?: string;
}

const projectsData: Project[] = [
  {
    index: "01",
    name: "Personal Portfolio",
    description:
      "Crafted a dazzling personal portfolio that showcases my web development capablities. Designed the portfolio using React and Typescript for seamless functionality, adorned it with stylish aesthetics using Tailwind CSS, and finally bootstrapped the development environment with Vite.",
    image: portfolio,
    repository: "",
  },
  {
    index: "02",
    name: "Mini-DataBase System",
    description:
      "Engineered a cutting-edge relational database management simulator as part of my university coursework. Designed to store user data and facilitate queries through SQL-like commands, the entire codebase was meticulously implemented in C++, adhering to industry-standard programming practices.",
    image: database,
    repository: "https://github.com/hatim-s/DataBase-Management-System",
  },
  {
    index: "03",
    name: "Game Finder",
    description:
      "Unveiled an impressive game-finding application utilizing React, Typescript, Rawg API, and Chakra-UI. Elevating user experience with convenient sorting and filtering options, this project reflects my commitment to creating applications that are both functional and user-friendly.",
    image: gameFinder,
    repository: "https://github.com/hatim-s/game-finder",
    website: "https://game-finder-ecru.vercel.app/",
  },
  {
    index: "04",
    name: "Mini-Operating System",
    description:
      "Pioneered the creation of a modular operating system within a machine simulator, mirroring real-world OS intricacies. Encompassing essential features like system calls, process scheduling, login/shutdown mechanisms, semaphores, file accesses, process swapping, and virtual memory addressing, this project exemplifies my commitment to mastering complex systems.",
    image: operatingSystem,
    repository: "https://github.com/hatim-s/Operating-System",
  },
  {
    index: "05",
    name: "Mini-Compiler",
    description:
      "Architected and developed a powerful mini-compiler for EXPL, a C-like toy language. Enabling support for both Object-Oriented Programming and Functional programming paradigms, the project was meticulously crafted in C, with Flex as the Lexer and Bison as the parser, showcasing precision and sophistication.",
    image: compiler,
    repository: "https://github.com/hatim-s/Expl-Compiler",
  },
  {
    index: "06",
    name: "Sorting Algorithms Visualizer",
    description:
      "Channeling my passion for algorithms, I created a visualization tool offering insight into fundamental sorting algorithms. Employing React and Javascript for robust functionality, and vanilla CSS for an elegant design, this project reflects my dedication to making complex concepts accessible and engaging. ",
    image: sorting,
    repository: "https://github.com/hatim-s/Sorting-Algorithms-Visualizer",
    website: "https://sorting-algorithms-visualizer-self.vercel.app/",
  },
  {
    index: "07",
    name: "Path Finding Algorithms Visualizer",
    description:
      "Driven by a fascination for graph path-finding algorithms, I crafted a visually captivating tool to showcase their functionality. Utilizing React, Javascript, and vanilla CSS, this project serves as a testament to my commitment to creating projects that blend sophistication with user-friendly design.",
    image: pathFinder,
    repository: "https://github.com/hatim-s/Path-Finding-Algorithm-Visualizer",
    website: "https://path-finding-algorithm-visualizer-one.vercel.app/",
  },
];

export default projectsData;
