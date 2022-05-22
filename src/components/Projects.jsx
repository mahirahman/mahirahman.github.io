import React from 'react'
import global from '../css/Global.module.css'
import projects from '../data/projects.json'

function Projects() {
  return (
    <section>
      <div className={global.container}>
        <h2 className={global.secondary_text}>Projects</h2>
        {projects.map(project => (
          <h3>{project.title}</h3>
        ))}
      </div>
    </section>
  )
}

export default Projects