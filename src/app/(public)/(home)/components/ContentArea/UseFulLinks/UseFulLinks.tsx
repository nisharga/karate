import { Icons } from '@/components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const UseFulLinks = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='flex gap-2 '
        >
            <Link
                href='/'
                className='text-second-600 md:flex items-center gap-2 '
            >
                <Icons.Routine /> <span>Class Routine</span>
            </Link>
            <span className='text-second-600'>|</span>
            <Link href='/' className='text-second-600 flex items-center gap-2 '>
                <Icons.Report className='fill-second-600' />{' '}
                <span>Report a Problem</span>
            </Link>
            <span className='text-second-600'>|</span>
            <Link href='/' className='text-second-600 flex items-center gap-2'>
                <Icons.Review className='fill-second-600 ' />{' '}
                <span>Give a Review</span>
            </Link>
        </motion.div>
    );
};

export default UseFulLinks;
