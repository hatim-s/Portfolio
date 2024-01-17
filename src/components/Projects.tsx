import ProjectCard from "./ProjectCard";

import projectsData from "../data/projects";

const Projects = () => {
  return (
    <div className="w-4/5 my-32 mx-auto">
      <h2
        id="projects-section"
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600"
      >
        Projects
      </h2>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projectsData.map(
          ({ index, name, description, image, repository, website }) => (
            <ProjectCard
              index={index}
              name={name}
              description={description}
              image={image}
              repository={repository}
              website={website}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
