import React from 'react'

const MySkills = () => {
  return (
    <div>
        <div className="min-h-screen bg-[#000000] p-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        My Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Front-End Skills */}
        <div className="bg-[#FFFFFF1A] shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Front-End</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span>⚛️</span> <span>React</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>🎨</span> <span>HTML & CSS</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✨</span> <span>JavaScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>🎨</span> <span>Tailwind CSS</span>
            </li>
          </ul>
        </div>

        {/* Back-End Skills */}
        <div className="bg-[#FFFFFF1A] shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Back-End</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span>☕</span> <span>Java</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>📦</span> <span>Spring Boot</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>💾</span> <span>MySQL</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>🐍</span> <span>Python</span>
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-[#FFFFFF1A] shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Tools & Others</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span>🐙</span> <span>Git & GitHub</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>🐳</span> <span>Docker</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>⚙️</span> <span>Postman</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>📈</span> <span>Analytics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>


    </div>
  )
}

export default MySkills
