import Box from "../../../components/projects-box";
import projects from "../../../data/projects";

export default function Projects() {
  return (
    <div className="flex flex-col items-center space-y-6">
      {projects.map((project) => (
        <Box key={project.id} {...project} />
      ))}
    </div>
  );
}
