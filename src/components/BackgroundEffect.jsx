import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const BackgroundEffect = () => {
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
    <div className="absolute inset-0 overflow-hidden -z-10">
      {dotStyles.map((style, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="rounded-full absolute shadow-md"
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
    </div>
  );
};

export default BackgroundEffect;
