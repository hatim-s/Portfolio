import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="my-32 mx-40">
      <h2 className="text-6xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
        Experiences
      </h2>
      <div className="flex gap-32 pt-10">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
