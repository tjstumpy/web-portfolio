import './projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import ProjectBoard from '../common/projectboard/projectboard';

const Projects = () => {

	const playlistProject = (
		<p>A <span style={{color: 'white'}}>full-stack</span> web application using <span style={{color: 'white'}}>Node.js</span>, <span style={{color: 'white'}}>REST APIs</span>, and <span style={{color: 'white'}}>React</span> which eleminates many tedious tasks of cross-platform playlist management. Relies heavily on <span style={{color: 'white'}}>OAuth</span> for platforms like Spotify, Apple Music, and YouTube in order for users to acess their data.</p>
	);

	const needsProject = (
		<p>An <span style={{color: 'white'}}>Angular</span> web app which tells users which special needs benefits they (or a dependent) are eligible for after completing a form. Made possible with <span style={{color: 'white'}}>MongoDB</span> backend and <span style={{color: 'white'}}>HighCharts</span> for data visualization.</p>
	)

	const loanProject = (
		<p>An <span style={{color: 'white'}}>Angular</span> web app which helps users pay off their student loans given a set of inputs (loan amount, interest rate, term, etc). Utilizes <span style={{color: 'white'}}>HighCharts</span> to display a timeline of loan amortization alongside <span style={{color: 'white'}}>Bootstrap</span> for a smooth UI and UX.</p>
	)

	const skateProject = (
		<p>Full-stack web application using <span style={{color: 'white'}}>Google Maps API</span> accompanied with <span style={{color: 'white'}}>Firebase Realtime Database</span> which helped process uploaded files and marker information. Interactive map markers display correlating user submitted data regarding desirable skate parks near the user.</p>
	)
	
	return (
		
	<div href='' className='projects-wrapper'>
		<a href='#projects' id='projects'></a>
		<div className='about-header' data-aos="fade-up">
			<FontAwesomeIcon icon={faFolder} className='btn about-icon' color='#9c9c9c' />
			<h3 className='about-title'>
				<a id='projects'>Projects</a>
			</h3>
		</div>
		<div className="project-bio" data-aos="fade-up">
			<p style={{fontSize: '1vw', textAlign: 'center'}}>Some of my most relevant projects to date</p>
		</div>
		<div className="grid-container" data-aos="fade-up">
			{/* <Box sx={{display: 'flex', flexDirection: 'row', gap: 4, pt: 4, height: 370}}> */}
				<div className='grid-item grid-item-1'>
					<ProjectBoard 
					title={'WIP!'} 
					desc={<p>I have big plans for new projects, but I can't share them yet! They are in the works!</p>}
					link={'https://github.com/tjstumpy'}/>
				</div>
				{/* <div className='grid-item grid-item-2'>
					<ProjectBoard 
					title={'Playlist Transfer'} 
					desc={playlistProject}
					link={'https://github.com/tjstumpy/playlist-transfer-service'}/>
				</div> */}
				<div className='grid-item grid-item-3'>
					<ProjectBoard 
					title={'Special Needs Analysis'} 
					desc={needsProject}
					link={'https://github.com/tjstumpy/special-needs-analysis'}/>
				</div>
				<div className='grid-item grid-item-4'>
					<ProjectBoard 
					title={'Student Loan Calc'} 
					desc={loanProject}
					link={'https://github.com/tjstumpy/student-loan-calculator'}/>
				</div>
			{/* </Box> */}
			{/* <Box sx={{display: 'flex', flexDirection: 'row', gap: 4, pt: 4, height: 370}}> */}
			<div className='grid-item grid-item-5'>
					<ProjectBoard 
					title={'SkateStop'} 
					desc={skateProject}
					link={'https://github.com/tjstumpy/playlist-transfer-service'}/>
			</div>
			{/* </Box> */}
		</div>
		</div>
	)
}

export default Projects;