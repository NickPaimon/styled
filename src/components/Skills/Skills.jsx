import React, { useEffect, useRef, useState } from "react";
import SkillBar from "./Skillbar";

const Skills = () => {
  const skillRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      // console.log("entry", entry);
      // console.log("entry.isIntersecting", entry.isIntersecting);
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(skillRef.current);
  }, []);

  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "React", level: 75 },
    { name: "Redux", level: 75 },
    { name: "Tailwind", level: 65 },
    { name: "Git", level: 70 },
    { name: "Firebase", level: 60 },
    { name: "NestJS", level: 40 },
    { name: "Typeorm", level: 55 },
    { name: "MySQL", level: 60 },
    // Add more skills here
  ];

  return (
    <section
      className="bg-gray-900 text-white py-12"
      id="skills"
      ref={skillRef}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          Professional Skills
        </h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.name}
              level={skill.level}
              startAnimation={startAnimation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
