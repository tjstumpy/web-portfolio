import { Container } from '@mui/material';
import Navbar from '../../UI/Navbar.tsx';
import Links from '../../UI/SocialLinks.tsx';
import Header from '../../Sections/Homepage/Header.tsx';
import About from '../../Sections/Homepage/About.tsx';
import Projects from '../../Sections/Homepage/Projects.tsx';
import Contact from '../../Sections/Homepage/Contact.tsx';

const Homepage = () => {
  return (
    <>
      <Navbar page="home" />
      <div className="container-wrap">
        <Links />
        <Container sx={{ bgcolor: 'var(--light-bg)', height: '100%', p: '0 !important' }}>
          <Header />
          <About />
          <Projects />
          <Contact />
        </Container>
      </div>

      <div className="text-center w-full mb-20">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-small text-text-secondary font-light duration-300 hover:text-text-primary cursor-pointer">Back to Top</button>
      </div>
    </>
  );
};

export default Homepage;
