import "./styles/ExperienceCard.css";

import { ExperienceContent } from "../data/experience";

const ExperienceCard = ({
  index,
  company,
  description,
  position,
  logo,
}: ExperienceContent) => {
  return (
    <div className="experience-card relative flex-1 p-4 xl:p-10 flex flex-col lg:flex-row gap-4 xl:gap-10 rounded-2xl border-l border-t border-fuchsia-200">
      <img
        className="sm:pb-0 mx-auto max-w-24 xl:max-w-max object-contain"
        src={logo}
        height="200px"
        width="200px"
      />
      <div>
        <div className="flex justify-between items-end">
          <div className="flex flex-wrap gap-2 lg:gap-4 items-end">
            <h2
              className="text-3xl xl:text-5xl"
              style={{
                color: "#E45FFD",
              }}
            >
              {`${company}`}
            </h2>
            <h3 className="text-xl xl:text-3xl text-white">{`${position}`}</h3>
          </div>
          <h2
            className="text-4xl xl:text-6xl text-transparent absolute top-4 right-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(124, 73, 252, 0.20) 0%, rgba(53, 30, 94, 0.00) 100%)",
              backgroundClip: "text",
            }}
          >
            {index}
          </h2>
        </div>
        <p
          className="pt-4 xl:text-2xl"
          style={{
            color: "#F5C2FF",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;

/* 
text-transparent bg-clip-text bg-gradient-to-b from-violet-600 to-violet-950 }
*/
