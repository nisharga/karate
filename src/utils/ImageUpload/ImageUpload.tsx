'use client';
import { Icons } from '@/components/Icons';
import React, { useRef } from 'react';

const ImageUpload = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div onClick={handleDivClick} className='py-8 mx-auto'>
            <div className='flex flex-col items-center justify-center gap-4 '>
                <div className='w-3/4 md:w-1/3 flex flex-col items-center justify-center py-6 border-dashed border-2 border-second-500 p-6 rounded-md'>
                    <p className='text-base text-main-500 uppercase mb-12'>
                        Upload Your Practicle Exam Video
                    </p>
                    <button className='p-3 border-second-500 border text-second-500 flex items- rounded-md'>
                        <Icons.Uploadvideo />{' '}
                        <span className='ml-4'> Upload Video</span>
                    </button>
                    <p className='!mt-6 !mb-12'>file name</p>
                </div>
            </div>

            <input
                name='image'
                ref={fileInputRef}
                type='file'
                className='hidden'
            />
        </div>
    );
};
export default ImageUpload;
