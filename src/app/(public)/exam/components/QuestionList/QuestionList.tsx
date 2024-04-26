import { QUESTION_LIST } from '@/static/questionlist';
import React from 'react';
import { Question } from '.';
import { RoundedBtn } from '@/utils';
import { Icons } from '@/components';
import { Button } from '@/components/ui/button';

const QuestionList = () => {
    return (
        <div className='p-6'>
            {QUESTION_LIST.map((questions) => (
                <Question questions={questions} key={questions.id} />
            ))}
            <div className='flex items-start justify-center gap-4'>
                <Button className='text-main-500 flex gap-4 bg-second-200 !px-5 py-3 rounded-full items-center hover:text-white'>
                    <Icons.Forward className='fill-white border w-5 h-5 p-0.5 rounded-full rotate-180 bg-main-500 ' />
                    Last Page
                </Button>
                <Button asChild className='bg-main-500 !px-5 py-3 rounded-full'>
                    <RoundedBtn
                        label='Submit MCQ'
                        path='/'
                        className='!px-5 py-3 text-white rounded-full'
                    />
                </Button>
            </div>
        </div>
    );
};

export default QuestionList;
