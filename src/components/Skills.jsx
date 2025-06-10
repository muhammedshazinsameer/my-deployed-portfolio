import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "TypeScript", "Vue.js", "Tailwind CSS", "SASS/SCSS"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "Django", "PHP", "Laravel", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database & Cloud",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "AWS", "Google Cloud", "Docker", "Redis"]
    },
    {
      category: "Tools & Others",
      skills: ["Git/GitHub", "Webpack", "Vite", "Jest", "Cypress", "Figma", "Adobe XD", "Agile/Scrum"]
    }
  ]

  return (
    <section className="section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills