import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="w-4/5 my-32 mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
        Experiences
      </h2>
      <div className="flex flex-col md:flex-row gap-10 xl:gap-32 pt-10">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
