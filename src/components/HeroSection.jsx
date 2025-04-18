import React, { useRef, useState } from 'react';
import '@fontsource/orbitron/700.css';
import '@fontsource/playfair-display/600.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = () => {
  const headref = useRef();
  const titleref = useRef();
  const scrollref = useRef();
  const arrowref = useRef();


  

  useGSAP(() => {
    gsap.from(headref.current, {
      scale: 2,
      opacity: 0,
      y: -200,
      duration: 3,
     
    });

    const titleEl = titleref.current;
    const text = titleEl.textContent;
    const split = text.split('');
    const half = split.length / 2;

    let clutter = '';
    split.forEach((char, i) => {
      clutter += `<span class="inline-block ${i < half ? 'a' : 'b'}">${char}</span>`;
    });
    titleEl.innerHTML = clutter;

    gsap.from('span.a', { y:50,opacity: 0, duration: 2.5, stagger: 0.15 });
    gsap.from('span.b', { y:50,opacity: 0, duration: 2.5, stagger: -0.15 });

    gsap.from(arrowref.current,{
      scale:0,
      duration:1,
      delay:4.5
    })
    gsap.to(arrowref.current, {
      y: 30,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'power1.inOut',
    });

    gsap.from(scrollref.current, {
      scale: 0,
      opacity:0,
      duration: 4,
    });

   
    
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
     
      <div className="flex flex-col justify-center items-center h-full gap-2 relative z-10">
        <div ref={headref} className="font-extrabold text-7xl mb-2 text-white" style={{ fontFamily: '"Press Start 2P", cursive' }}>
          EVOlution OF AI
        </div>
        <div ref={titleref} className="text-6xl font-bold font-[Orbitron] text-white overflow-hidden">
          From Logic Gates to SuperIntelligence
        </div>
        <div ref={scrollref} className="text-4xl font-[Playfair_Display] font-light mt-4 text-white">
          Scroll To Explore
        </div>
        <div
          className="border-2 border-x-6 text-4xl border-pink-400 rounded-full p-0.5 px-4 text-white"
          ref={arrowref}
        >
          ↓
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
