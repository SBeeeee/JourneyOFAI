import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
    const containerRef = useRef(null);
    useGSAP(()=>{
        gsap.from(containerRef.current,{
            scale:0,
            opacity:0,
            duration:1,
            scrollTrigger:{
                    trigger:".start",
                    scroller:"body",
                    markers:true,
                    end:"top 40%",
                    scrub:true,
            }
        })
        gsap.from(".card1",{
            scale:0,
            opacity:0,
            x:-200,
            scrollTrigger:{
                trigger:".card1",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
        gsap.from(".card2",{
            scale:0,
            opacity:0,
            x:200,
            scrollTrigger:{
                trigger:".card2",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
        gsap.from(".card3",{
            scale:0,
            opacity:0,
            x:-200,
            scrollTrigger:{
                trigger:".card3",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
        gsap.from(".card4",{
            scale:0,
            opacity:0,
            x:200,
            scrollTrigger:{
                trigger:".card4",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
        gsap.from(".card5",{
            scale:0,
            opacity:0,
            x:-200,
            scrollTrigger:{
                trigger:".card5",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
        gsap.from(".card6",{
            scale:0,
            opacity:0,
            x:200,
            scrollTrigger:{
                trigger:".card6",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
        gsap.from(".card7",{
            scale:0,
            opacity:0,
            x:-200,
            scrollTrigger:{
                trigger:".card7",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
        gsap.from(".card8",{
            scale:0,
            opacity:0,
            x:200,
            scrollTrigger:{
                trigger:".card8",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
        gsap.from(".card9",{
            scale:0,
            opacity:0,
            x:-200,
            scrollTrigger:{
                trigger:".card9",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
        gsap.from(".card10",{
            scale:0,
            opacity:0,
            x:200,
            scrollTrigger:{
                trigger:".card10",
                scroller:"body",
                scrub:true,
                end:"top 36%",
                markers:true,
            }
        })
    })
    
    return (
        <div className="min-h-screen overflow-x-hidden  py-16 start" >
            <div className="text-center text-4xl font-bold heads mb-12 text-white" ref={containerRef}>
                The TimeLine Of AI
            </div>
            <div className="flex justify-center items-center  relative">
                {/* Left column */}
                <div className="w-1/2 pr-8 flex flex-col items-end space-y-24">
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card1">
                        <h3 className="font-bold">1950s</h3>
                        <p>Turing Test proposed</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card2">
                        <h3 className="font-bold">1980s</h3>
                        <p>Rise of Expert Systems</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card3">
                        <h3 className="font-bold">2006</h3>
                        <p>Deep Learning gets popularized</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card4">
                        <h3 className="font-bold">2020</h3>
                        <p>GPT-3 stuns the world</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card5">
                        <h3 className="font-bold">2023</h3>
                        <p>Multi-modal AI on the rise</p>
                    </div>
                </div>

                {/* Timeline vertical line */}
                <div className="  w-1 h-full  bg-white line"></div>

                {/* Right column */}
                <div className="w-1/2 pl-8 flex flex-col items-start space-y-24 pt-12">
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card6">
                        <h3 className="font-bold">1960s</h3>
                        <p>Symbolic AI emerges</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card7">
                        <h3 className="font-bold">1997</h3>
                        <p>Deep Blue defeats Kasparov</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card8">
                        <h3 className="font-bold">2012</h3>
                        <p>AlexNet wins ImageNet</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card9">
                        <h3 className="font-bold">2016</h3>
                        <p>AlphaGo defeats Lee Sedol</p>
                    </div>
                    <div className="border-1 border-white w-64 p-4 rounded-2xl border-x-4 card10">
                        <h3 className="font-bold">2024</h3>
                        <p>AI + Agents = New frontier</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLine;
