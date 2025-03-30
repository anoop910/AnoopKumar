import React from 'react'

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen  p-4 md:flex-row">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="..\src\imgcom\anoopprotfolio.png" // Replace with your actual image path
          alt="Anoop Kumar"
          className="rounded-full w-48 h-48 object-cover border-4 border-gray-300 shadow-lg"
        />
      </div>

      {/* Right side - About Me content */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-white mb-4">
          Hello! I'm Anoop Kumar, a passionate developer skilled in building
          interactive and functional web applications. With experience in both
          front-end and back-end technologies, I enjoy turning ideas into
          reality through code.
        </p>
        <p className="text-lg text-white">
          In addition to web development, I'm also interested in video and image
          processing technology, and I have a strong foundation in Java and
          Spring Boot. I'm constantly learning and staying updated with the
          latest tech trends to build better solutions.
        </p>
      </div>
    </div>
        


    </div>
  )
}

export default About
