import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
    return (
        <div className='py-9 px-4 flex items-center justify-center'>
            <div className=''>
                <Button className='mr-4'>Login</Button>
                <Button variant='outline'>Sign Up</Button>
            </div>
        </div>
    );
};

export default page;
