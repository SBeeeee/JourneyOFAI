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
  const dotsRef = useRef([]);

  const colors = ['#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#c084fc', '#f87171']; 

  const [dotStyles] = useState(() =>
    Array.from({ length: 100 }, () => ({
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      size: Math.random() * 4 + 2 + 'px',
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
  );

  useGSAP(() => {
    gsap.from(headref.current, {
      scale: 2,
      opacity: 0,
      y: -100,
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

    gsap.from('span.a', { y:50,opacity: 0, duration: 1, stagger: 0.15 });
    gsap.from('span.b', { y:50,opacity: 0, duration: 1, stagger: -0.15 });

    gsap.to(arrowref.current, {
      y: 20,
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

    dotsRef.current.forEach((dot, index) => {
      const randomX = Math.random() * 100 - 25;
      const randomY = Math.random() * 100 - 25;
      gsap.to(dot, {
        x: randomX,
        y: randomY,
        repeat: -1,
        yoyo: true,
        duration: Math.random() * 3 + 2,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {dotStyles.map((style, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="rounded-full absolute -z-10 shadow-md"
          style={{
            width: style.size,
            height: style.size,
            top: style.top,
            left: style.left,
            backgroundColor: style.color,
            opacity: 0.5,
            boxShadow: `0 0 8px ${style.color}`,
          }}
        />
      ))}
      <div className="flex flex-col justify-center items-center h-full gap-2 relative z-10">
        <div ref={headref} className="font-extrabold text-9xl font-[Orbitron] text-white">
          EVOlution OF AI
        </div>
        <div ref={titleref} className="text-6xl font-bold font-[Playfair_Display] text-white overflow-hidden">
          From Logic Gates to SuperIntelligence
        </div>
        <div ref={scrollref} className="text-4xl font-light mt-4 text-white">
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
