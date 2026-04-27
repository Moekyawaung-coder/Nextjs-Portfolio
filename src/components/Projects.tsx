import React from 'react'

const projects = [
  {
    name: "E-Commerce App",
    description: "Full-featured Android & Flutter app with payment integration",
    github: "https://github.com/Moe-KyawAung/ecommerce"
  },
  {
    name: "Analytics Dashboard",
    description: "AI-powered dashboard with real-time data visualization",
    github: "https://github.com/Moe-KyawAung/analytics-dashboard"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a href={project.github} target="_blank" className="text-pink-500 hover:underline">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  )
}
