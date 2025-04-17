import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    const pro=useRef()
    useGSAP(()=>{
      gsap.from(".nav",{
        scale:0.5,
        opacity:0,
        duration:2,
        BackgroundColor:"transparent",
        delay:1,

      })
        gsap.from(".pro",{
            opacity:0,
            y:-100,
            duration:2,
            delay:2,
            stagger:0.5
        })
    })
  return (
    <div className="fixed top-0 h-12 w-full bg-gradient-to-b from-[#151515] to-[#1e1e1e] shadow-2xl z-12 flex justify-around nav">
      <div className="px-4 py-2 text-white pro" >THE AI PROSHOW</div>
      <div className="px-4 py-2 text-white pro">TIMELINE</div>
      <div className="px-4 py-2 text-white pro">OVERVIEW</div>
    </div>
  );
};

export default Navbar;
