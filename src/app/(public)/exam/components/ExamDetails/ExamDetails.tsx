import React from 'react';
import { AccordionItem } from '..';

const ExamDetails = () => {
    return (
        <div>
            <AccordionItem title='1.MCQ Question (Mark50)'>
                <h6 className='p-5'>
                    Monday - Friday, 9:00 am - 6:00 pm ET <br /> +1 (248)
                    541-2800 <br /> customerservice@usaunderwriters.com <br />
                </h6>
            </AccordionItem>
            <AccordionItem title='Customer Service & Support'>
                <div className='p-5'>
                    <h6 className='mb-1'>
                        Monday - Friday, 9:00 am - 6:00 pm ET
                    </h6>
                    <h6 className=''>+1 (248) 541-2800</h6>
                </div>
            </AccordionItem>
        </div>
    );
};

export default ExamDetails;
