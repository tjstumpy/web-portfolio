import { useParams } from 'react-router-dom';
import { projectsData } from '../Sections/Homepage/Projects.tsx';
import Navbar from '../UI/Navbar.tsx';
import ProjectHeader from '../Sections/Project/Header.tsx';
import Footer from '../UI/Footer.tsx';
import Links from '../UI/SocialLinks.tsx';
import About from '../Sections/Project/About.tsx';
import Design from '../Sections/Project/Design.tsx';
import Implementation from '../Sections/Project/Implementation.tsx';
import { Container } from '@mui/material';
const ProjectPage = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projectName ? projectsData[projectName as keyof typeof projectsData] : undefined;

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
          <About project={project} />
          <Design project={project} />
          <Implementation project={project} />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
