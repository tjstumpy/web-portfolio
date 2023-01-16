import './projectboard.scss'
import { Typography, Paper, Button } from '@mui/material';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectBoard = ({ title, desc, link}) => {

	return (
				<Paper elevation={3} sx={{background: "#181818", p: 2, maxWidth: '30em', height: '30em'}}>
					<Typography variant='h2' sx={{color: 'white', fontSize: '3em', height: '15%'}}>{title}</Typography>
						<Typography sx={{color: '#9c9c9c', p: 2, fontSize: '1.5em', height: '55%'}}>
							{desc}
						</Typography>
					<Button sx={{p: 0}}>
						<a href={link} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='github-icon' color='#9c9c9c' /></a>
					</Button>
				</Paper>
	)
}

export default ProjectBoard;