import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
    const containerRef = useRef(null);

    
    return (
        <div className="min-h-screen overflow-x-hidden mt-8 py-16" ref={containerRef}>
            <div className="text-center text-4xl font-bold heads mb-12 text-white">
                The TimeLine Of AI
            </div>
            <div className="flex justify-center relative">
                {/* Left column */}
                <div className="w-1/2 pr-8 flex flex-col items-end space-y-24">
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">1950s</h3>
                        <p>Turing Test proposed</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">1980s</h3>
                        <p>Rise of Expert Systems</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">2006</h3>
                        <p>Deep Learning gets popularized</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">2020</h3>
                        <p>GPT-3 stuns the world</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">2023</h3>
                        <p>Multi-modal AI on the rise</p>
                    </div>
                </div>

                {/* Timeline vertical line */}
                <div className="absolute h-full w-1 bg-white left-1/2 transform -translate-x-1/2 line"></div>

                {/* Right column */}
                <div className="w-1/2 pl-8 flex flex-col items-start space-y-24 pt-12">
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">1960s</h3>
                        <p>Symbolic AI emerges</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">1997</h3>
                        <p>Deep Blue defeats Kasparov</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">2012</h3>
                        <p>AlexNet wins ImageNet</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">2016</h3>
                        <p>AlphaGo defeats Lee Sedol</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card">
                        <h3 className="font-bold">2024</h3>
                        <p>AI + Agents = New frontier</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLine;
