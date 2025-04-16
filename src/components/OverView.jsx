import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OverView = () => {
  useGSAP(() => {
    gsap.from(".card", {
      opacity: 0,
      x: -200, 
      stagger: 1, 
      duration: 2,
      scrollTrigger: {
        trigger: ".cards-container", 
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub:5, 
        pin: true, 
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
