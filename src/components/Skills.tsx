import React from "react";

const skills = [
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "React", color: "bg-blue-400" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "Tailwind CSS", color: "bg-teal-400" },
  { name: "GraphQL", color: "bg-pink-600" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-white text-black">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold">Skills</h3>
        <div className="flex flex-wrap justify-center mt-8 space-x-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 m-2 text-white font-semibold rounded-lg ${skill.color}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
