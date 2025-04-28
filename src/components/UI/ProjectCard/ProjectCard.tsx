import React from 'react';
import { Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

export default function ProjectCard({ image, title, summary, githubUrl, projectPath }) {
  return (
    <Paper elevation={3} className="project-card">
      {/* Image Section */}
      <img src={image} alt={title} className="project-card-image" />

      {/* Content */}
      <Box className="project-card-content">
        <div className="project-card-text">
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>

        <div className="project-card-links">
          <Link to={projectPath} className="external-link-btn">
            Learn More
          </Link>
          {/* <a href={githubUrl} target="_blank" rel="noreferrer" className="external-link-btn">
            View on GitHub
          </a> */}
        </div>
      </Box>
    </Paper>
  );
}
