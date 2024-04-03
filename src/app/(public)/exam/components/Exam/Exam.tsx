import { Icons } from '@/components';
import { ExamDetails } from '..';
import { examDetails } from '@/static';

const Exam = () => {
    return (
        <div className='bg-white rounded-md shadow-sm my-8 p-6'>
            <div className='w-full h-screen'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-3xl	text-primary-500 mb-6 uppercase font-semibold'>
                        {examDetails.title}
                    </h4>
                </div>
                <div className=''>
                    <p className=''>
                        {examDetails.content}
                        <span className='cursor-pointer text-primary-500'>
                            {' '}
                            More Info{' '}
                            <Icons.Arrow className='inline'></Icons.Arrow>
                        </span>
                    </p>
                </div>
                <div className='pb-16 py-6'>
                    <ExamDetails />
                </div>
                <div className='flex items-center justify-between'>
                    <p>{examDetails.note}</p>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default Exam;