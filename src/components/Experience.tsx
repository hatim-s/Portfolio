import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="py-32 px-10">
      <h2 className="text-6xl pb-10">Experiences</h2>
      <div className="flex gap-32">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
