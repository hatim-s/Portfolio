export interface ExperienceContent {
  index: string;
  company: string;
  position: string;
  description: string;
  logo: string;
}

const experienceData: ExperienceContent[] = [
  {
    index: "01",
    company: "Salesforce",
    position: "Software Engineering Intern",
    description:
      "Spent a wonderful summer interning at Salesforce, where I worked to develop a VS Code extension, called LWS Copilor, to refactor developer code using GenAI. My tool would be used by Salesforce developers across the globe to ensure compliance to LWS security standards.",
    logo: "salesforce-logo.png",
  },
];

export default experienceData;
