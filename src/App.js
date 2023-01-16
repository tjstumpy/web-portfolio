import './App.scss';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header'
import Links from './components/Links/links'
import Projects from './components/Projects/projects'
import { Container } from '@mui/material';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Tim Stumper's Portfolio";
  }, []);

  return (
    <>
      <Navbar/>
      <div className='container-wrap'>
        <Links/>
        <Container sx={{ bgcolor: '#212223', height: '100%'}}>
          <Header/>
          <About/>
          <Projects/>
          <Contact/>
        </Container>
      </div>

      <div className='footer'>
        <a href='#'>Back to Top</a>
      </div>
    </>
  );
}

export default App;
