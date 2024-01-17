import "./styles/SkillBadge.css";

interface Props {
  title: string;
}

const SkillBadge = ({ title }: Props) => {
  return (
    <div
      className="skill-badge flex-grow-0 flex-shrink-0 border-b border-r rounded-lg lg:rounded-2xl border-fuchsia-200 px-4 lg:px-10 py-2 lg:py-5 backdrop-blur-sm"
      // style={{
      //   background: `${styleProps.background}`,
      //   color: `${styleProps.color}`,
      //   transition:
      //     "box-shadow 0.3s ease-in-out, background 0.3s ease-in-out, color 0.3s ease-in-out",
      //   boxShadow: `${styleProps.boxShadow}`,
      // }}
    >
      <h2 className="text-md sm:text-lg lg:text-2xl xl:text-3xl">{title}</h2>
    </div>
  );
};

export default SkillBadge;
