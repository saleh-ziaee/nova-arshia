import React from 'react';
import ServicesSlider from "@/app/components/ServicesSlider";
import B2bAi from "@/app/components/B2bAi";

function AiToData() {
    return (
        <div className='relative py-80 flex flex-col items-center gap-16'>
            <div
                className="absolute"
                style={{
                    background: 'linear-gradient(180deg, #017A68 0%, #5159D9 100%)',
                    top: '120px',
                    width: '400px',
                    height: '800px',
                    maxWidth: '300px',
                    transform: 'rotate(20deg)',
                    zIndex: -1,
                    borderRadius: '5120px',
                    filter: 'blur(100px)',
                    opacity: '0.45',
                }}
            ></div>
            <div className='flex flex-col justify-center items-center'>
                <div
                    className="text-[38px] font-semibold text-center px-4"
                    style={{
                        background: 'linear-gradient(102deg, #FFFFFF 0%, #72C3B7 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    اتصال هوش مصنوعی به داده‌های شما
                </div>
                <span className='text-[#00917C] text-[38px] font-semibold'>
                 و بیش از ۵۰۰ سرویس دیگر، فقط با چند کلیک
            </span>
            </div>
            <ServicesSlider />
            <div>
                <B2bAi />
            </div>
        </div>
    );
}

export default AiToData;