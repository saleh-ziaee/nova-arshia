'use client';
import React, { useState } from 'react';
import flow1 from '../../../../public/images/flow1.png';
import flow2 from '../../../../public/images/flow2.png';
import flow3 from '../../../../public/images/flow3.png';
import flow4 from '../../../../public/images/flow4.png';
import Image from "next/image";

const images = [
    { id: 1, url: flow1, title: "تیم عملیات فناوری میتونه", description: "⚡ کارکنان جدید را راحت و سریع وارد سیستم کنید" },
    { id: 2, url: flow2, title: "تیم امنیت میتونه", description: "⚡ پیگیری‌های امنیتی را سریع و خودکار تکمیل کنید"},
    { id: 3, url: flow3, title: "تیم توسعه و عملیات میتونه", description: "⚡ دستورهای ساده را به درخواست‌های API تبدیل کنید"},
    { id: 4, url: flow4, title: "تیم فروش میتونه", description: "⚡ از نظرهای مشتریان، تحلیل و بینش به‌دست آورید"},
    { id: 5, url: flow4, title: "و تو میتونی", description: "▶️ این ویدیو را ببینید تا بیشتر با ما آشنا بشید"},
];

function WorkflowTab() {
    const [active, setActive] = useState(images[0].id);
    const activeBg = "linear-gradient(0deg, rgba(1,122,104,0.15) 0%, rgba(1,122,104,0.15) 100%), radial-gradient(94.78% 79.29% at 59.78% 129.81%, #017A68 0%, rgba(1,122,104,0.00) 100%), linear-gradient(180deg, #0D4752 0%, rgba(13,71,82,0.00) 100%)";
    const inactiveBg = "linear-gradient(0deg, rgba(13,71,82,0.00) 0%, rgba(13,71,82,0.00) 100%), linear-gradient(180deg, #07242A 0%, #05161A 100%)";

    return (
        <div className='px-48 py-10'>
            {/* تب‌ها جدا بالای تصویر */}
            <div style={{background: "linear-gradient(180deg, #1F292B 70%)"}} className='rounded-lg p-2 bg-gray-500'>
                <div className="flex gap-2 justify-between mb-2">
                    {images.map((img) => (
                        <button
                            key={img.id}
                            onClick={() => setActive(img.id)}
                            style={{
                                backdropFilter: 'blur(5px)',
                                WebkitBackdropFilter: 'blur(5px)',
                                background: active === img.id ? activeBg : inactiveBg,
                                transition: 'background 1s ease'
                        }}
                            className={`p-8 cursor-pointer flex flex-col text-right rounded-lg font-semibold text-white transition ${
                                active === img.id ? "shadow-lg" : ""
                            }`}
                        >
                            <div>{img.title}</div>
                            <div className="text-sm">{img.description}</div>
                        </button>
                    ))}
                </div>

                {/* کانتینر عکس‌ها */}
                <div className="relative w-full mx-auto">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border-2 border-gray-700">
                        {images.map((img) => (
                            <Image
                                key={img.id}
                                src={img.url}
                                alt={img.title}
                                fill
                                style={{objectFit: 'contain'}}
                                className={`transition-opacity duration-500 ${
                                    active === img.id ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkflowTab;
