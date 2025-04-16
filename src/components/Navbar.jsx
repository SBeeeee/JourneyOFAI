import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    const pro=useRef()
    useGSAP(()=>{
        gsap.from(".pro",{
            opacity:0,
            y:-100,
            duration:2,
            delay:2,
            stagger:1
        })
    })
  return (
    <div className="fixed top-0 h-12 w-full bg-transparent flex justify-around">
      <div className="px-4 py-2 text-white pro" >THE AI PROSHOW</div>
      <div className="px-4 py-2 text-white pro">TIMELINE</div>
      <div className="px-4 py-2 text-white pro">OVERVIEW</div>
    </div>
  );
};

export default Navbar;
