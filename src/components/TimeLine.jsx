import React ,{useRef} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
    const containerRef = useRef();

    useGSAP(()=>{
        var tl=gsap.timeline({
            scrollTrigger:{
                trigger:containerRef.current,
                scroller:"body",
                start:"top 70%",
                end:"top 30%",
                markers:true,
                scrub:true,
            
            }
        });
        tl.from(".line",{
            opacity:0,
        })
        tl.from(".one",{
           
            opacity:0,
            duration:2,
            

        })
        tl.from(".two",{
    
            opacity:0,
            duration:2,
          
        })
        tl.from(".three",{
            display:"none",
            opacity:0,
            duration:2,
          
        })
        tl.from(".four",{
            display:"none",
            opacity:0,
            duration:2,
          
        })
        


    })
  return (
    <div className="h-screen " ref={containerRef}>
      <div className="text-center">The TimeLine Of AI</div>
<div className="flex justify-center">
    <div>
    <div className="border-1 border-white w-88 h-34 one">card1</div>
    <div className="border-1 border-white w-88 h-34 three">card1</div>
    </div>
    <div className="border-white border-2 line">
    </div>
    <div>
    <div className="border-1 border-white w-88 h-34 two">card1</div>
    <div className="border-1 border-white w-88 h-34 four">card1</div>
    </div>
</div>
    </div>
  )
}

export default TimeLine
