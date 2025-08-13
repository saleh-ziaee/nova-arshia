"use client";
import MouseCursor from "@/app/components/MouseCursor";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WorkflowTabs from "@/app/components/WorkflowTabs";
import PopularPlatform from "@/app/sections/PopularPlatform";
import AiToData from "@/app/sections/AiToData";
import ServicesSlider from "@/app/components/ServicesSlider";
import WorkflowTab from "@/app/sections/WorkflowTab";

gsap.registerPlugin(ScrollTrigger);

const cursorItems = [
    { text: "متوقف نشو", color: "#D9F7BE", textColor: "#135200" },
    { text: "جریان بده", color: "#FFFBE6", textColor: "#874D00" },
    { text: "کنترل کن", color: "#FFD6E7", textColor: "#9E1068" },
    { text: "شتاب بده", color: "#BAE0FF", textColor: "#002C8C" },
    { text: "بساز", color: "#B5F5EC", textColor: "#006D75" },
    { text: "ساده کن", color: "#EFDBFF", textColor: "#531DAB" },
];

function WorkflowSection() {
    const cursorRefs = useRef([]);

    // موقعیت‌های ثابت دایره‌ای به دور مرکز (با توجه به centerTop و centerLeft)
    const staticPositions = (() => {
        const centerTop = 50; // تقریبی برای مرکز متن
        const centerLeft = 40;
        const radius = 30; // چقدر از مرکز فاصله داشته باشن (vw/vh)

        return Array.from({ length: 6 }, (_, i) => {
            const angle = (i / 6) * 2 * Math.PI;
            const top = centerTop + radius * Math.sin(angle);
            const left = centerLeft + radius * Math.cos(angle);
            return { top: `${top}vh`, left: `${left}vw` };
        });
    })();

    let lastScrollY = 0;

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
                const current = self.scroll();
                if (Math.abs(current - lastScrollY) > 40) {
                    lastScrollY = current;

                    cursorRefs.current.forEach((el, i) => {
                        if (!el) return;

                        const angle = Math.random() * 2 * Math.PI;
                        const distance = 80 + Math.random() * 30;

                        const x = Math.cos(angle) * distance;
                        const y = Math.sin(angle) * distance;

                        gsap.to(el, {
                            x,
                            y,
                            duration: 1,
                            ease: "power2.out",
                        });
                    });
                }
            },
        });

        return () => {
            trigger.kill();
        };
    }, []);



    return (
        <div>
            <div
                className="relative gap-96 min-h-screen md:min-h-[150vh] lg:min-h-[200vh] bg-[url('/images/FirstSection.jpg')] bg-cover bg-center text-white flex flex-col items-center pt-24 md:pt-32 lg:pt-90 overflow-hidden">
                <div className="flex items-center flex-col gap-[8px] z-10 max-w-3xl text-center relative">
                    <span className="text-[48px] font-semibold leading-tight">بین سرعت و کیفیت، انتخاب نکن</span>
                    <span className="text-[48px] font-semibold leading-tight">هر دو را داشته باش</span>
                    <span className="text-gray-400 text-xl mt-4">
                    با دقت کدنویسی یا سرعت کشیدن و رها کردن بسازید.
                        <br/>
                         با کنترل داخلی یا راحتی میزبانی ابری اجرا کنید.
                        <br/>
                         نوا  آزادی بیشتری برای پیاده‌سازی عامل‌های چندمرحله‌ای هوش مصنوعی و یکپارچه‌سازی برنامه‌ها نسبت به هر ابزار دیگری به شما می‌دهد.
                </span>
                </div>
                {staticPositions.map((pos, index) => (
                    <div
                        key={index}
                        ref={(el) => (cursorRefs.current[index] = el)}
                        className="absolute z-0 pointer-events-none"
                        style={{top: pos.top, left: pos.left}}
                    >
                        <MouseCursor
                            color={cursorItems[index].color}
                            text={cursorItems[index].text}
                            textColor={cursorItems[index].textColor}
                        />
                    </div>
                ))}
                <div className="mt-20 w-full">
                    <WorkflowTab/>
                </div>
            </div>
        </div>
    );
}

export default WorkflowSection;
