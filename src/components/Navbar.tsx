import { useState } from "react";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState<string>("hero");

  const sections = [
    { title: "Home.", section: "hero" },
    { title: "About me.", section: "about" },
    { title: "Experience", section: "experience" },
    { title: "Skills", section: "skills" },
    { title: "Projects", section: "projects" },
  ];

  const clickHandler = (sectionName: string) => {
    const section = document.getElementById(`${sectionName}-section`);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
    setCurrentSection(sectionName);
  };

  return (
    <div className="nav-buttons hidden md:flex col-span-2 flex-wrap justify-between">
      {sections.map((section) => (
        <button
          className={`flex-grow-0 flex-shrink-0 text-white bg-transparent ${
            currentSection === section.section &&
            "font-extrabold border-b-4 border-solid border-white"
          }`}
          onClick={() => {
            clickHandler(section.section);
          }}
        >
          <h4 className="text-xl lg:text-2xl xl:text-3xl">{section.title}</h4>
        </button>
      ))}
    </div>
  );
};

export default Navbar;
