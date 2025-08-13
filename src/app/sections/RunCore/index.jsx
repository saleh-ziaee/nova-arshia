'use client';

import React, {useEffect, useRef} from 'react';
import {CheckIcon} from "@heroicons/react/16/solid";
import core from "../../../../public/images/core.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function RunCore() {

    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
    const item3Ref = useRef(null);
    const item4Ref = useRef(null);

    useEffect(() => {
        const animations = [
            { ref: item1Ref, x: -50 },
            { ref: item2Ref, x: 50 },
            { ref: item3Ref, x: -50 },
            { ref: item4Ref, x: 50 },
        ];

        animations.forEach(({ ref, x }, i) => {
            gsap.from(ref.current, {
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                },
                x: x,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.1,
                ease: "power2.out",
            });
        });
    }, []);

    return (
        <div className='px-48 py-48'>
            <div className='flex bg-[#090D18] rounded-lg border border-[rgba(255,255,255,0.1)] py-[200px] pl-[80px]'>
                <div className='w-[50%] flex justify-center'>
                    {/*<Image*/}
                    {/*    src={core}*/}
                    {/*    alt={`agent`}*/}
                    {/*    width={500}*/}
                    {/*    height={500}*/}
                    {/*    priority*/}
                    {/*/>*/}
                </div>
                <div className='w-[50%]'>
                    <div className='flex flex-col gap-4'>
                        <div
                            style={{
                                background: 'linear-gradient(98deg, rgba(255,255,255,1) 0%, rgba(124,124,124,1) 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: "38px",
                                fontWeight:"600"
                            }}
                        >
                            اجرا کن. تغییر بده. دوباره اجرا کن.
                        </div>
                        <div className="text-[#C4BBD3] text-[16px]">
                            همون چرخه‌های سریع بازخورد که باعث می‌شن از اسکریپت‌هات لذت ببری.
                        </div>

                        (
                        <div className="grid grid-cols-2 gap-4">
                            <div ref={item1Ref} className="flex gap-2">
                                <div className="text-[#C4BBD3]">
                                    <CheckIcon className="w-[22px] h-[22px]" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-white">منتظر سیستم‌های خارجی نمون.</span>
                                    <span className="text-[#C4BBD3]">سریع دیباگ کن، با لاگ‌های دقیق در لحظه.</span>
                                </div>
                            </div>

                            <div ref={item2Ref} className="flex gap-2">
                                <div className="text-[#C4BBD3]">
                                    <CheckIcon className="w-[22px] h-[22px]" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-white">منتظر سیستم‌های خارجی نمون.</span>
                                    <span className="text-[#C4BBD3]">سریع دیباگ کن، با لاگ‌های دقیق در لحظه.</span>
                                </div>
                            </div>

                            <div ref={item3Ref} className="flex gap-2">
                                <div className="text-[#C4BBD3]">
                                    <CheckIcon className="w-[22px] h-[22px]" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-white">منتظر سیستم‌های خارجی نمون.</span>
                                    <span className="text-[#C4BBD3]">سریع دیباگ کن، با لاگ‌های دقیق در لحظه.</span>
                                </div>
                            </div>

                            <div ref={item4Ref} className="flex gap-2">
                                <div className="text-[#C4BBD3]">
                                    <CheckIcon className="w-[22px] h-[22px]" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-white">منتظر سیستم‌های خارجی نمون.</span>
                                    <span className="text-[#C4BBD3]">سریع دیباگ کن، با لاگ‌های دقیق در لحظه.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RunCore;