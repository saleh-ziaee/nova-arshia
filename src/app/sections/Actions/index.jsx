'use client';

import React, { useEffect, useRef } from "react";
import Action from "@/app/components/Action";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
    { lineHeight:'180px',key: "webhook", title: "Webhook", description: "اجرای خودکار یک گردش‌کار به‌محض وقوع یک رویداد در سیستم‌های دیگر." },
    { lineHeight:'70px',key: "httpRequest", title: "HTTP Request", description: "ارسال یا دریافت داده از سایر سیستم‌ها در هر مرحله از گردش‌کار." },
    { lineHeight:'180px',key: "receiveEmail", title: "دریافت ایمیل", description: "شروع گردش‌کار با یک ایمیل ورودی یا استفاده از آن به‌عنوان منبع داده." },
    { lineHeight:'70px',key: "aiAgent", title: "AI Agent", description: "فعال‌سازی عامل‌های هوشمند برای تحلیل و اجرا؛ ایجاد تعاملات خودکار با کاربر." },
    { lineHeight:'180px',key: "eventTransform", title: "Event Transform", description: "ساختاردهی و پردازش داده‌ها در هر مرحله از گردش‌کار." },
    { lineHeight:'70px',key: "trigger", title: "Trigger", description: "گرفتن تصمیم‌ بر اساس داده‌های موجود در گردش‌کار پیش از ادامه روند." },
    { lineHeight:'180px',key: "sendToStory", title: "Send to Story", description: "استفاده مجدد از یک گردش‌کار، به‌صورت تو‌در‌تو در گردش‌کارهای دیگر." },
];

function Actions() {
    const containerRef = useRef(null);

    useEffect(() => {
        const cards = containerRef.current.querySelectorAll(".action-card");

        gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="px-48 flex gap-32 flex-col items-center py-48">
            <div className='text-center font-semibold'>
               <span className='text-[38px] text-white'>
                   اَکشن‌ها
               </span>
                <div className="text-gray-500 text-[16px]">
                    اَکشن‌ها بلوک‌های سازنده‌ی جریان‌کار شما هستند.
                    <br/>
                    فقط کافیه فعالیت ‌های مختلف  رو روی بوم بچینید و به هم وصل کنید
                    <br/>
                    جریان‌کارتون آماده‌ی اجراست!
                </div>
            </div>
            <div className="flex justify-between gap-4 w-full">
                {workflowSteps.map((step) => (
                    <div key={step.key} className="action-card w-full">
                        <Action
                            title={step.title}
                            description={step.description}
                            lineHeight={step.lineHeight}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Actions;
