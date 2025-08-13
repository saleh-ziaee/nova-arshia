"use client";
import React from "react";
import bahman from "../../../../public/images/bahman.jpg";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/16/solid";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Comment = [
    {
        comment:
            "به عنوان کسی که روزانه با چندین اپلیکیشن کار می‌کنه، این پلتفرم اتوماسیون واقعاً کارمو راحت کرده. همه چیز ساده و قابل‌فهمه و سرعت انجام کارها رو چند برابر کرده.",
        name: "مصطفی میرخلیلی",
        role: "مدیر فنی",
        rating: 5,
    },
    {
        comment:
            "این ابزار دقیقاً همونی بود که دنبالش بودم. میدونم جای پیشرفت داره ولی الان هم عالی و کاربردیه.",
        name: "ملیکا واعظ",
        role: "پروداکت منیجر",
        rating: 4.2,
    },
    {
        comment:
            "از وقتی این سیستم رو گذاشتم، وقت زیادی ذخیره کردم. کارهای تکراری دیگه دغدغه نیستن و همه چیز تحت کنترل شده.",
        name: "مهدی وفایی",
        role: "برنامه نویس back end",
        rating: 4.8,
    },
    {
        comment: "من خیلی حال کردم باهاش. ممنون",
        name: "معصومه رمضانی",
        role: "ui designer",
        rating: 5,
    },
    {
        comment:
            "همه چیز باهاش خودکار می‌شه، کلی توی وقت صرفه‌جویی کردم. خیلی باحاله!",
        name: "رضا بهمن پور",
        role: "برنامه نویس front end",
        rating: 4.6,
    },{
        comment:
            "همه چیز باهاش خودکار می‌شه، کلی توی وقت صرفه‌جویی کردم. خیلی باحاله!",
        name: "رضا بهمن پور",
        role: "برنامه نویس front end",
        rating: 4.6,
    },{
        comment:
            "همه چیز باهاش خودکار می‌شه، کلی توی وقت صرفه‌جویی کردم. خیلی باحاله!",
        name: "رضا بهمن پور",
        role: "برنامه نویس front end",
        rating: 4.6,
    },{
        comment:
            "همه چیز باهاش خودکار می‌شه، کلی توی وقت صرفه‌جویی کردم. خیلی باحاله!",
        name: "رضا بهمن پور",
        role: "برنامه نویس front end",
        rating: 4.6,
    },{
        comment:
            "همه چیز باهاش خودکار می‌شه، کلی توی وقت صرفه‌جویی کردم. خیلی باحاله!",
        name: "رضا بهمن پور",
        role: "برنامه نویس front end",
        rating: 4.6,
    },{
        comment:
            "همه چیز باهاش خودکار می‌شه، کلی توی وقت صرفه‌جویی کردم. خیلی باحاله!",
        name: "رضا بهمن پور",
        role: "برنامه نویس front end",
        rating: 4.6,
    },
];

function CommentSlider() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        rtl: true,
        slides: {
            perView: 4.5,
            spacing: 16,
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: {
                    perView: 1,
                    spacing: 8,
                },
            },
        },
    });

    return (
        <div ref={sliderRef} className="keen-slider">
            {Comment.map((item, index) => (
                <div
                    key={index}
                    className={`keen-slider__slide flex flex-col gap-32 justify-between border border-gray-700 rounded-[12px] p-6`}
                    style={{
                        backgroundColor:
                            index % 2 === 0 ? "rgba(147, 201, 255, 0.05)" : "transparent",
                    }}
                >
                    <div className="text-gray-400 text-right leading-[24px]">{item.comment}</div>
                    <div className="flex justify-between items-center mt-auto">
                        <div className="flex gap-2">
                            <Image
                                src={bahman}
                                alt={`agent-${index}`}
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div className="flex flex-col gap-[2px]">
                                <span className="text-[14px] text-white">{item.name}</span>
                                <span className="text-[14px] text-gray-500">{item.role}</span>
                            </div>
                        </div>
                        <div className="flex gap-[4px] items-center bg-gray-700 rounded-[20px] px-2 py-[1px]">
                            <StarIcon className="w-4 text-orange-300"/>
                            <span className="text-white">{item.rating}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentSlider;
