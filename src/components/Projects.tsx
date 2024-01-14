import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="px-10 py-32">
      <h2 className="text-6xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
        Projects
      </h2>
      <div className="pt-10">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
