import { Container } from '@mui/material';
import Navbar from '../UI/Navbar.tsx';
import Links from '../UI/SocialLinks.tsx';
import Header from '../Sections/Homepage/Header.tsx';
import About from '../Sections/Homepage/About.tsx';
import Projects from '../Sections/Homepage/Projects.tsx';
import Contact from '../Sections/Homepage/Contact.tsx';
import Footer from '../UI/Footer.tsx';

const Homepage = () => {
  return (
    <>
      <Navbar page="home" />
      <div>
        <Links />
        <Container sx={{ bgcolor: 'var(--light-bg)', height: '100%', p: '0 !important' }}>
          <Header />
          <About />
          <Projects />
          <Contact />
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
