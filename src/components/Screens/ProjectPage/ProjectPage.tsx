import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../../Sections/Homepage/Projects/Projects.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { BookText, Pencil, Keyboard } from 'lucide-react';
import Navbar from '../../UI/Navbar.tsx';
import SectionHeader from '../../UI/SectionHeader.tsx';
import './ProjectPage.scss';

const ProjectPage = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projectName ? projectsData[projectName] : undefined;

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <Navbar page="project" />
      <div className="project-page-wrap">
        {/* <Links /> */}
        <div className="project-page">
          {/* header */}
          <header className="project-header">
            <h1>{project.title}</h1>
            <p className="project-summary">{project.description}</p>
          </header>

          {/* content */}
          <div className="project-header-content">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <span>|</span>
              <a href={project.figmaLink} className="figma-link">
                <FontAwesomeIcon icon={faFigma} />
              </a>
              <span>|</span>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                {project.demoLink && project.demoLink.trim() !== ''
                  ? 'View Demo'
                  : 'No demo available'}
              </a>
            </div>

            {/* about section */}
            <div className="project-about-wrapper">
              <SectionHeader
                icon={<BookText className="text-[3em] text-[var(--text-secondary)] mt-[0.5em] mr-[0.5em] mb-[0.5em] ml-0" />}
                title="About"
                navigation="about"
              />
              <div className="info-wrapper" data-aos="fade-up">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {project.aboutText?.map((item, index) => (
                    <span key={index} className="project-about-info">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* design section */}
            <div className="project-about-wrapper">
              <SectionHeader
                icon={<Pencil className="text-[3em] text-[var(--text-secondary)] mt-[0.5em] mr-[0.5em] mb-[0.5em] ml-0" />}
                title="Design"
                navigation="design"
              />
              <div
                className="info-wrapper"
                style={{ display: 'flex', flexDirection: 'column' }}
                data-aos="fade-up"
              >
                {project.designText?.slice(0, 2).map((item, index) => (
                  <span key={index} className="project-about-info">
                    {item}
                  </span>
                ))}

                <img
                  src={project.designImages[0]}
                  alt={project.title}
                  className="project-desc-image"
                />

                {project.designText?.slice(2, 5).map((item, index) => (
                  <span key={index} className="project-about-info">
                    {item}
                  </span>
                ))}

                <img
                  src={project.designImages[1]}
                  alt={project.title}
                  className="project-desc-image"
                />

                {project.designText?.slice(5).map((item: string, index) => (
                  <span key={index} className="project-about-info">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* implementation section */}
            <div className="project-about-wrapper">
              <SectionHeader
                icon={<Keyboard className="text-[3em] text-[var(--text-secondary)] mt-[0.5em] mr-[0.5em] mb-[0.5em] ml-0" />}
                title="Implementation"
                navigation="implementation"
              />
              <div className="info-wrapper" data-aos="fade-up">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {project.implementationText?.map((item, index) => (
                    <span key={index} className="project-about-info">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
      </div>
    </>
  );
};

export default ProjectPage;
