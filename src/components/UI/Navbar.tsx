import '../../types/custom.d.ts';
import resume from '../../assets/resume-2025.pdf';
import { User, Folder, Mail, House } from 'lucide-react';

const Navbar = ({ page = 'home' }) => (
  <nav className="bg-[var(--dark-bg)] h-[8vh] min-h-[8em] w-full grid grid-flow-col items-center justify-center">
    {page === 'home' && (
      <>
        {/* About Link */}
        <div className="flex items-center justify-center h-[35%] w-[8em] cursor-pointer overflow-visible group">
          <User className="text-[var(--text-secondary)] text-[1.5em] transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
          <a href="#about" className="absolute text-[var(--text-primary)] text-[1.5em] no-underline opacity-0 scale-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            About
          </a>
        </div>

        {/* Projects Link */}
        <div className="flex items-center justify-center h-[35%] w-[8em] cursor-pointer overflow-visible group">
          <Folder className="text-[var(--text-secondary)] text-[1.5em] transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
          <a href="#projects" className="absolute text-[var(--text-primary)] text-[1.5em] no-underline opacity-0 scale-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            Projects
          </a>
        </div>

        {/* Contact Link */}
        <div className="flex items-center justify-center h-[35%] w-[8em] cursor-pointer overflow-visible group">
          <Mail className="text-[var(--text-secondary)] text-[1.5em] transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
          <a href="#contact" className="absolute text-[var(--text-primary)] text-[1.5em] no-underline opacity-0 scale-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            Contact
          </a>
        </div>
      </>
    )}
    
    {page === 'project' && (
        <div className="flex items-center justify-center h-[35%] w-[8em] cursor-pointer overflow-visible group">
        <House className="text-[var(--text-secondary)] text-[1.5em] transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
        <a href="/" className="absolute text-[var(--text-primary)] text-[1.5em] no-underline opacity-0 scale-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
          Home
        </a>
      </div>
    )}

    {/* Resume Button */}
    <a
      href={resume}
      target="_blank"
      rel="noreferrer"
      className="ml-12 px-6 py-3 text-[1.5em] text-[var(--accent-primary)] border border-[var(--accent-primary)] rounded-md hover:bg-[var(--accent-primary-hover)] transition-all duration-200"
    >
      Resume
    </a>
  </nav>
);

export default Navbar;
