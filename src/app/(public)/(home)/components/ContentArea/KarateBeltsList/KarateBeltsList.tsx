import { Icons } from '@/components';
import { ALLBELTS } from '@/static/belts';
import React from 'react';
import { motion } from 'framer-motion';

const KarateBeltsList = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }} // start off-screen to the left
            animate={{ opacity: 1, y: 0 }} // end at its natural position
            transition={{ duration: 0.5 }}
        >
            <div className='grid grid-cols-12  gap-2 lg:gap-4'>
                {ALLBELTS.map((data) => (
                    <div
                        className={`col-span-1 bg-gray-25 rounded-full h-12 w-12 flex items-center justify-center ${
                            data.active === true && 'border-secondary border-2'
                        }`}
                        key={data.id}
                    >
                        {data.active === true ? (
                            <Icons.BeltSelected />
                        ) : (
                            <Icons.Belt />
                        )}
                    </div>
                ))}
            </div>
            <div className='w-full bg-gray-25 h-1 rounded-full -z-10 -mt-6'></div>
        </motion.div>
    );
};

export default KarateBeltsList;
