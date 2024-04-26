import React, { FC } from 'react';

interface Option {
    id: string;
    value: string;
    name: string;
}

interface Question {
    id: number;
    question: string;
    options: Option[];
}

interface IProps {
    questions: Question;
}

const Question: FC<IProps> = ({ questions }) => {
    return (
        <div className='mb-6'>
            <p className='mb-4'>{questions.question}</p>
            {(questions.options ?? []).map((data) => (
                <div className='flex mr-4 mb-4' key={data.id}>
                    <input
                        type='radio'
                        id={data.id}
                        name={data?.name}
                        className='hidden'
                        value={data.value}
                    />
                    <label
                        htmlFor={data.id}
                        className='flex items-center cursor-pointer ml-2'
                    >
                        <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                        {data.value}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Question;
