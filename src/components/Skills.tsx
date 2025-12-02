import { useState } from "react";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    name: "Concepts",
    skills: [
      { name: "Web Development", level: 85 },
      { name: "OOP Concepts", level: 80 },
      { name: "Responsive Design", level: 85 },
      { name: "Version Control", level: 75 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "GitHub", level: 80 },
      { name: "Git", level: 75 },
    ],
  },
];

const techStack = [
  { name: "HTML5", color: "from-orange-500 to-orange-600" },
  { name: "CSS3", color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-500" },
  { name: "Java", color: "from-red-500 to-red-600" },
  { name: "SQL", color: "from-cyan-500 to-cyan-600" },
  { name: "Git", color: "from-orange-600 to-red-500" },
  { name: "GitHub", color: "from-gray-600 to-gray-700" },
  { name: "VS Code", color: "from-blue-600 to-blue-700" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding relative">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="px-5 py-2.5 glass-card rounded-full font-medium text-sm hover:scale-105 transition-transform cursor-default group"
            >
              <span className="group-hover:text-primary transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="max-w-2xl mx-auto glass-card p-8 rounded-3xl">
          <div className="space-y-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
