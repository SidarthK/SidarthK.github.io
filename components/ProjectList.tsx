import type { Project } from "@/data/siteContent";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <article key={project.title} className="rounded-xl bg-surface p-5">
          <h3 className="text-base font-semibold text-text">{project.title}</h3>
          <p className="mt-2 leading-7 text-muted">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full bg-background px-2.5 py-1 text-muted">
                {tech}
              </span>
            ))}
          </div>
          {project.links && project.links.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-accent underline decoration-accent-soft underline-offset-4 hover:text-accent-strong"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
