import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import aboutData from "../data/about";
import "./styles/About.css";

const About = () => {
  return (
    <div id="about-section" className="w-4/5 my-32 mx-auto">
      <div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
          About me
        </h2>
      </div>
      <p
        className="py-8 lg:text-xl xl:text-2xl"
        style={{
          color: "#F5C2FF",
        }}
      >
        {aboutData.content}
      </p>
      <div className="about-btn sm:w-1/2 flex col-span-1 justify-evenly">
        <a
          href={aboutData.links.linkedin}
          target="_blank"
          className="linkedin-btn text-4xl xl:text-5xl p-2 xl:p-4 text-white rounded-lg xl:rounded-2xl border-l border-t border-fuchsia-200"
          // style={{
          //   background:
          //     "linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)",
          // }}
        >
          <FaLinkedin />
        </a>
        <a
          href={aboutData.links.github}
          target="_blank"
          className="github-btn text-4xl xl:text-5xl p-2 xl:p-4 text-white rounded-lg xl:rounded-2xl border-l border-t border-fuchsia-200"
          // style={{
          //   background:
          //     "linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)",
          // }}
        >
          <FaGithub />
        </a>
        <a
          href={aboutData.links.leetcode}
          target="_blank"
          className="leetcode-btn text-4xl xl:text-5xl p-2 xl:p-4 text-white rounded-lg xl:rounded-2xl border-l border-t border-fuchsia-200"
          // style={{
          //   background:
          //     "linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)",
          // }}
        >
          <SiLeetcode />
        </a>
      </div>
    </div>
  );
};

export default About;
