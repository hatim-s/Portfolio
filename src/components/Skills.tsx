import SkillBadge from "./SkillBadge";

import skillData from "../data/skills";

const Skills = () => {
  return (
    <div id="skills-section" className="w-4/5 my-32 mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
        Skills
      </h2>
      <div className="pt-10 flex gap-4 lg:gap-6 flex-wrap justify-center">
        {skillData.map((skill) => (
          <SkillBadge title={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
