'use client';

import React, { useEffect, useRef } from 'react';
import agent from "../../../../public/images/agent.png";
import Image from "next/image";
import kasra from "../../../../public/images/kasra.svg";
import bahman from "../../../../public/images/bahman.jpg";
import { Separator } from "@/components/ui/separator";
import CommentSlider from "@/app/components/CommentSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function NovaComments() {
    const cardRefs = useRef([]);
    cardRefs.current = [];

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    useEffect(() => {
        cardRefs.current.forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: "power3.out",
            });
        });
    }, []);

    return (
        <div className='px-48 flex gap-18 flex-col font-semibold items-center'>
            <span
                className='text-[38px]'
                style={{
                    background: "linear-gradient(104deg, #FFF 0%, #7C65A1 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                 از کاربران نوا بشنوید
            </span>
            <div className='flex gap-8 w-full'>
                <div
                    ref={addToRefs}
                    className="w-1/2 px-16 py-12 rounded-[20px]"
                    style={{
                        background:
                            "radial-gradient(46.78% 40.54% at 40.71% 100.04%, rgba(1, 122, 104, 0.08) 0%, rgba(13, 71, 82, 0) 70%)",
                        border: ".5px solid rgba(1, 122, 104, 0.40)",
                    }}
                >
                    <div className='flex gap-16 flex-col'>
                        <Image src={kasra} alt={`agent`} width={100} height={50} priority />
                        <div className='text-[#C4BBD3] text-[20px]'>
                            انجام کار دو هفته‌ای در دو ساعت؛ با گردش‌کارهای خودکار در نوا
                        </div>
                    </div>
                    <Separator className='my-[32px] bg-gray-700' orientation="horizontal"/>
                    <div className='flex flex-col gap-12'>
                        <span className='text-[#E4E4E4]'>
                            از وقتی از نوا برای مدیریت کاربران استفاده می‌کنیم، بهره‌وری‌مون به‌طرز چشم‌گیری بالا رفته. فوق‌العاده قدرتمنده،
                            <br/>
                            اما در عین حال کار باهاش ساده‌ست.
                        </span>
                        <div className='flex gap-4'>
                            <Image src={bahman} alt={`kasra`} width={50} height={50} priority className='rounded-[50%]'/>
                            <div className='flex flex-col'>
                                <span className='text-white text-[16px]'>فرشید خوبانی</span>
                                <span className='text-[#C4BBD3]'>مدیر عامل</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    ref={addToRefs}
                    className="w-1/2 px-16 py-12 rounded-[20px]"
                    style={{
                        background:
                            "radial-gradient(46.78% 40.54% at 40.71% 100.04%, rgba(1, 122, 104, 0.08) 0%, rgba(13, 71, 82, 0) 70%)",
                        border: ".5px solid rgba(1, 122, 104, 0.40)",
                    }}
                >
                    <div className='flex gap-16 flex-col'>
                        <Image src={kasra} alt={`agent`} width={100} height={50} priority />
                        <div className='text-[#C4BBD3] text-[20px]'>
                            انجام کار دو هفته‌ای در دو ساعت؛ با گردش‌کارهای خودکار در نوا
                        </div>
                    </div>
                    <Separator className='my-[32px] bg-gray-700' orientation="horizontal"/>
                    <div className='flex flex-col gap-12'>
                        <span className='text-[#E4E4E4]'>
                            از وقتی از نوا برای مدیریت کاربران استفاده می‌کنیم، بهره‌وری‌مون به‌طرز چشم‌گیری بالا رفته. فوق‌العاده قدرتمنده،
                            <br/>
                            اما در عین حال کار باهاش ساده‌ست.
                        </span>
                        <div className='flex gap-4'>
                            <Image src={bahman} alt={`kasra`} width={50} height={50} priority className='rounded-[50%]'/>
                            <div className='flex flex-col'>
                                <span className='text-white text-[16px]'>فرشید خوبانی</span>
                                <span className='text-[#C4BBD3]'>مدیر عامل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CommentSlider />
        </div>
    );
}

export default NovaComments;
