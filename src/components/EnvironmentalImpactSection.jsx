import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EnvironmentalImpactSection = () => {
  const sectionRef = useRef();

 useGSAP(()=>{
    const tl=gsap.timeline({
        scrollTrigger:{
            trigger:sectionRef.current,
            start:"top 20%",
            markers:true,
            end:"top 100%",
        }
    })
    tl.from(".heading",{
        scale:0,
        opacity:0,
        duration:1,
        y:200,
    })
    tl.from(".res",{
      opacity:0,
    })
    tl.from(".one",{
      opacity:0,
      x:500,
     duration:1.5
    })
    tl.from(".two",{
      x:-500,
     duration:1.5,
      opacity:0
    })
    tl.from(".three",{
      scale:0,
      duration:1.5,
      opacity:0
  })
  tl.from(".four",{
    scale:2,
    y:20,
    duration:1.5,
    opacity:0
  })
 })
  return (
    <section ref={sectionRef} className="py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-14 text-neutral-200">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white heading">🌍 The Hidden Cost of AI</h2>
          <p className="text-lg text-neutral-400 res">Why responsible AI usage matters</p>
        </div>

        {/* Water Consumption */}
        <div className="one">
          <h3 className="text-2xl font-semibold mb-2 text-white">💧 Water Consumption</h3>
          <p className="text-neutral-300 leading-relaxed">
            AI doesn't directly drink water—but the data centers powering models like ChatGPT use vast amounts of water for cooling.
            <br />
            Sending a simple 100-word email via GPT-4 consumes around{' '}
            <span className="font-medium text-blue-400">500 ml of water</span>—the same as a standard water bottle.
            <br />
            <a
              href="https://blogs.alpha2-inc.com/2024/09/22/sending-one-email-with-chatgpt-is-the-equivalent-of-consuming-one-bottle-of-water"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Source
            </a>
          </p>
        </div>

        {/* Energy Usage */}
        <div className="fade-in two">
          <h3 className="text-2xl font-semibold mb-2 text-white">⚡ Energy Usage</h3>
          <p className="text-neutral-300 leading-relaxed">
            Every ChatGPT query consumes approximately{' '}
            <span className="font-medium text-green-400">0.3 watt-hours</span>—that’s about 10x more than a Google search.
            <br />
            As usage scales, so does the carbon footprint.
            <br />
            <a
              href="https://time.com/6987773/ai-data-centers-energy-usage-climate-change"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Source
            </a>
          </p>
        </div>

        {/* AI Limitation Quote */}
        <div className="fade-in three">
          <h3 className="text-2xl font-semibold mb-2 text-white">🧠 Limitations of AI</h3>
          <p className="text-neutral-300 leading-relaxed">
            AI like ChatGPT is fundamentally a{' '}
            <span className="italic text-purple-400">"stochastic parrot"</span>—just mimicking language patterns.
            <br />
            OpenAI CEO Sam Altman even tweeted:{' '}
            <span className="italic text-neutral-100 font-medium">“i am a stochastic parrot and so r u”</span>.
            <br />
            <a
              href="https://en.wikipedia.org/wiki/Stochastic_parrot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              More on this
            </a>
          </p>
        </div>

        {/* Ghibli-inspired Thought */}
        <div className="fade-in four">
          <h3 className="text-2xl font-semibold mb-2 text-white">🎨 Ghibli-Inspired Reflections</h3>
          <p className="text-neutral-300 leading-relaxed">
            Like Studio Ghibli’s themes of nature and balance—tech and AI should also be aligned with sustainability.
            <br />
            As we innovate, let’s also consider how our tools impact the world beyond the screen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpactSection;
