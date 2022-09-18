import React, { useRef, useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import MainScreen from './screens/mainScreen';
import IntroScreen from './screens/introScreen';
import SkillsScreen from './screens/skillsScreen';
import WorkScreen from './screens/workScreen';

import Navbar from './components/navbar';
import Loader from './components/loader';

export default function App() {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);  
	const workRef = useRef(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {setLoading(false)}, 2500);
	});

	return (
		loading ?
			<Loader />
		:
			<>
				<Navbar homeRef={homeRef} aboutRef={aboutRef} skillRef={skillsRef} workRef={workRef} />
				<ParallaxProvider>	
					<div className="background">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.16367005621592057 -1.3584306347995945 1920.1007080078125 957.9055786132812" preserveAspectRatio="none">
							<g>
								<defs>
								<path id="s-Path_1-d1224" d="M0.8252032404294312 -1.358430652893662 C0.31490699431563485 113.02128546609619 -0.36522953982648687 384.2311208784114 0.8252032404292322 471.2649244770337 C1.4143995826298124 514.3416941851858 143.44043061040003 664.9195525526833 392.14466196340607 678.6381574260898 C558.0904475692921 674.5942381175788 710.1410641066531 688.5914750980185 941.9637338441424 739.177143587256 C1199.630808081561 803.7594004788388 1290.9120461486661 892.959968560174 1535.16512310636 952.4479839115171 C1736.7796488117272 982.0418995932193 1906.6719029994501 842.0850243652364 1920.2643610225061 830.621445634349 C1919.8812098398928 757.3655455686618 1919.0346895756065 195.28140202329183 1920.2643610225061 -1.358430652893695 C1743.949109672331 -1.2049152738022197 127.06540871692194 -1.0408054814632681 0.8252032404294312 -1.358430652893662 Z "></path>
								<linearGradient id="s-Path_1-d1224-gradient" x1="1918.3705688717318" y1="-3.428810055254182" x2="1.8529122878647126" y2="958.6176025382284" gradientUnits="userSpaceOnUse">
									<stop stopColor="#FF9966" offset="0.0%" stopOpacity="1.0"></stop>
									<stop stopColor="#FF5E62" offset="100.0%" stopOpacity="1.0"></stop>
								</linearGradient>
								</defs>
								<g style={{mixBlendMode: 'normal'}}>
								<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#s-Path_1-d1224" fill="url(#s-Path_1-d1224-gradient)" fillOpacity="1.0"></use>
								</g>
							</g>
						</svg>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg1" opacity={1} filter="blur(16px)" transform="rotate(0)">
							<defs>
								<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
									<stop stopColor="#FF9966" offset="0.0%" stopOpacity="1.0"></stop>
									<stop stopColor="#FF5E62" offset="100.0%" stopOpacity="1.0"></stop>
								</linearGradient>
							</defs>
								
							<path id="blob" fill="url(#gradient)" style={{opacity: 1}}>
								<animate attributeName="d" dur="17s" repeatCount="indefinite" values="M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z"></animate>
							</path>
						</svg>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg2" opacity={1} filter="blur(16px)" transform="rotate(0)">
							<defs>
								<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
									<stop stopColor="#FF9966" offset="0.0%" stopOpacity="1.0"></stop>
									<stop stopColor="#FF5E62" offset="100.0%" stopOpacity="1.0"></stop>
								</linearGradient>
							</defs>
								
							<path id="blob" fill="url(#gradient)" style={{opacity: 1}}>
								<animate attributeName="d" dur="12.1s" repeatCount="indefinite" values="M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z"></animate>
							</path>
						</svg>
						<MainScreen mainRef={homeRef} />
						<IntroScreen mainRef={aboutRef} />
						<SkillsScreen mainRef={skillsRef}/>
						<WorkScreen mainRef={workRef}/>
					</div>
					<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
						<defs>
							<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
						</defs>
						<g>
							<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,153,102,0.8)" />
							<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,153,102,0.6)" />
							<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,153,102,0.4)" />
							<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,153,102,0.3)" />
						</g>
					</svg>
				</ParallaxProvider>
			</>
	);
}