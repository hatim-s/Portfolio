import SkillBadge from "./SkillBadge";

const Skills = () => {
  return (
    <div className="w-4/5 my-32 mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
        Skills
      </h2>
      <div className="pt-10 flex gap-5 lg:gap-10 flex-wrap justify-center">
        <SkillBadge />
        <SkillBadge />
        <SkillBadge />
        <SkillBadge />
        <SkillBadge />
        <SkillBadge />
      </div>
    </div>
  );
};

export default Skills;
