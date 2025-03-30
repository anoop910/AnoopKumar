// src/ProjectsPage.js
import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: "https://via.placeholder.com/300",
    link: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "https://via.placeholder.com/300",
    link: "#"
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "https://via.placeholder.com/300",
    link: "#"
  },
  {
    title: "Project Four",
    description: "A brief description of Project Four.",
    image: "https://via.placeholder.com/300",
    link: "#"
  }
];

const ProjectsPage = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-white">My Projects</h1>
        <p className="text-white mt-4 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on. Each project showcases different skills, technologies, and challenges I’ve tackled along the way.
        </p>
      </section>

      {/* Projects Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#FFFFFF1A] rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <p className="text-white mt-2">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-yellow-500 hover:text-yellow-300">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
