import { useState } from "react";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState<string>("hero");

  const sections = [
    { title: "Home.", section: "hero" },
    { title: "About me.", section: "about" },
    { title: "Experience.", section: "experience" },
    { title: "Skills.", section: "skills" },
    { title: "Projects.", section: "projects" },
  ];

  const clickHandler = (sectionName: string) => {
    const section = document.getElementById(`${sectionName}-section`);
    if (sectionName === "hero") window.scrollTo({ top: 0, behavior: "smooth" });
    else section?.scrollIntoView({ behavior: "smooth", block: "center" });
    setCurrentSection(sectionName);
  };

  return (
    <div className="nav-buttons hidden md:flex col-span-2 flex-wrap justify-between">
      {sections.map((section) => (
        <button
          className={`flex-grow-0 flex-shrink-0 text-white bg-transparent ${
            currentSection === section.section && "font-extrabold"
          }`}
          onClick={() => {
            clickHandler(section.section);
          }}
        >
          <h4
            className={`text-xl lg:text-2xl xl:text-3xl ${
              currentSection === section.section &&
              "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600"
            }`}
          >
            {section.title}
          </h4>
          <div
            className={`w-full h-[4px] bg-gradient-to-r from-fuchsia-400 to-indigo-600 mt-2 ${
              currentSection !== section.section && "hidden"
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default Navbar;
