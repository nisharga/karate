import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {
    label: string;
    path: string;
    className?: string;
}

const RoundedBtn: FC<IProps> = ({ label, path, className }) => {
    return (
        <Link
            href={path}
            className={`bg-primary-500 text-white !px-5 !py-3 rounded-3xl ${className}`}
        >
            {label}
        </Link>
    );
};

export default RoundedBtn;
