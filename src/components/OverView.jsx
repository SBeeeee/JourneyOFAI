import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OverView = () => {
  useGSAP(() => {
    gsap.from(".card", {
      opacity: 0,
      x: -200, // Move cards from left
      stagger: 1, // Stagger animation for each card
      duration: 2,
      scrollTrigger: {
        trigger: ".cards-container", // Pin the cards container
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub:3, // Smooth scroll effect
        pin: true, // Pin the container while scrolling
        markers: true,
      },
    });
  }, []);

  return (
    <div className="overflow-x-hidden ">
      <div className="cards-container flex space-x-8  p-10">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="card bg-amber-600  w-60 h-40 rounded shadow-lg text-white text-xl"
          >
            Card {num}
          </div>
        ))}
       
      </div>
     
    </div>
  );
};

export default OverView;
