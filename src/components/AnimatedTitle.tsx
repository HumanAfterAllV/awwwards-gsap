"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import clsx from "clsx";

type AnimatedTitleProps = {
    title: Element | string | React.ReactNode;
    className: string;
};

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({title, className}: AnimatedTitleProps): React.JSX.Element{
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                }
            })
            titleAnimation.to(".animated-word", {
                opacity: 1,
                transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                ease: "power2.inOut",
                stagger: 0.02
            },0)
        }, containerRef) 

        return () => {
            ctx.revert();
        }
    },[])

    return (
        <div ref={containerRef} className={clsx("animated-title", className)}>
            {typeof title === 'string' && title.split("<br/>").map((line: string, index: number) => (
                <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                    {line.split(" ").map((word: string, idx: number) => (
                        <span key={idx} className="animated-word" dangerouslySetInnerHTML={{__html: word}}/>
                    ))}
                </div>
            ))}
        </div>
    )
}