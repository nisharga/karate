'use client';

import React from 'react';
import { ProfilePicture } from '.';
import { SIDEBAR } from '@/static';
import { motion } from 'framer-motion';

const Sidebar = () => {
    return (
        <div className='bg-white rounded-md shadow-sm'>
            <div className='flex items-center justify-center mt-2 p-6'>
                <ProfilePicture src='https://i.ibb.co/BcJHh9p/man.png' />
            </div>
            <div className='py-6 text-center px-6'>
                <h3 className='text-xl text-primary-500'>
                    Assessment Username
                </h3>
                <h5 className='text-gray-50 my-4'>Batch no: KC22041</h5>
                <h5 className='text-gray-50'>Roll no: OKC1122334</h5>
            </div>
            <div className=''>
                {SIDEBAR.map(({ id, route, label, icon }) => (
                    <motion.a
                        key={id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={route}
                        className={`flex gap-4 ${
                            id == '1'
                                ? 'bg-primary-500 text-success'
                                : 'bg-gray-250 text-gray-50'
                        } py-3 px-4 mb-1 ${id == '5' && 'mb-6'} items-center`}
                    >
                        <span>{icon}</span>
                        <span>{label}</span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
