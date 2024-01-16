import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-4/5 my-32 mx-auto">
      <h2
        id="projects-section"
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600"
      >
        Projects
      </h2>
      <div className="pt-10 flex flex-row flex-wrap gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
