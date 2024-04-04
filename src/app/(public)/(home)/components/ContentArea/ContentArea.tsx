'use client';
import Link from 'next/link';
import { Course } from './Course';
import Avater from '@/components/Avater';
import { ExamThumb } from './ExamThumb';

const ContentArea = () => {
    return (
        <div className='bg-white rounded-md shadow-sm p-6'>
            <div className=''>
                <h4 className='text-2xl	text-primary-500 mb-6 uppercase'>
                    my karate class
                </h4>
                <div className='flex gap-8'>
                    <Link href='/' className='pb-3 border-b-2 border-secondary'>
                        Course Details
                    </Link>
                    <Link href='/'>Class Video</Link>
                </div>
                <div className='py-6'>
                    <Course />
                </div>
                <div className=''>
                    <Avater
                        src='https://i.ibb.co/d49ktxK/pointer.png'
                        className='!w-full'
                    />
                </div>
                <div className='p-6'>
                    <ExamThumb />
                </div>
            </div>
        </div>
    );
};

export default ContentArea;
