'use client';
import { Icons } from '@/components';
import Avater from '@/components/Avater';
import { courseDetails } from '@/static';
import React from 'react';
import { motion } from 'framer-motion';

const Course = () => {
    return (
        <motion.div
            className='flex gap-4'
            initial={{ opacity: 0, x: 100 }} // start off-screen to the left
            animate={{ opacity: 1, x: 0 }} // end at its natural position
            transition={{ duration: 0.5 }}
        >
            <div className=''>
                <Avater
                    src={courseDetails?.image}
                    className='!min-w-[400px] !min-h-[260px]'
                />
            </div>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-base	text-primary-500 mb-6 uppercase font-semibold'>
                        {courseDetails?.title}
                    </h4>
                    <Icons.Share className='cursor-pointer' />
                </div>
                <div className=''>
                    <p className=''>
                        {courseDetails?.content}{' '}
                        <span className='cursor-pointer text-primary-500'>
                            More Info{' '}
                            <Icons.Arrow className='inline'></Icons.Arrow>
                        </span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Course;
