import React from 'react';

const QuestionList = () => {
    return (
        <div>
            <h1 className='mb-6 pt-6 mx-auto text-center'>
                {' '}
                Make the right choice :
            </h1>
            <div className='mx-auto max-w-sm text-center flex flex-wrap justify-center'>
                <div className='flex items-center mr-4 mb-4'>
                    <input
                        id='radio1'
                        type='radio'
                        name='radio'
                        className='hidden'
                    />
                    <label
                        htmlFor='radio1'
                        className='flex items-center cursor-pointer'
                    >
                        <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                        Best choice
                    </label>
                </div>

                <div className='flex items-center mr-4 mb-4'>
                    <input
                        id='radio2'
                        type='radio'
                        name='radio'
                        className='hidden'
                    />
                    <label
                        htmlFor='radio2'
                        className='flex items-center cursor-pointer'
                    >
                        <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                        Second choice
                    </label>
                </div>

                <div className='flex items-center mr-4 mb-4'>
                    <input
                        id='radio3'
                        type='radio'
                        name='radio'
                        className='hidden'
                    />
                    <label
                        htmlFor='radio3'
                        className='flex items-center cursor-pointer'
                    >
                        <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                        Third choice
                    </label>
                </div>

                <div className='flex items-center mr-4 mb-4'>
                    <input
                        id='radio4'
                        type='radio'
                        name='radio'
                        className='hidden'
                    />
                    <label
                        htmlFor='radio4'
                        className='flex items-center cursor-pointer'
                    >
                        <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                        Fourth choice
                    </label>
                </div>

                <div className='flex items-center mr-4 mb-4'>
                    <input
                        id='radio5'
                        type='radio'
                        name='radio'
                        className='hidden'
                    />
                    <label
                        htmlFor='radio5'
                        className='flex items-center cursor-pointer'
                    >
                        <span className='w-4 h-4 inline-block mr-1 rounded-full border border-grey'></span>
                        Choice Five with a longer title
                    </label>
                </div>
            </div>
        </div>
    );
};

export default QuestionList;
