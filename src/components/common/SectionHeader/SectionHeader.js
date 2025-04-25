import './SectionHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionHeader = ({icon, title, navigation}) => {

	return(
		<div className='section-header'>
			<a href={`#${navigation}`} id={navigation}></a>
			<div className='about-header' data-aos="fade-up">
				<FontAwesomeIcon icon={icon} className='section-icon' />
				<h3 className='section-title'>
					<a id='title'>{title}</a>
				</h3>
			</div>
		</div>
	)
}

export default SectionHeader;