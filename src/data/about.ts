export interface AboutContent {
  content: string;
  links: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
}

const aboutData: AboutContent = {
  content: `Hi! 👋 I am Hatim. I am a passionate Computer Scientist 👨🏻‍🔬, a creative software engineer 🧑🏻‍💻 and a dedicated mentor from NIT Calicut 🎓. Solving problems has to be the favourite thing of mine, and Algorithms being my first love in CS. Apart from this, I am also proficient in several programming languages, low-level system programs like Compilers and Operating Systems, close-to-hardware stuff like Computer Architecture, Front-end development and others. (Whew! 😮‍💨) Scroll below to see some of my academic and personal projects. ⬇️`,
  links: {
    linkedin: "https://www.linkedin.com/in/hatim-s/",
    github: "https://github.com/hatim-s",
    leetcode: "https://leetcode.com/hatimcodes/",
  },
};

export default aboutData;
