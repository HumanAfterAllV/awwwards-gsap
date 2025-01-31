"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle";


gsap.registerPlugin(ScrollTrigger);

export default function About(): React.JSX.Element{

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        tl.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        })
    })
    return( 
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]"> 
                    Welcome to Zentry
                </h2>
                <AnimatedTitle title="Disc<b>o</b>ver the world&apos;s l<b>a</b>rgest shared adventure" className="mt-5 !text-black text-center"/>
                <div className="about-subtext font-circular">
                    <p>
                        The Game of Games begins-your life, your world, your adventure.   
                    </p>
                    <p className="text-gray-500">
                        Zentry unites every player from countless games and platforms, both
                        digital and physical, into a unified Play Economy
                    </p>
                </div>
            </div>
            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <Image
                        src="/img/about.webp"
                        alt="Background"
                        className="absolute inset-0 size-full object-cover"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    )
}