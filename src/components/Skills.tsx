import SkillBadge from "./SkillBadge";

const Skills = () => {
  return (
    <div className="px-10 py-32">
      <h2 className="text-6xl pb-10">Skills</h2>
      <div className="flex gap-10">
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
