import '../../types/custom.d.ts';
import resume from '../../assets/resume-2025.pdf';
import { User, Folder, Mail, House } from 'lucide-react';

const Navbar = ({ page = 'home' }) => (
  <nav className="bg-dark-bg min-h-24 w-full grid grid-flow-col items-center justify-center">
    {page === 'home' && (
      <>
        {/* About Link */}
        <div className="flex items-center justify-center w-16 cursor-pointer overflow-visible group">
          <User className="text-text-secondary text-small transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
          <a href="#about" className="absolute text-text-primary text-xsmall no-underline opacity-0 scale-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            About
          </a>
        </div>

        {/* Projects Link */}
        <div className="flex items-center justify-center w-16 cursor-pointer overflow-visible group">
          <Folder className="text-text-secondary text-small transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
          <a href="#projects" className="absolute text-text-primary text-xsmall no-underline opacity-0 scale-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            Projects
          </a>
        </div>

        {/* Contact Link */}
        <div className="flex items-center justify-center w-16 cursor-pointer overflow-visible group">
          <Mail className="text-text-secondary text-small transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
          <a href="#contact" className="absolute text-text-primary text-xsmall no-underline opacity-0 scale-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            Contact
          </a>
        </div>
      </>
    )}
    
    {page === 'project' && (
        <div className="flex items-center justify-center w-24 cursor-pointer overflow-visible group">
        <House className="text-text-secondary text-small transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
        <a href="/" className="absolute text-text-primary text-xsmall no-underline opacity-0 scale-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
          Home
        </a>
      </div>
    )}

    {/* Resume Button */}
    <a
      href={resume}
      target="_blank"
      rel="noreferrer"
      className="ml-8 px-6 py-3 text-xsmall text-accent-primary border border-accent-primary rounded-md hover:bg-accent-primary-hover transition-all duration-200"
    >
      Resume
    </a>
  </nav>
);

export default Navbar;
