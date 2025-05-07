import { Link } from 'react-router-dom';

interface ProjectCardProps {
  image: string;
  title: string;
  summary: string;
  projectPath: string;
}

export default function ProjectCard({ image, title, summary, projectPath }: ProjectCardProps) {
  return (
    <div className="flex flex-col border border-transparent rounded-md overflow-hidden w-75 h-75 drop-shadow-lg md:w-120 md:h-100">
      {/* Image Section */}
      <img src={image} alt={title} className="h-50 w-full object-top sm:h-105 " />
      {/* Content */}
      {/*  */}
      <div className="flex flex-col justify-between p-2 bg-dark-bg gap-2 md:p-4" style={{ boxShadow: '0 -4px 10px -4px rgba(0, 0, 0, 0.3)' }}>
        <div>
          <h3 className="text-small font-medium text-text-primary">{title}</h3>
          <p className="text-xxsmall font-light text-text-secondary md:text-xsmall">{summary}</p>
        </div>

        <div className="flex justify-end gap-2">
          <Link to={projectPath} className="bg-transparent border border-accent-primary text-accent-primary px-4 py-3 rounded text-xsmall text-center no-underline cursor-pointer transition-colors duration-300 hover:bg-accent-primary-hover">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
