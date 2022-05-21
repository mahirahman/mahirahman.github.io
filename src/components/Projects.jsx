import React from 'react'
import projects from '../projects.json'

function Projects() {
  return (
    <section>
      {projects.map(project => (
        <h1>{project.title}</h1>
      ))}
    </section>
  )
}

export default Projects