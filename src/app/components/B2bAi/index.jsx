'use client';

import React, {useEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import agent from "../../../../public/images/agent.png";
import host from "../../../../public/images/selfHost.png";
import Image from "next/image";
import {CheckIcon} from "@heroicons/react/16/solid";
gsap.registerPlugin(ScrollTrigger);

function B2bAi() {


    const chatRefs = useRef([]);

    useEffect(() => {
        const directions = [
            { x: -100 },
            { x: 100 },
            { x: 100 },
            { x: -100 }
        ];

        chatRefs.current.forEach((el, i) => {
            gsap.from(el, {
                opacity: 0,
                ...directions[i],
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                }
            });
        });
    }, []);

    const sectionRefs = useRef([]);

    useEffect(() => {
        const animations = [
            { x: 100 },  // راستیه از راست بیاد
            { y: -100 }, // بالایی از بالا بیاد
            { y: 100 },  // پایینی از پایین بیاد
        ];

        sectionRefs.current.forEach((el, i) => {
            gsap.from(el, {
                opacity: 0,
                ...animations[i],
                duration: .9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                },
            });
        });
    }, []);


    return (
        <div className='flex flex-col items-center justify-center px-48 gap-24'>
            <div className='flex flex-col items-center gap-4'>
                <span
                    className="text-[48px]"
                     style={{
                     background: "linear-gradient(101deg, #FFF 0%, #7C65A1 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                      }}
                    >
                      سریع‌ترین راه برای استفاده از
                </span>
                <span className='text-[#00917C] text-[38px] font-semibold'>هوش مصنوعی در سازمان شما</span>
            </div>
            <div className='flex gap-4'>
                <div
                    ref={(el) => (sectionRefs.current[0] = el)}
                    className='flex flex-col border border-[rgba(255,255,255,0.1)] gap-8 text-right flex-[1_0_0] py-[40px] px-[40px] bg-gray-600 rounded-[19px]'
                    style={{background: 'radial-gradient(488.4% 134.86% at 96.57% 0.81%, rgba(1, 122, 104, 0.08) 0%, rgba(1, 122, 104, 0.00) 68.37%)'}}>
                    <div className='flex flex-col pb-24 gap-4'>
                        <span className='text-[#ffffff] font-semibold text-[24px]'>
                            چت‌بات اختصاصی بسازید
                        </span>
                        <span className='text-right text-gray-500 text-[16px]'>
                            با استفاده از Slack، تلگرام، پیامک، تماس صوتی
                            <br/>
                            یا چت سازمانی تودی کانکت
                            <br/>
                            ،پاسخ‌های دقیق از داده‌ها دریافت کنید،
                            <br/>
                              تسک جدید بسازید و گردش‌کارها را به پایان برسانید.
                        </span>
                    </div>
                    <div className='flex flex-col text-gray-500 gap-2'>
                        <div className='w-full flex justify-end'>
                            <div
                                ref={el => chatRefs.current[0] = el}
                                className='text-[14px] py-[9px] px-8 w-fit bg-[rgba(31,25,42,0.5)] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-rt-none border border-[rgba(255,255,255,0.1)]'>
                                چه کسی در شنبه هفته گذشته با ریاست جمهوری دیدار کرد؟
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-start w-full'>
                            <div
                                ref={el => chatRefs.current[1] = el}
                                className='text-[14px] py-[9px] px-8 w-fit max-w-1/2 bg-[rgba(31,25,42,0.5)] rounded-tl-lg rounded-br-lg rounded-bl-lg rounded-tr-none border border-[rgba(255,255,255,0.1)]'>
                                چه کسی در شنبه هفته گذشته با چهارشنبه، مریم استاتوسش را به در حال استراحت تغییر داد و به
                                مرخصی ۲ روزه رفت. او شنبه به شرکت بازمی‌گردد.
                            </div>
                            <div
                                ref={el => chatRefs.current[2] = el}
                                className='text-[14px] py-[9px] px-8 w-fit max-w-1/2 bg-[rgba(31,25,42,0.5)] rounded-tl-lg rounded-br-lg rounded-bl-lg rounded-tr-none border border-[rgba(255,255,255,0.1)]'>
                                یک برنامه دورهمی سالانه به مناسبت رکورد فروش در تیم فنی و فروش برگزار خواهد شد. تاریخ
                                دورهمی: ۲۷ تیر ماه مکان دورهمی: رستوران مرتضوی
                            </div>
                        </div>
                        <div className='w-full flex justify-end'>
                            <div
                                ref={el => chatRefs.current[3] = el}
                                className='text-[14px] py-[9px] px-8 w-fit max-w-1/2 bg-[rgba(31,25,42,0.5)] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-rt-none border border-[rgba(255,255,255,0.1)]'>
                                ...یک تسک مهم در جیرا بساز
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 flex-[2_0_0] rounded-[19px] justify-between'>
                    <div ref={(el) => (sectionRefs.current[1] = el)} className='flex justify-between items-center border border-[rgba(255,255,255,0.1)] py-[40px] px-[40px] text-right rounded-[19px]'
                         style={{background: 'radial-gradient(46.78% 40.54% at 40.71% 100.04%, rgba(1, 122, 104, 0.08) 0%, rgba(13, 71, 82, 0.00) 70%)'}}>
                        <div className='flex flex-col gap-2 w-[50%]'>
                            <span className='text-[#ffffff] text-[24px] font-semibold'>
                            ایجنت‌های چندمرحله‌ای بسازید
                        </span>
                            <span className='text-[#ffffff] text-[24px] font-semibold'>
                             و ابزارهای مورد نظرتان را فراخوانی کنید
                        </span>
                            <span className='text-gray-500'>
                            ایجنت‌های هوشمند خود را در یک صفحه بسازید.  مدل‌های زبان بزرگ (LLM) را به راحتی و با درگ‌اَند‌دراپ کردن به گردش‌کارهای خود اضافه کنید.
                        </span>
                        </div>
                        <div>
                            <Image
                                src={agent}
                                alt={`agent`}
                                width={400}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                    <div ref={(el) => (sectionRefs.current[2] = el)} className='flex justify-between items-center border border-[rgba(255,255,255,0.1)] py-[40px] px-[40px] text-right rounded-[19px]'
                         style={{background: 'radial-gradient(46.78% 40.54% at 40.71% 100.04%, rgba(1, 122, 104, 0.08) 0%, rgba(13, 71, 82, 0.00) 70%)'}}>
                        <div className='flex flex-col w-[50%] gap-8'>
                            <div className='flex flex-col gap-2'>
                                <span
                                    className='text-[#ffffff] text-[24px] font-semibold'>همه‌چیز روی سرور خودتان ،</span>
                                <span className='text-[#ffffff] text-[24px] font-semibold'>حتی مدل‌های هوش مصنوعی</span>
                                <span className='text-gray-500 text-[16px]'>امنیت داده‌های شما با استقرار در سرورهای داخلی محافظت می‌شود.</span>
                            </div>
                            <div className='flex flex-col items-start w-full text-gray-500 gap-4'>
                                <div className='flex gap-2'>
                                    <CheckIcon className='w-[22px] h-[22px]'/>
                                    <span>دیپلوی کردن با داکر</span>
                                </div>
                                <div className='flex gap-2'>
                                    <CheckIcon className='w-[22px] h-[22px]'/>
                                    <span>به تمام سورس کد در Github دسترسی دارید.</span>
                                </div>
                                <div className='flex gap-2'>
                                    <CheckIcon className='w-[22px] h-[22px]'/>
                                    <span>روی سرور شما قابل نصب است .</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={host}
                                alt={`agent`}
                                width={400}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default B2bAi;