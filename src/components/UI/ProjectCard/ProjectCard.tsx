import React from 'react';
import { Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

interface ProjectCardProps {
  image: string;
  title: string;
  summary: string;
  projectPath: string;
}

export default function ProjectCard({ image, title, summary, projectPath }: ProjectCardProps) {
  return (
    <Paper elevation={3} className="project-card">
      {/* Image Section */}
      <img src={image} alt={title} className="h-60 w-full object-contain sm:h-105" />

      {/* Content */}
      <Box className="project-card-content">
        <div className="project-card-text">
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>

        <div className="flex justify-end gap-2">
          <Link to={projectPath} className="bg-transparent border border-accent-primary text-accent-primary px-8 py-5 rounded text-2xl text-center no-underline cursor-pointer transition-colors duration-300 hover:bg-accent-primary-hover">
            Learn More
          </Link>
        </div>
      </Box>
    </Paper>
  );
}
