import React, { FC } from 'react';

interface IProps {
    title: string;
}

const CourseTitle: FC<IProps> = ({ title }) => {
    return (
        <>
            <h3 className='text-2xl text-main-500 mb-2 uppercase font-semibold '>
                {title}
            </h3>

            <div className='w-full bg-second-900 h-1 rounded-full -z-10 mb-3'>
                <div className='bg-second-500 h-full w-[85%] !z-50 text-green-800 rounded-full'></div>
            </div>

            <p className='text-second-400'>
                You completed 95% of the Course! Good Luck For Exam.
            </p>
        </>
    );
};

export default CourseTitle;
