import React, { useInsertionEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './header.scss'
import 'animate.css'

const Header = () => {

	const [letterClass, setLetterClass] = useState('text-animate')
	// const introArray = ['H', 'e', 'y', ',', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's']
	const introArray = ['H', 'e', 'y', ',', ' ', 'I', '\'', 'm']
	const nameArray = ['T', 'i', 'm', ' ', 'S', 't', 'u', 'm', 'p', 'e', 'r']

useInsertionEffect(() => {
	return setTimeout(() => {
		setLetterClass('text-animate-hover')
	}, 4000)
}, [])

	return (
	<div className='header-wrapper'>
		<div className='text-area'>
				{/* <span>Hi, my name is</span> */}
				<AnimatedLetters letterClass={letterClass} strArray={introArray} idx={10} type={'intro'}/>
				<br />
				<AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={18} type={'name'}/>
				{/* <h1 className='animate__animated animate__fadeInUp'>Tim Stumper</h1> */}
				
				<h2 className='animate__animated animate__fadeInUp'>Frontend Developer / Undergraduate Student</h2>
		</div>
	</div>
	);
	
}

export default Header;