import React from 'react';
import { AccordionItem, QuestionList } from '..';
import { ImageUpload } from '@/utils';

const ExamDetails = () => {
    return (
        <div>
            <AccordionItem title='1.MCQ Question (Mark50)'>
                <QuestionList />
            </AccordionItem>
            <AccordionItem
                title='2.Practicle Exam(Mark 50)'
                className='!bg-transparent'
            >
                <div className='py-12'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                            <div className='flex items-center justify-center w-full'>
                                <ImageUpload />
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionItem>
        </div>
    );
};

export default ExamDetails;
