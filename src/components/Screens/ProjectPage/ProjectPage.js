import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar/navbar';
import { projectsData } from '../../Projects/projects';
import './ProjectPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma, faBookmark } from '@fortawesome/free-brands-svg-icons';
import { faBookmark as faBookmarkRegular, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

const ProjectPage = () => {
  const { projectName } = useParams();
  const project = projectsData[projectName];

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
                View Demo
              </a>
            </div>

            {/* about section */}
            <div className="project-about-wrapper">
              <SectionHeader icon={faBookmarkRegular} title="About" navigation="about" />
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
              <SectionHeader icon={faPen} title="Design" navigation="design" />
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

                <div className="design-layout">
                  <div className="design-text-group">
                    {project.designText?.slice(2, 6).map((item, index) => (
                      <span key={index} className="project-about-info">
                        {item}
                      </span>
                    ))}
                  </div>

                  <img
                    src={project.designImage}
                    alt={project.title}
                    className="project-desc-image"
                  />
                </div>

                {project.designText?.slice(6).map((item, index) => (
                  <span key={index} className="project-about-info">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* implementation section */}
            <div className="project-about-wrapper">
              <SectionHeader icon={faKeyboard} title="Implementation" navigation="implementation" />
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
