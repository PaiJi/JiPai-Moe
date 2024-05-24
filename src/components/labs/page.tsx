import React from "react";
import clsx from "clsx";
import projectJson from "@content/projects.json";
import { ContainerStyle } from "@utils/define";

export default function Labs() {
  return (
    <main>
      <div className={clsx("w-full grid grid-cols-1 gap-4 p-8 my-8", ContainerStyle)}>
        {projectJson.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    name: string;
    description: string;
    url: string;
    languages: string[];
  };
}) {
  return (
    <a href={project.url} referrerPolicy="no-referrer">
      <div className="h-full w-full bg-blue-50 rounded-lg transition duration-200 p-2 flex flex-row items-center justify-between transform hover:cursor-pointer hover:bg-sky-50 hover:outline-blue-200 outline outline-1 outline-blue-100">
        <div>
          <h1 className="text-xl text-gray-700">{project.name}</h1>
          <div className="project-card__languages">
            {project.languages.map((language) => (
              <span key={language} className="text-xs text-gray-600">
                {language}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-700">{project.description}</p>
      </div>
    </a>
  );
}
