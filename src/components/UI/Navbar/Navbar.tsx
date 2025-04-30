import React from 'react';
import '../../../types/custom.d.ts';
import './Navbar.scss';
import resume from '../../../assets/resume-2025.pdf';
import { User, Folder, Mail, House } from 'lucide-react';

const Navbar = ({ page = 'home' }) => (
  <nav className="nav-bar">
    {page === 'home' && (
      <>
        <div className="social-icon-wrapper">
          <User className="btn social-icon" />
          <a href="#about">About</a>
        </div>
        <div className="social-icon-wrapper">
          <Folder className="btn social-icon" />
          <a href="#projects">Projects</a>
        </div>
        <div className="social-icon-wrapper">
          <Mail className="btn social-icon" />
          <a href="#contact">Contact</a>
        </div>
      </>
    )}
    {page === 'project' && (
      <div className="social-icon-wrapper">
        <House className="btn social-icon" />
        <a href="/">Home</a>
      </div>
    )}
    <button className="resume-btn">
      <a href={resume} target="_blank" rel="noreferrer">
        Resume
      </a>
    </button>
  </nav>
);

export default Navbar;
