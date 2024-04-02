'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Icons } from './Icons';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className={`w-fit hover:scale-110 active:scale-100 duration-200`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'light' ? (
                <Icons.Moon className='stroke-gray-800 stroke-[1.25px]' />
            ) : (
                <Icons.SunMedium className='stroke-[1.25px]' />
            )}
        </button>
    );
};
