import React from 'react';
import { Paper, Typography, Box, Button, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './projectboard.scss';

export default function ProjectBoard({ image, title, summary, githubUrl, projectPath }) {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: 'var(--dark-bg)',
        color: 'var(--text-primary)',
        width: '60em',
        height: '45em',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1,
        overflow: 'hidden',
        '@media (max-width: 600px)': {
          width: '30em',
          height: '35em',
        },
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          height: '125%',
          objectFit: 'contain',
          display: 'block',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
          p: 2,
          height: '40%',
          boxShadow: '0 0px 5px 0px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Box>
          <h3 style={{ fontWeight: 'bold', margin: '0', fontSize: '2.5em' }}>{title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.4em', marginTop: '0.5em' }}>
            {summary}
          </p>
        </Box>

        {/* Bottom Right Links */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Link to={projectPath} style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className="external-link-btn">Learn More</button>
          </Link>
          {/* <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <button className="external-link-btn">View on GitHub</button>
          </a> */}
        </Box>
      </Box>
    </Paper>
  );
}
