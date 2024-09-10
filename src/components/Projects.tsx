import React from "react";

const projects = [
  {
    title: "E-Commerce App",
    description:
      "A full-stack e-commerce app with React, Node.js, and MongoDB.",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects and skills.",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "Task Manager",
    description: "A task management app built with TypeScript and React.",
    img: "https://via.placeholder.com/300",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold">Projects</h3>
        <div className="flex flex-wrap justify-center mt-8 space-x-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-2"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-2xl font-bold">{project.title}</h4>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
