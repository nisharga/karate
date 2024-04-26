'use client';
import React, { useState } from 'react';
import { QuestionList } from '..';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import { Icons } from '@/components';
import { ImageUpload } from '@/utils';

const ExamDetails = () => {
    const [active, setActive] = useState(false);
    return (
        <div>
            <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1' className='mb-4'>
                    <AccordionTrigger className='bg-second-700 px-6 rounded-md hover:no-underline flex justify-between items-center text-second-300'>
                        <div>1.MCQ Question (Mark 50)</div>
                        <div className={``} onClick={() => setActive(!active)}>
                            {active == true ? (
                                <Icons.Forward className='fill-second-300 border-2 p-1 w-6 h-6 rounded-full border-second-300 rotate-90' />
                            ) : (
                                <div>
                                    <Icons.Forward className='fill-second-300 border-2 border-second-300 p-1 w-6 h-6 rounded-full ' />
                                </div>
                            )}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <QuestionList />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                    <AccordionTrigger className='bg-second-700 px-6 rounded-md hover:no-underline flex justify-between items-center text-second-300'>
                        <div>2.Practical Exam (Mark 50)</div>
                        <div className={``} onClick={() => setActive(!active)}>
                            {active ? (
                                <Icons.Forward className='fill-second-300 border-2 p-1 w-6 h-6 rounded-full rotate-90' />
                            ) : (
                                <div>
                                    <Icons.Forward className='fill-second-300 border-2 border-second-300 p-1 w-6 h-6 rounded-full' />
                                </div>
                            )}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ImageUpload />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ExamDetails;
