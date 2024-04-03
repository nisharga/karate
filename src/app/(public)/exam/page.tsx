import React from 'react';
import { PageTitle } from '@/components';
import { Exam } from './components';

const page = () => {
    return (
        <div>
            <PageTitle title='Exam Sheet' />
            <div className='container'>
                <Exam />
            </div>
        </div>
    );
};

export default page;
