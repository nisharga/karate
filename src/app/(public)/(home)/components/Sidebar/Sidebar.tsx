'use client';

import React from 'react';
import ProfilePicture from './ProfilePicture';

const Sidebar = () => {
    return (
        <div className='bg-white rounded-md p-6 shadow-sm'>
            <div className='flex items-center justify-center mt-2'>
                <ProfilePicture src='https://i.ibb.co/BcJHh9p/man.png' />
            </div>
        </div>
    );
};

export default Sidebar;
