import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../../Navbar/navbar';
import Links from '../../Links/links';
import Header from '../../Header/header';
import About from '../../About/about';
import Projects from '../../Projects/projects';
import Contact from '../../Contact/contact';

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
