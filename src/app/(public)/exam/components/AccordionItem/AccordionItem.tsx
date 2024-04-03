'use client';
import { Icons } from '@/components';
import React, { useState, FC } from 'react';

interface IProps {
    title: string;
    children: React.ReactNode;
    itemActive?: boolean;
}

const AccordionItem: FC<IProps> = ({ title, children, itemActive }) => {
    const [active, setActive] = useState(itemActive || false);

    const handleToggle = () => {
        setActive(!active);
    };
    return (
        <div className='w-full border   bg-gray-25 rounded-lg mb-4'>
            <button
                className={` flex w-full text-left p-5`}
                onClick={() => handleToggle()}
            >
                <div className='flex items-center justify-between w-full'>
                    <h3 className='text-base'>{title}</h3>
                    {active ? (
                        <Icons.Forward className='fill-gray-500 border p-1.5 w-8 h-8 rounded-full rotate-90' />
                    ) : (
                        <div>
                            <Icons.Forward className='fill-gray-500 border p-1.5 w-8 h-8 rounded-full' />
                        </div>
                    )}
                </div>
            </button>

            <div
                className={`bg-gray-900 duration-200 ease-in-out ${
                    active ? 'block' : 'hidden'
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;
