import SkillBadge from "./SkillBadge";

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <div style={{ display: "flex", gap: "20px" }}>
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
