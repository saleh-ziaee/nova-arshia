import React from 'react';
import Image from 'next/image';
import google from '../../../../public/images/google.png';
import kasra from '../../../../public/images/kasra.svg';
import dedatech from '../../../../public/images/dedatech.svg';
import microsoft from '../../../../public/images/microsoft.svg';

const images = [
    { url: google, alt: 'Google' },
    { url: kasra, alt: 'Kasra' },
    { url: dedatech, alt: 'Dedatech' },
    { url: microsoft, alt: 'Microsoft' },
];

const WorkflowTabs = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-6 w-full'>
            <div className='text-[#A3A3A3] text-[16px] text-center'>
                <span>…محبوب‌ترین پلتفرم اتوماسیون گردش‌کار در ایران برای اتصال نرم افزارهای داخلی و خارجی، از جمله</span>
            </div>
        </div>
    );
};

export default WorkflowTabs;
