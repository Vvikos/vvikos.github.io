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
		},700);
	};

	return (
		<div ref={mainRef} style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center', marginBottom: '20vh'}}>
			<Parallax translateY={[-10, 20]} style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
			<div className="about">
				<Bounce left>
					<img src={me}></img>
				</Bounce>
				<Bounce right>
					<div style={{width: '40%', marginLeft: "20px"}}>
						<div className="intro">
							<font color="#FF5E62">I am Victor Vogt</font>, I'm a junior fullstack and automation web engineer
						</div>
						<br />
						<div style={{height: '10%',width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap'}}>
							<div className='info'>
								<i class="fa-solid fa-location-dot fa-xl" style={{color: '#EA4335'}}></i>Strasbourg, France
							</div>
							<div className='info'>
								<i class="fa-solid fa-graduation-cap fa-xl" style={{color: '#EA4335'}}></i>Computer Science PhD, University of Strasbourg
							</div>
						</div>
						<div className="bubble" >
							Since I was a kid, I always spent time on my computer making animations and designing short 2D animations. All this time I spent made me discover my passions for designing and animating digital content.
							After that, I chosed to learn computer science for my future career and because I always find it easy to use a computer.
							<br /><br />
							As of today, I’m 22 and I come from France. My studies confirmed my passions for automation and fullstack projects.
							Furthermore, I have concrete passion for skateboarding, hiking, music, travelling and clothes.		
						</div>
						<div style={{ height: 'auto', display: 'flex', flexDirection: 'row', width: "80%", justifyContent: 'flex-start', alignItems: 'center'}}>
							<a onClick={animateButton} className="bubbly-button" href="/cv.pdf" download="CV"><i class="fa-solid fa-download"></i>Download CV</a>
							<a onClick={animateButton} className="bubbly-button" href="https://www.linkedin.com/in/victor-vogt-80b766209">Hire Me</a>
						</div>
					</div>
				</Bounce>
			</div>
			</Parallax>
		</div>
	);
}