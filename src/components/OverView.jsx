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
        scrub: 5, 
        
      },
    });
  }, []);

  const overviewContent = [
    {
      title: "Turing’s Vision",
      text: "The Turing Test laid the foundation—machines could think.",
    },
    {
      title: "Logic & Rules",
      text: "Early AI systems solved problems using hand-coded rules.",
    },
    {
      title: "Hype to Halt",
      text: "Funding dried up due to slow progress and unmet promises.",
    },
    {
      title: "Data + Compute Power",
      text: "Algorithms began learning from data. AI made a comeback.",
    },
    {
      title: "Deep Learning & GPT",
      text: "Neural nets, transformers, and dreams of general intelligence.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="cards-container flex space-x-8 p-10">
        {overviewContent.map((card, index) => (
          <div
            key={index}
            className="card bg-gradient-to-r from-cyan-400 to-blue-500 w-60 h-40 rounded shadow-lg text-white p-4"
          >
            <div className="font-bold text-lg mb-2">{card.title}</div>
            <div className="text-sm">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverView;
