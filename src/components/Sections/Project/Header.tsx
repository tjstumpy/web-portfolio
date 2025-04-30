import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';

const ProjectHeader = ({ project }: { project: any }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col text-text-primary bg-light-bg w-[80%] h-full">
        {/* header */}
        <header className="text-center pb-20">
          <h1 className="text-text-primary text-large font-medium">{project.title}</h1>
          <p className="text-text-secondary text-small font-light">{project.description}</p>
        </header>

        {/* content */}
        <div className="flex flex-col items-center justify-center gap-8 pb-16 h-full drop-shadow-lg">
          <img src={project.image} alt={project.title} className="w-full max-w-[90%] h-auto rounded-md mb-8 box-shadow-lg" />
          <div className="flex items-center gap-8 text-text-secondary text-small font-light">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="duration-300 hover:text-text-primary">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span>|</span>
            <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="duration-300 hover:text-text-primary">
              <FontAwesomeIcon icon={faFigma} />
            </a>
            <span>|</span>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="duration-300 hover:text-text-primary">
              {project.demoLink && project.demoLink.trim() !== ''
                ? 'View Demo'
                : 'No demo available'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;