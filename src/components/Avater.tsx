'use client';
import Image from 'next/image';
import { FC } from 'react';

interface IProps {
    className?: string;
    src: string;
}

const Avater: FC<IProps> = ({ src, className }) => {
    return (
        <Image
            height={35}
            width={100}
            src={src}
            alt='avater'
            className={`${className} h-8 md:h-9 w-auto`}
            unoptimized
        />
    );
};

export default Avater;
