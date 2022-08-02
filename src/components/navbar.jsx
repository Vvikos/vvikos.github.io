import React, { useEffect, useState, useCallback, useRef } from "react";

export default function Navbar({homeRef, aboutRef, skillRef, workRef}) {
    const homeRefBtn = useRef(null);
    const aboutRefBtn = useRef(null);
    const skillRefBtn = useRef(null); 
    const workRefBtn = useRef(null);
    const backgroundRef = useRef(null);
    const logoRef = useRef(null);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleAnimation = useCallback((ref) => {
        const toRemoveRefs = [homeRefBtn?.current, aboutRefBtn?.current, skillRefBtn?.current, workRefBtn?.current];
        if (ref){
            ref.className = "underline";
            toRemoveRefs.forEach(element => {
                if(element && element !== ref)
                    element.className = "";
            });
        }
    }, [homeRefBtn, aboutRefBtn, skillRefBtn, workRefBtn]);

    useEffect(() => {
        const showBackground = () => {
            const ref = backgroundRef?.current;
            if (ref){
                ref.setAttribute('class', 'appearance');
                logoRef.current.className = 'navbarTitle appearance';
            }
        };
    
        const hideBackground = () => {
            const ref = backgroundRef?.current;
            if (ref){
                ref.setAttribute('class', '');
                logoRef.current.className = 'navbarTitle';
            }
        };

        const offetLimit = 50;

        if(offset*2+offetLimit>=aboutRef.current.offsetTop)
            showBackground();
        else
            hideBackground();

        if(offset+offetLimit>=workRef.current.offsetTop)
            handleAnimation(workRefBtn.current);
        else if(offset+offetLimit>=skillRef.current.offsetTop)
            handleAnimation(skillRefBtn.current);
        else if(offset+offetLimit>=aboutRef.current.offsetTop)
            handleAnimation(aboutRefBtn.current);
        else if(offset+offetLimit>=homeRef.current.offsetTop)
            handleAnimation(homeRefBtn.current);
        else 
            handleAnimation("none");
    }, [offset, homeRef, aboutRef, skillRef, workRef, handleAnimation]);

    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth"
        });
    };
    
    return (
        <div className="navbar">
            <svg ref={backgroundRef} xmlns="http://www.w3.org/2000/svg" viewBox="0.16367005621592057 -1.3584306347995945 1920.1007080078125 957.9055786132812" preserveAspectRatio="none">
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
            <div style={{width: '25%'}}>
                <div ref={logoRef} className="navbarTitle"><span className="firstLetter">V</span><span className="displayAfter">ICTOR</span> <span className="lastLetter">V</span><span className="displayAfter">OGT</span></div>
            </div>
            <div style={{width: '30%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <button ref={homeRefBtn} onClick={() => {handleScroll(homeRef.current); handleAnimation(homeRefBtn.current)}}>Home</button>
                <button ref={aboutRefBtn} onClick={() => {handleScroll(aboutRef.current); handleAnimation(aboutRefBtn.current)}}>About Me</button>
                <button ref={skillRefBtn} onClick={() => {handleScroll(skillRef.current); handleAnimation(skillRefBtn.current)}}>Services</button>
                <button ref={workRefBtn} onClick={() => {handleScroll(workRef.current); handleAnimation(workRefBtn.current)}}>Work</button>
            </div>
        </div>
          
    );
  }