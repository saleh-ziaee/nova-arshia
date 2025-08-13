'use client';

import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import meimoon from '../../../../public/images/meimoon.svg';

const ServicesSlider = () => {
    const timer1 = useRef(null);
    const timer2 = useRef(null);

    const [sliderRef1, instanceRef1] = useKeenSlider({
        loop: true,
        renderMode: 'performance',
        drag: false,
        slides: {
            perView: 16,
            spacing: 16,
        },
    });

    const [sliderRef2, instanceRef2] = useKeenSlider({
        loop: true,
        renderMode: 'performance',
        drag: false,
        slides: {
            perView: 16,
            spacing: 16,
        },
    });

    useEffect(() => {
        if (!instanceRef1.current) return;

        timer1.current = setInterval(() => {
            instanceRef1.current?.next();
        }, 2000);

        return () => {
            if (timer1.current) clearInterval(timer1.current);
        };
    }, [instanceRef1]);

    useEffect(() => {
        if (!instanceRef2.current) return;

        timer2.current = setInterval(() => {
            instanceRef2.current?.prev();
        }, 2000);

        return () => {
            if (timer2.current) clearInterval(timer2.current);
        };
    }, [instanceRef2]);

    const images = Array.from({ length: 20 }, (_, i) => i);

    return (
        <div className="flex flex-col gap-6 px-20 w-full">
            <div ref={sliderRef1} className="keen-slider">
                {images.map((item) => (
                    <div
                        key={`top-${item}`}
                        className="keen-slider__slide flex p-6 rounded-[12px] items-center bg-white justify-center"
                    >
                        <Image
                            src={meimoon}
                            alt={`meimoon-${item}`}
                            width={40}
                            height={40}
                            priority
                        />
                    </div>
                ))}
            </div>

            <div ref={sliderRef2} className="keen-slider">
                {images.map((item) => (
                    <div
                        key={`bottom-${item}`}
                        className="keen-slider__slide flex p-6 rounded-[12px] items-center bg-white justify-center"
                    >
                        <Image
                            src={meimoon}
                            alt={`meimoon-${item}`}
                            width={40}
                            height={40}
                            priority
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSlider;
