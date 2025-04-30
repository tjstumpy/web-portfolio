import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Folder } from 'lucide-react';
import SectionHeader from '../../UI/SectionHeader.tsx';
import ProjectCard from '../../UI/ProjectCard.tsx';
import { projects } from '../../../data/projects';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit w-full mt-100 mb-100">
      <SectionHeader
        icon={<Folder className="text-text-secondary w-8 h-8 mt-2 mr-2 mb-2 ml-0" />}
        title="Projects"
        navigation="projects"
      />
      <div className="w-[85%]" data-aos="fade-up">
        <p className="text-xsmall font-light text-center mt-4 mb-4 lg:text-small">
          Some of my most relevant projects to date
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 align-stretch lg:gap-8 lg:grid-cols-2 " data-aos="fade-up">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col">
            <ProjectCard
              image={project.image}
              title={project.title}
              summary={project.description}
              projectPath={`/projects/${project.id}`}
            />
          </div>
        ))}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-2 h-75 w-75 border border-text-secondary rounded-sm p-4 md:w-120 md:h-100">
            <FontAwesomeIcon icon={faBookmark} className="text-medium" />
            <span>New projects coming soon!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
