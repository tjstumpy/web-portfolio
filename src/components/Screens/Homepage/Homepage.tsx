import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../../UI/Navbar/Navbar.tsx';
import Links from '../../UI/SocialLinks/SocialLinks.tsx';
import Header from '../../Sections/Homepage/Header/Header.tsx';
import About from '../../Sections/Homepage/About/About.tsx';
import Projects from '../../Sections/Homepage/Projects/Projects.tsx';
import Contact from '../../Sections/Homepage/Contact/Contact.tsx';

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

      <div className="footer">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
      </div>
    </>
  );
};

export default Homepage;
