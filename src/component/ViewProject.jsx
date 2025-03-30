// src/ViewProject.js
import React from 'react';

const ViewProject = () => {
  const project = {
    title: "Project One",
    image: "https://via.placeholder.com/600",
    description: "This is a detailed description of the project, explaining the features, purpose, and challenges encountered.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    liveLink: "https://example.com",
    repoLink: "https://github.com/anoop910"
  };

  return (
    <div className="bg-[#000000] text-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-white">{project.title}</h1>
        <p className="text-white mt-2 max-w-2xl mx-auto">
          A closer look at the details and features of this project.
        </p>
      </section>

      {/* Project Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-lg"/>
      </section>

      {/* Project Description and Details */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-semibold text-yellow-500">About this Project</h2>
        <p className="text-white mt-4">
          {project.description}
        </p>

        {/* Technologies Used */}
        <h3 className="text-xl font-semibold text-yellow-500 mt-8">Technologies Used</h3>
        <ul className="list-disc list-inside mt-4 text-white">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-8">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-4">
            View Live Project
          </a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-[#FFFFFF1A] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default ViewProject;
