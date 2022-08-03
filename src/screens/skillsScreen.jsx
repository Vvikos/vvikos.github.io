import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { Parallax } from "react-scroll-parallax";
  
export default function SkillsScreen({mainRef}) {
  
	return (
		<div ref={mainRef} style={{marginBottom: '20vh'}}>
		<Parallax translateY={[-10, 10]} style={{height: 'auto', width: '100%'}} ><Bounce bottom cascade>
		<div style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
				<div className="wrapper-card wrapper-card-down">
					<div className="card">
						<div><i className="fa-solid fa-display fa-3x" style={{color: '#00FFB8'}} ></i></div>
						<h2>Front End</h2>
						<div className="description">User friendly web interfaces developpement.</div>
						<div className="languages">
							<div className="language">React.js</div>
							<div className="language">React Native</div>
							<div className="language">React XR</div>
							<div className="language">Tree.js</div>
							<div className="language">HTML5</div>
							<div className="language">CSS</div>
							<div className="language">SCSS</div>
							<div className="language">NPM</div>
							<div className="language">Javascript</div>
							<div className="language">Expo</div>
						</div>
					</div>
				</div>
				<div className="wrapper-card-reversed">
					<div className="card">
						<div><i className="fa-solid fa-code fa-3x" style={{color: '#ff9966'}} ></i></div>
						<h2>Back End</h2>
						<div className="description">Large to small backend applications developpement and conception.</div>
						<div className="languages">
							<div className="language">Java</div>
							<div className="language">Python</div>
							<div className="language">Node.js</div>
							<div className="language">Rest API</div>
							<div className="language">GraphQL</div>
							<div className="language">NoSQL</div>
							<div className="language">SQL</div>
						</div>
					</div>
				</div>
				<div className="wrapper-card">
					<div className="card">
						<div><i className="fa-solid fa-bolt fa-3x" style={{color: '#FDD023'}} ></i></div>
						<h2>Automation</h2>
						<div className="description">Automate manual or deployement processes from operating systems to tests.</div>
						<div className="languages">
							<div className="language">Ansible</div>
							<div className="language">Git CI/CD</div>
							<div className="language">Docker</div>
							<div className="language">UNIX/Linux</div>
							<div className="language">Robot Framework</div>
							<div className="language">Karate DSL</div>
							<div className="language">Selenium</div>
						</div>
					</div>
				</div>
				<div className="wrapper-card-reversed wrapper-card-down">
					<div className="card">
						<div><i className="fa-solid fa-people-group fa-3x" style={{color: '#9d5aad'}} ></i></div>
						<h2>Engineering</h2>
						<div className="description">Work with a team to enhance project quality and work efficiency.</div>
						<div className="languages">
							<div className="language">Jira</div>
							<div className="language">Agile</div>
							<div className="language">SCRUM</div>
							<div className="language">English</div>
						</div>
					</div>
				</div>
		</div>
		</Bounce></Parallax>
		</div>
	);
}