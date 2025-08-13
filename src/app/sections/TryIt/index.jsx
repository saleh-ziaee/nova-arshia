'use client';
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TryIt() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".title",
                    start: "top 80%",
                },
            });


            gsap.from(".description", {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".description",
                    start: "top 80%",
                },
            });


            gsap.from(".cta-button", {
                y: 30,
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                delay: 0.4,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".cta-button",
                    start: "top 90%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className='px-48 py-32'>
            <div
                className='gap-12 px-16 py-32 rounded-[16px] flex items-center justify-center flex-col'
                style={{
                    background: 'radial-gradient(175.86% 64.09% at 50% 110%, #133032 0%, rgba(22, 51, 53, 0.00) 100%), linear-gradient(180deg, rgba(1, 85, 91, 0.60) 0%, rgba(1, 85, 91, 0.00) 60%)'
                }}
            >
                <div className='title text-[38px] text-white font-semibold text-center'>
                    هیچ کاری نیست که با نوا نشه خودکار کرد.
                </div>
                <div className='description text-[20px] text-white text-center'>
                    این حرف ما نیست  تجربه‌ی کاربرامونه.
                    <br/>
                    شک داری؟ <span className='bg-[#1F192A] text-[#72C3B7] p-[2px] rounded-[4px]'>امتحانش کن</span> و خودت ببین.
                </div>
                <div>
                    <Button
                        size='lg'
                        className="cta-button rounded-lg bg-gradient-to-r from-[#017A68] to-[#72C3B7] backdrop-blur-[2.5px] border border-[#017A68] text-white"
                    >
                        همین حالا شروع کن
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TryIt;
