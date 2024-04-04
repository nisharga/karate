'use client';
import Avater from '@/components/Avater';
import { coursechedule } from '@/static';
import React from 'react';
import { CourseTitle } from '../CourseTItle';
import { CourseDetails } from '../CourseDetails';
import { RoundedBtn } from '@/utils';
import { motion } from 'framer-motion';
import { UseFulLinks } from '../UseFulLinks';

const ExamThumb = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 lg:col-span-6'>
                    <div className='mb-6 mt-2'>
                        <Avater
                            src='https://i.ibb.co/hVCdxKw/white-belt.png'
                            className='!w-full !h-72'
                        />
                    </div>
                    <div className=''>
                        <UseFulLinks />
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-6'>
                    <div>
                        <CourseTitle title={coursechedule.title} />
                    </div>
                    <div>
                        <CourseDetails />
                    </div>
                    <motion.div
                        className='flex items-center justify-end mt-5 '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <RoundedBtn
                            label='Start Exam'
                            path='/exam'
                            className='!px-5 py-3 text-white rounded-full !animate-bounce'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ExamThumb;
