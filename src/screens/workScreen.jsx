import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-scroll-parallax";
import AOP from "../assets/AOP.png";
import QA from "../assets/QA.jpg";
import VR from "../assets/VR.png";


export default function WorkScreen({mainRef}) {
	
	const projects = [
		{name: 'Test Processes Automation', img: QA, desc: 'As student contract at DALiM Software Gmbh, I had to automate all processes linked to tests and set up test environments for DALIM ES6 product', role: 'Automation Engineer', techno: ['Robot Framework', 'Karate DSL', 'Python', 'Ansible', 'UNIX/Linux'], tags: ['Scholar', 'Contract'], duration: '2 years', people: 5, backgroundColor: '#ff5e62'},
		{name: 'RinVR', img: VR, desc: 'WebVR application that immerses people into a graphical editor for R language to interact with data with a low knowledge in the language', role: 'Front End', techno: ['Three.js', 'React-XR', 'react-three/drei'], tags: ['Scholar', 'Research'], duration: '1 year', people: 5, backgroundColor: '#ff9966'},
		{name: 'MediaHub', img: 'https://git.unistra.fr/v.vogt/pm-media-hub/-/raw/main/src/assets/mh_logo.png', desc: 'Mobile application to manage all your series, movies and TV shows lecture and favorites', role: 'Front End', techno: ['React Native'], tags: ['Scholar'], duration: '3 months', people: 5, backgroundColor: '#ff5e62'},
		{name: 'ApolloOptionsPicker', img: AOP, desc: 'Application that allows to choose graphically compilation settings for Automatic speculative POLyhedral Loop Optimizer Apollo', role: 'Front End', techno: ['C++', 'Qt'], tags: ['Scholar', 'Research'], duration: '6 months', people: 1, backgroundColor: '#F6AE99'},
		{name: 'Exploding Kittens', img: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_900/ncom/fr_CA/games/switch/e/exploding-kittens-switch/hero', desc: 'Online game made from the traditional Exploding Kittens game card', role: 'Fullstack', techno: ['C#', 'Unity'], tags: ['Scholar'], duration: '6 months', people: 9, backgroundColor: '#ff5e62'},
		{name: 'Time Bomb', img: 'https://static.actugaming.net/media/2018/06/Timebomb-1-1-744x500.jpg', desc: 'Online game made from the traditional Time Bomb game card', role: 'Front End', techno: ['C++', 'Qt'], tags: ['Scholar'], duration: '6 months', people: 6, backgroundColor: '#F6AE99'}
	]

	const NB_COLS = 3;

	const generateColumn = (col) => {
		const rows = [];
		for(let i=0; i<projects.length; i++){
			if(col === i % NB_COLS)
				rows.push(<Fade key={'proj'+col+'x'+i} bottom>
					<div className='project' style={{height: 'auto', backgroundColor: projects[i].backgroundColor}}>
						<img src={projects[i].img} alt=''></img>
						<div className='intitule'>{projects[i].name}</div>
						<div className='content'>
							<div className='technos'>
								{projects[i].techno.map(techno => <div className='techno'>{techno}</div>)}
							</div>
							{projects[i].desc}
							<div style={{display: 'flex', width: '25%', justifyContent: 'space-between', position: 'absolute', bottom: '5%'}}>
								<div className='duration'>
									<i className="fa-solid fa-hourglass"></i>{projects[i].duration}
								</div>
								<div className='people'>
									<i className="fa-solid fa-user"></i>{projects[i].people}
								</div>
								{projects[i].source ?
									<div className='people'>
										<i className="fa-brands fa-gitlab"></i>{projects[i].source}
									</div>
									:
									null
								}
							</div>
						</div>
						<div className='role'>
							{projects[i].role}
						</div>
						<div className='tags'>
							{projects[i].tags.map(tag => <div className='tag'>{tag}</div>)}
						</div>
					</div>
				</Fade>);
		}
		return rows;
	}

	return (
		<div ref={mainRef} style={{ backgroundColor:'white', display: 'flex', flexDirection: 'row', minHeight: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '5vh'}}>
			<Parallax translateY={[-1, 20]} style={{height: 'auto', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start'}} >
			<div className='column'>
				{generateColumn(0)}
			</div>
			<div className='column'>
				{generateColumn(1)}
			</div>
			<div className='column'>
				{generateColumn(2)}
			</div>
			</Parallax>
		</div>
	);
}