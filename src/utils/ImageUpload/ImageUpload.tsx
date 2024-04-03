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
            <div className='flex flex-col items-center justify-center gap-4 border-dashed-full  p-6 rounded-md'>
                <p className='text-base text-primary-500 uppercase mb-12'>
                    Upload Your Practicle Exam Video
                </p>
                <button className='p-3 border-secondary border text-secondary flex items- rounded-md'>
                    <Icons.Uploadvideo />{' '}
                    <span className='ml-4'> Upload Video</span>
                </button>
                <p className='!mt-6 !mb-12'>file name</p>
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
