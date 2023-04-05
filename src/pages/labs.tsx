import React from "react"
import projectJson from "../../content/projects.json"

export default function Labs() {
  return (
    <main className="flex items-center justify-center h-48 bg-white shadow">
      {projectJson.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </main>
  )
}

function ProjectCard({
  project,
}: {
  project: {
    name: string
    description: string
    url: string
  }
}) {
  return <div></div>
}
