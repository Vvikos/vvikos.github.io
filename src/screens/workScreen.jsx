import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-scroll-parallax";

export default function WorkScreen({mainRef}) {
  
  return (
    <div ref={mainRef} style={{ backgroundColor:'white', display: 'flex', flexDirection: 'row', minHeight: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'flex-start'}}>
		<Parallax translateY={[-1, 20]} style={{height: 'auto', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start'}} >
		<div className='column'>
			<Fade bottom>
				<div className='project' style={{height: '40vh', backgroundColor: '#ff9966'}}>
					RinVR
				</div>
			</Fade>
			<Fade bottom>
				<div className='project' style={{height: '60vh', backgroundColor: '#ff5e62'}}>
					MediaHub
				</div>
			</Fade>
			<Fade bottom>
				<div className='project' style={{height: '30vh', backgroundColor: '#F6AE99'}}>
					PROJECT
				</div>
			</Fade>
		</div>
		<div className='column'>
			<Fade bottom>
				<div className='project' style={{height: '60vh', backgroundColor: '#ff5e62'}}>
					MediaHub
				</div>
			</Fade>
			<Fade bottom>
				<div className='project' style={{height: '30vh', backgroundColor: '#F6AE99'}}>
					PROJECT
				</div>
			</Fade>
			<Fade bottom>
				<div className='project' style={{height: '40vh', backgroundColor: '#ff9966'}}>
					PROJECT
				</div>
			</Fade>
		</div>
		<div className='column'>
			<Fade bottom>
				<div className='project' style={{height: '40vh', backgroundColor: '#ff9966'}}>
					PROJECT
				</div>
			</Fade>
			<Fade bottom>
				<div className='project' style={{height: '60vh', backgroundColor: '#F6AE99'}}>
					PROJECT
				</div>
			</Fade>
			<Fade bottom>
				<div className='project' style={{height: '30vh', backgroundColor: '#ff9966'}}>
					PROJECT
				</div>
			</Fade>
		</div>
		</Parallax>
	</div>
  );
}