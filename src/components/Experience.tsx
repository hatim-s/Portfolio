import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div style={{ height: "50vh" }}>
      <h2>Experiences</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
