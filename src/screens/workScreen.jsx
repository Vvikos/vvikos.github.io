import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-scroll-parallax";

export default function WorkScreen({mainRef}) {
	
	const projects = [
		{name: 'RinVR', img: 'https://img.freepik.com/photos-gratuite/homme-copie-espace-appareil-futuriste_23-2148864987.jpg?w=1060&t=st=1659455377~exp=1659455977~hmac=be4005cb44d7f299b7eed709ce41708c955a67dc1cbac1fbe61fd9b185e8907f', desc: 'Application that allows to use R language in VR', role: 'Front End', techno: ['Three.js', 'React-XR', 'React Drei'], tags: ['Scholar', 'Research'], duration: '1 year', height: '40vh', backgroundColor: '#ff9966'},
		{name: 'MediaHub', img: 'https://plateaumarmots.fr/wp-content/uploads/2018/11/time-bomb-teaseur.jpg', desc: 'Application that allows to use R language in VR', role: 'Front End', techno: ['React Native'], tags: ['Scholar'], duration: '5 months', height: '60vh', backgroundColor: '#ff5e62'},
		{name: 'ApolloOptionsPicker', img: 'https://plateaumarmots.fr/wp-content/uploads/2018/11/time-bomb-teaseur.jpg', desc: 'Application that allows to choose graphically compilation settings for polyhedric compiler Apollo', role: 'Front End', techno: ['C++', 'Qt'], tags: ['Scholar', 'Research'], duration: '6 months', height: '30vh', backgroundColor: '#F6AE99'},
		{name: 'Exploding Kittens', img: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_900/ncom/fr_CA/games/switch/e/exploding-kittens-switch/hero', desc: 'Online game made from the traditional Exploding Kittens game card', role: 'Backend Server', techno: ['C#', 'Unity'], tags: ['Scholar'], duration: '6 months', height: '60vh', backgroundColor: '#ff5e62'},
		{name: 'Time Bomb', img: 'https://plateaumarmots.fr/wp-content/uploads/2018/11/time-bomb-teaseur.jpg', desc: 'Online game made from the traditional Time Bomb game card', role: 'Front End', techno: ['C++', 'Qt'], tags: ['Scholar'], duration: '6 months', height: '30vh', backgroundColor: '#F6AE99'}
	]

	const NB_COLS = 3;

	const generateColumn = (col) => {
		const rows = [];
		for(let i=0; i<projects.length; i++){
			if(col === i % NB_COLS)
				rows.push(<Fade bottom>
					<div className='project' style={{height: 'auto', backgroundColor: projects[i].backgroundColor}}>
						<img src={projects[i].img}></img>
						<div className='intitule'>{projects[i].name}</div>
						<div className='content'>
							<div className='technos'>
								{projects[i].techno.map(techno => <div className='techno'>{techno}</div>)}
							</div>
							{projects[i].desc}
							<div className='duration'>
								<i class="fa-light fa-circle-xmark"></i>{projects[i].duration}
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
		<div ref=
		{mainRef} style={{ backgroundColor:'white', display: 'flex', flexDirection: 'row', minHeight: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '30vh'}}>
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