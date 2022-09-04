import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { Parallax } from "react-scroll-parallax";

import me from "../assets/me-lavander-1.JPG";
  
export default function IntroScreen({mainRef}) {
  
	const animateButton = function(e) {
		e.target.classList.remove('animate');
		
		e.target.classList.add('animate');
		setTimeout(function(){
		  e.target.classList.remove('animate');
		}, 700);
	};

	return (
		<div ref={mainRef} style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center', marginBottom: '20vh'}}>
			<Parallax translateY={[-10, 20]} style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
			<div className='about'>
				<Bounce left>
					<img alt=' ' src={me}></img>
				</Bounce>
				<Bounce right cascade>
					<div className='aboutInfoContainer'>
						<div className='intro'>
							<font color='#FF5E62'>I am Victor Vogt</font>, I'm a junior fullstack and automation web engineer
						</div>
						<br />
						<div className='aboutTagsContainer'>
							<div className='info'>
								<i className="fa-solid fa-location-dot fa-xl" style={{color: '#EA4335'}}></i>Strasbourg, France
							</div>
							<div className='info'>
								<i className='fa-solid fa-graduation-cap fa-xl' style={{color: '#EA4335'}}></i>Computer Science PhD, University of Strasbourg
							</div>
							<div className='info'>
								<a href='https://github.com/Vvikos' target='_blank'  rel="noreferrer"><i className="fa-brands fa-github fa-xl" style={{color: '#EA4335'}}></i>Vvikos</a>
							</div>
						</div>
						<div className="bubble" >
							Since I was a kid, I always spent time on my computer making animations and designing short 2D animations. All this time I spent made me discover my passions for designing and animating digital content.
							After that, I chosed to learn computer science for my future career and because I always find it easy to use a computer.
							<br /><br />
							As of today, I’m 22 and I come from France. My studies confirmed my passions for automation and fullstack projects.
							Furthermore, I have concrete passion for skateboarding, hiking, music, travelling and clothes.
						</div>
						<div className='aboutButtonsContainer'>
							<a onMouseDown={animateButton} className="bubbly-button" href="/cv.pdf" download="CV"><i className="fa-solid fa-download"></i>Download CV</a>
							<a onMouseDown={animateButton} className="bubbly-button" href="https://www.linkedin.com/in/victor-vogt-80b766209" target='_blank'  rel="noreferrer">Hire Me</a>
						</div>
					</div>
				</Bounce>
			</div>
			</Parallax>
		</div>
	);
}