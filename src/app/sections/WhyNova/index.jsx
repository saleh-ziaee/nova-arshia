"use client";
import React, { useEffect, useRef } from "react";
import { ChartBarIcon } from "@heroicons/react/16/solid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const features = [
    {
        title: "عملکرد",
        description: "ثبت گزارش‌های ممیزی و ارسال لاگ به سرویس‌های ثالث، تاریخچه گردش‌کار، متغیرهای سفارشی، ذخیره‌سازی خارجی."
    },
    {
        title: "امنیت",
        description: "امکان استفاده کامل در محل، ورود یکپارچه (SSO) با SAML و LDAP، ذخیره‌سازی امن رمزگذاری‌شده، کنترل نسخه، مجوزهای پیشرفته مبتنی بر نقش (RBAC)."
    },
    {
        title: "همکاری",
        description: "کنترل گیت، محیط‌های ایزوله، گردش‌کارهای چندکاربره."
    }
];


function WhyNova() {
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    },
                    delay: index * 0.2, // کارت‌ها با فاصله ظاهر شوند
                }
            );
        });
    }, []);

    return (
        <div className="px-64 flex flex-col py-56 gap-24 min-h-[100vh] w-full relative items-center">
            {/* بک‌گراند رنگی */}
            <div
                className="absolute mx-auto"
                style={{
                    background: "linear-gradient(180deg, #017A68 0%, #5159D9 100%)",
                    top: "120px",
                    width: "400px",
                    height: "800px",
                    maxWidth: "300px",
                    transform: "rotate(20deg)",
                    zIndex: -1,
                    borderRadius: "5120px",
                    filter: "blur(100px)",
                    opacity: "0.45",
                }}
            ></div>

            <div className="flex flex-col justify-center items-center gap-2">
        <span className="text-[38px] text-white font-semibold">
          چرا نوا رو انتخاب کنم؟
        </span>
                <span className="text-[16px] text-gray-500 font-semibold text-center">
          با پیاده‌سازی اتوماسیون به همان دقتی که کد می‌نویسید، ناکارآمدی‌ها را
          در سازمان‌تان حذف کنید.
          <br />
          n8n را به‌صورت کاملاً جدا از اینترنت روی سرورهای خود اجرا کنید یا از
          راه‌حل امن ابری ما بهره‌مند شوید.
        </span>
            </div>

            <div className="flex gap-6 w-full">
                {features.map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardsRef.current[i] = el)}
                        className="flex flex-col w-1/3 items-center p-24 gap-4 rounded-[12px]"
                        style={{
                            background: "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.60) 100%)",
                        }}
                    >
                        <div className="p-6 border-1 border-gray-700 rounded-[16px] bg-gray-900 w-fit">
                            <ChartBarIcon
                                className="w-6"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #017A68 0%, rgba(1, 122, 104, 0.75) 75.48%, rgba(0, 145, 124, 0.50) 100%)",
                                }}
                            />
                        </div>
                        <span className="text-white text-[30px] font-semibold">{_.title}</span>
                        <span className="text-gray-500 text-[16px] text-center">
              {_.description}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyNova;
