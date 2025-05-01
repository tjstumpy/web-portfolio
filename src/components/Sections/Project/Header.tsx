import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { projects } from '../../../data/projects';

type Project = typeof projects[0];

const ProjectHeader = ({ project }: { project: Project }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col text-text-primary bg-light-bg w-[80%] h-full">
        {/* header */}
        <header className="text-center pt-16 pb-20 md:pt-0">
          <h1 className="text-text-primary text-large font-medium">{project.title}</h1>
          <p className="text-text-secondary text-small font-light">{project.description}</p>
        </header>

        {/* content */}
        <div className="flex flex-col items-center justify-center gap-8 pb-0 h-full drop-shadow-lg md:pb-16">
          <img src={project.image} alt={project.title} className="w-full max-w-[90%] h-auto rounded-md mb-8 box-shadow-lg" />
          <div className="flex items-center gap-8 text-text-secondary text-small font-light">
            <a
              href={project.links.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              title={project.links.github ? '' : 'Not available'}
              className={`duration-300 ${
                project.links.github
                  ? 'cursor-pointer hover:text-text-primary'
                  : 'cursor-not-allowed opacity-50 pointer-events-none'
              }`}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span>|</span>
            <a
              href={project.links.figma || '#'}
              target="_blank"
              rel="noopener noreferrer"
              title={project.links.figma ? '' : 'Not available'}
              className={`duration-300 ${
                project.links.figma
                  ? 'cursor-pointer hover:text-text-primary'
                  : 'cursor-not-allowed opacity-50 pointer-events-none'
              }`}
            >
              <FontAwesomeIcon icon={faFigma} />
            </a>
            <span>|</span>
            {project.links.demo && project.links.demo.trim() !== '' ? (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="cursor-pointer duration-300 hover:text-text-primary">
                View Demo
              </a>
            ) : (
              <span className="cursor-default opacity-50 pointer-events-none">No demo available</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;