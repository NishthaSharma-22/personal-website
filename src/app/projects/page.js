import Box from "../../../components/projects-box";
import projects from "../../../data/projects";

export default function Projects() {
  return (
    <>
    <h1 className="font-semibold text-4xl m-3">Projects</h1>
      <div className="flex flex-col items-center space-y-6">
        {projects.map((project) => (
          <Box key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}
