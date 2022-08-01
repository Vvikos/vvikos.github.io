import React from 'react';
import me from "../assets/me-lavander-1.JPG";
  
export default function MainScreen({mainRef}) {

	const animateButton = function(e) {

		e.target.classList.remove('animate');
		
		e.target.classList.add('animate');
		setTimeout(function(){
		  e.target.classList.remove('animate');
		},700);
	};
  
	return (
		<div ref={mainRef} style={{display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center'}} >
			<div className="presentation">
				<div className="titleAlt" >Hello, I'm</div>
				<div className="title">VICTOR VOGT</div>
				<div className="titleAlt" >Fullstack & Automation Web Engineer</div>
				<div style={{padding: '50px'}}>
				<a onClick={animateButton} href="mailto:v.vogt991@gmail.com" class="cta">
					<span>Contact Me</span>
					<svg viewBox="0 0 13 10">
						<path d="M1,5 L11,5"></path>
						<polyline points="8 1 12 5 8 9"></polyline>
					</svg>
				</a>
				</div>
			</div>
			<img className="homePic" src={me}></img>
		</div>
	);
}