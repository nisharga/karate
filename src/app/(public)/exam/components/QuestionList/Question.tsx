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

            {/*  <input type='radio' id='html' name='fav_language' value='HTML' />
            <label htmlFor='html'>HTML</label>

            
            <input type='radio' id='css' name='fav_language' value='CSS' />
            <label htmlFor='css'>CSS</label> */}
            {/* <input
                type='radio'
                id='html'
                name='fav_language'
                className='hidden'
                value='HTML'
            />
            <label
                htmlFor='html'
                className='flex items-center cursor-pointer ml-2'
            >
                <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                Html
            </label>
            <input
                type='radio'
                id='css'
                name='fav_language'
                className='hidden'
                value='CSS'
            />
            <label
                htmlFor='css'
                className='flex items-center cursor-pointer ml-2'
            >
                <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                CSS
            </label> */}
        </div>
    );
};

export default Question;
