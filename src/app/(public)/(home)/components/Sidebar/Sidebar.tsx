'use client';

import React from 'react';
import { ProfilePicture } from '.';
import { SIDEBAR } from '@/static';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='bg-white rounded-md shadow-sm'>
            <div className='flex items-center justify-center mt-2 p-6'>
                <ProfilePicture src='https://i.ibb.co/BcJHh9p/man.png' />
            </div>
            <div className='py-6 text-center px-6'>
                <h3 className='text-xl text-main-500'>Assessment Username</h3>
                <h5 className='text-second-600 my-4'>Batch no: KC22041</h5>
                <h5 className='text-second-600'>Roll no: OKC1122334</h5>
            </div>
            <div className=''>
                {SIDEBAR.map(({ id, label, icon }) => (
                    <Link
                        href={'/'}
                        key={id}
                        className={`flex gap-4 ${
                            id == '1'
                                ? 'bg-main-500 text-success'
                                : 'bg-second-700 text-second-600 hover:bg-main-500 hover:text-success'
                        } !py-3 px-4 mb-1 ${
                            id == '5' && 'mb-6'
                        } items-center w-full`}
                    >
                        <span>{icon}</span>
                        <span>{label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
