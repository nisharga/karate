'use client';
import { Icons } from '@/components';
import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';

interface IProps {
    title: string;
    children: React.ReactNode;
    itemActive?: boolean;
    className?: string;
}

const AccordionItem: FC<IProps> = ({
    title,
    children,
    itemActive,
    className
}) => {
    const [active, setActive] = useState(itemActive || false);

    const handleToggle = () => {
        setActive(!active);
    };
    return (
        <motion.div
            className={`w-full border bg-gray-25 rounded-lg mb-4 `}
            initial={{ opacity: 0, y: 100 }} // start off-screen to the left
            animate={{ opacity: 1, y: 0 }} // end at its natural position
            transition={{ duration: 0.5 }}
        >
            <button
                className={` flex w-full text-left p-5`}
                onClick={() => handleToggle()}
            >
                <div className='flex items-center justify-between w-full'>
                    <h3 className='text-base text-gray-50'>{title}</h3>
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
                className={`bg-gray-900 duration-200 ease-in-out ${className} ${
                    active ? 'block' : 'hidden'
                }`}
            >
                {children}
            </div>
        </motion.div>
    );
};

export default AccordionItem;
