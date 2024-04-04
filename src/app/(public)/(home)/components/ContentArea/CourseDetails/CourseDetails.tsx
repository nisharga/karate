import { coursechedule } from '@/static';
import React from 'react';

const CourseDetails = () => {
    return (
        <div className='flex flex-col gap-4 mt-4'>
            <p className=' text-primary-500 font-semibold '>
                Instrusctor:{' '}
                <span className='ml-2'>{coursechedule.instructor}</span>
            </p>
            <p className=' '>
                Exam Name:{' '}
                <span className='ml-2'>
                    {coursechedule.exam} <br />
                </span>
            </p>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 md:col-span-4 text-red'>
                    Exam Sehedule:
                </div>
                <div className='col-span-12 md:col-span-8 text-green-500'>
                    <p>Start Exam - 30th apr, 2024/ 8:00pm</p>
                    <p>End Exam - 31th apr, 2024/ 11:59pm</p>
                </div>
            </div>
            <p className='text-red'>
                Final Exam: <span className='ml-2'>Final Exam</span>
            </p>
        </div>
    );
};

export default CourseDetails;
