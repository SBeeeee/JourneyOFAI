import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
    const containerRef = useRef(null);
    useGSAP(() => {
        gsap.from(containerRef.current, {
            scale: 0,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".start",
                scroller: "body",
                markers: false,
                end: "top 40%",
                scrub: true,
            }
        });

        for (let i = 1; i <= 10; i++) {
            gsap.from(`.card${i}`, {
                scale: 0,
                opacity: 0,
                x: i % 2 === 0 ? 200 : -200,
                scrollTrigger: {
                    trigger: `.card${i}`,
                    scroller: "body",
                    scrub: true,
                    end: "top 34%",
                    markers: false,
                }
            });
        }
    });

    return (
        <div className="min-h-screen overflow-x-hidden py-16 start">
            <div className="text-center text-4xl font-bold heads mb-12 text-white" ref={containerRef}>
                The TimeLine Of AI
            </div>
            <div className="flex justify-center items-center relative">
                {/* Left column */}
                <div className="w-1/2 pr-8 flex flex-col items-end space-y-24">
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card1">
                        <h3 className="font-bold">1950s</h3>
                        <p>Alan Turing proposes the Turing Test to evaluate machine intelligence — marking a foundational moment in AI history.</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card2">
                        <h3 className="font-bold">1980s</h3>
                        <p>Expert Systems dominate this decade, helping businesses with rule-based logic to mimic human decision-making.</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card3">
                        <h3 className="font-bold">2006</h3>
                        <p>Geoffrey Hinton and team reintroduce deep learning with success, boosting neural networks' popularity worldwide.</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card4">
                        <h3 className="font-bold">2020</h3>
                        <p>OpenAI’s GPT-3 showcases massive language understanding, surprising the world with human-like text generation.</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card5">
                        <h3 className="font-bold">2023</h3>
                        <p>Multi-modal AI systems emerge — combining images, audio, and text to perform complex and versatile tasks.</p>
                    </div>
                </div>

                {/* Timeline vertical line */}
                <div className="w-1 h-full bg-white line"></div>

                {/* Right column */}
                <div className="w-1/2 pl-8 flex flex-col items-start space-y-24 pt-12">
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card6">
                        <h3 className="font-bold">1960s</h3>
                        <p>Symbolic AI gains traction — focusing on logic, symbols, and rules to simulate reasoning and knowledge.</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card7">
                        <h3 className="font-bold">1997</h3>
                        <p>IBM's Deep Blue defeats World Chess Champion Garry Kasparov — a major milestone in AI vs human intellect.</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card8">
                        <h3 className="font-bold">2012</h3>
                        <p>AlexNet wins the ImageNet competition with deep convolutional networks, sparking a revolution in AI vision.</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card9">
                        <h3 className="font-bold">2016</h3>
                        <p>Google DeepMind's AlphaGo defeats champion Lee Sedol in Go — a feat once thought impossible for machines.</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card10">
                        <h3 className="font-bold">2024</h3>
                        <p>Autonomous AI agents rise — capable of planning, reasoning, and taking actions, defining a new frontier of intelligence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TimeLine;
