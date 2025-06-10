import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://ecommerce-demo.netlify.app"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      githubUrl: "https://github.com/example/taskmanager",
      liveUrl: "https://taskmanager-demo.vercel.app"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts for multiple locations.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/example/weather",
      liveUrl: "https://weather-dashboard-demo.netlify.app"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/example/analytics",
      liveUrl: "https://analytics-demo.vercel.app"
    }
  ]

  return (
    <section className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={16} />
                Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 