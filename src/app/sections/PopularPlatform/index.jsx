'use client';

import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import { gsap } from "gsap";
import google from '../../../../public/images/google.png';
import kasra from '../../../../public/images/kasra.svg';
import dedatech from '../../../../public/images/dedatech.svg';
import microsoft from '../../../../public/images/microsoft.svg';
import G2 from '../../../../public/images/G2.svg'
import github from '../../../../public/images/github.svg'
import n8n from '../../../../public/images/n8n.svg'

const images = [
    { url: kasra, alt: 'Kasra' },
    { url: microsoft, alt: 'Microsoft' },
    { url: google, alt: 'Google' },
    { url: dedatech, alt: 'Dedatech' },
];
const features = [
    { title: 'بدون پیچیدگی‌های اضافی' , description:"راه‌حلی یکپارچه برای اتوماسیون واقعی" ,icon:n8n ,
        background: 'linear-gradient(90deg, rgba(0, 109, 117, 0.43) -3.81%, rgba(81, 89, 217, 0.39) 47.41%, rgba(0, 109, 117, 0.39) 103.81%)'},
    { title: 'طراحی‌شده برای تیم‌های مدرن' , description:"سکویی منعطف، قابل‌اعتماد و رو به جلو" ,icon:github ,background: 'linear-gradient(\n' +
            '  90deg,\n' +
            '  rgba(37, 35, 50, 0.39) -3.81%,\n' +
            '  rgba(0, 109, 117, 0.43) 49.48%,\n' +
            '  rgba(42, 25, 41, 0.39) 103.81%\n' +
            ')'},
    { title: 'خودکارسازی، کلید رشد و موفقیت' , description:"از کوچک‌ترین کارها تا بزرگ‌ترین پروژه‌ها" ,icon:G2 ,background: 'linear-gradient(88deg, rgba(37, 35, 50, 0.39) -3.71%, rgba(0, 109, 117, 0.43) 47.42%, rgba(31, 46, 60, 0.40) 81.67%, rgba(0, 109, 117, 0.24) 98.03%)' +
            '\n'},
]


function PopularPlatform() {


    const imgRefs = useRef([]);

    useEffect(() => {
        imgRefs.current.forEach((img, i) => {
            gsap.from(img, {
                opacity: 0,
                x: i < 2 ? 100 : -100, // دو تای اول از راست (x=100)، دو تای بعدی از چپ (x=-100)
                duration: 1.2,
                delay: i * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: img,
                    start: "top 90%",
                }
            });
        });
    }, []);

    const featureRefs = useRef([]);

    useEffect(() => {
        if (typeof window === 'undefined') return; // جلوگیری از اجرای SSR

        featureRefs.current.forEach((el, i) => {
            let fromVars = { opacity: 0, duration: 1.2, ease: "power3.out" };

            if (i === 0) fromVars.x = 100; // از چپ
            if (i === 1) fromVars.y = -100; // از بالا
            if (i === 2) fromVars.x = -100;  // از راست

            gsap.from(el, {
                ...fromVars,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // وقتی وارد دید کاربر شد
                }
            });
        });
    }, []);

    return (
        <div className='w-[100%] pb-32'>
            <div className='flex justify-center items-center flex-col gap-6 w-full'>
                <div className='text-[#A3A3A3] text-[16px] text-center'>
                    <span>محبوب‌ترین پلتفرم اتوماسیون گردش‌کار در ایران برای اتصال نرم افزارهای داخلی و خارجی، از جمله …</span>
                </div>
                <div className='flex gap-36 flex-wrap justify-center items-center'>

                    {images.map((image, index) => (
                        <div
                            key={index}
                            ref={el => imgRefs.current[index] = el}
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                width={140}
                                height={40}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-6 mt-12 grid grid-cols-1 md:grid-cols-3 px-32">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        ref={el => featureRefs.current[index] = el}
                        className="p-6 text-white text-right"
                        style={{
                            background: feature.background,
                            boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.26)',
                            backdropFilter: 'blur(11px)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <div className='flex justify-start gap-4 items-center'>
                            <div>
                                <Image alt={feature.title} src={feature.icon} />
                            </div>
                            <div>
                                <h3 className="text-[16px] font-bold mb-2">{feature.title}</h3>
                                <p className="text-[16px] opacity-80">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
        ;
}

export default PopularPlatform;