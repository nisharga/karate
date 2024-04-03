/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import Avater from '@/components/Avater';

const ProfilePicture = ({ src }: any) => {
    return (
        <div className='border-4 border-gray-150 rounded-full w-52 h-52'>
            <div className='border-4 border-gray-200 rounded-full w-[200px] h-[200px]'>
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        borderRadius: ['0%', '0%', '50%', '50%', '0%']
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatDelay: 1
                    }}
                >
                    <Avater
                        src={src}
                        className='!w-full !h-full border-4	border-gray-75 rounded-full'
                    ></Avater>
                </motion.div>
            </div>
        </div>
    );
};

export default ProfilePicture;
