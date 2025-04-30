import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import Navbar from '../UI/Navbar.tsx';
import ProjectHeader from '../Sections/Project/Header.tsx';
import Footer from '../UI/Footer.tsx';
import Links from '../UI/SocialLinks.tsx';
import ProjectSection from '../Sections/Project/ProjectSection.tsx';
import { Container } from '@mui/material';
import { BookText, Keyboard, Pencil } from 'lucide-react';

const ProjectPage = () => {
  const { projectName } = useParams<{ projectName: string }>();
  // const project = projectName ? projects[projectName as keyof typeof projects] : undefined;
  const project = projects.find(p => p.id === projectName);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <Navbar page="project" />
      <div>
        <Links />
        <Container sx={{ bgcolor: 'var(--light-bg)', height: '100%', p: '0 !important' }}>
          <ProjectHeader project={project} />
          <ProjectSection content={project.sections.about!.content} icon={<BookText className="text-text-secondary w-8 h-8 mt-2 mr-2 mb-2 ml-0" />} title="About" />
          <ProjectSection content={project.sections.design!.content} icon={<Pencil className="text-text-secondary w-8 h-8 mt-2 mr-2 mb-2 ml-0" />} title="Design" />
          <ProjectSection content={project.sections.implementation!.content} icon={<Keyboard className="text-text-secondary w-8 h-8 mt-2 mr-2 mb-2 ml-0" />} title="Implementation" />
        </Container>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default ProjectPage;
