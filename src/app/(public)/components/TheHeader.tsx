'use client';
import { Icons, Logo } from '@/components';
import Avater from '@/components/Avater';
import { Menu } from '@/static';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TheHeader = () => {
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
    useEffect(() => {
        const bodyEl = document.querySelector('body');

        if (isShowMobileMenu) {
            bodyEl && bodyEl.classList.add('modal-open');
        } else {
            bodyEl && bodyEl.classList.remove('modal-open');
        }
    }, [isShowMobileMenu]);

    return (
        <header className='sticky top-0 z-50 pt-3 bg-primary-500 shadow-sm'>
            <div className='container'>
                {/* larger device menu */}

                <div className='items-center justify-between hidden px-4 py-2 backdrop-blur-sm lg:flex'>
                    <div className=''>
                        <Link href={'/'}>
                            <Logo className='h-12 w-auto' />
                        </Link>
                    </div>
                    <AnimatePresence>
                        <motion.div
                            className='flex items-center justify-end gap-6'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {Menu.map(({ id, route, label }) => (
                                <Link
                                    className={`whitespace-nowrap transition-colors duration-300 text-success px-3 py-1.5 md:py-2.5 hover:bg-primary-300 hover:rounded-md`}
                                    key={id}
                                    href={route}
                                >
                                    {label}
                                </Link>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    <div className='flex gap-5'>
                        <div className='bg-primary-300 rounded-full p-3 px-4 cursor-pointer'>
                            <Icons.Search className='fill-white  inline-block' />
                        </div>
                        <div>
                            <Avater
                                src='https://i.ibb.co/BcJHh9p/man.png'
                                className='min-w-12 !h-12'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {!isShowMobileMenu ? (
                <div className='container sticky top-0 z-50 flex items-center justify-between h-16 bg-primary-500 rounded-full lg:hidden backdrop-blur-sm'>
                    <div></div>
                    <Logo className='!h-10 !w-auto' />

                    <button
                        onClick={() => setIsShowMobileMenu(true)}
                        className='no-underline rounded-md'
                    >
                        <Icons.Hamburger className='fill-white' />
                    </button>
                </div>
            ) : (
                <div className='sticky top-0 left-0 block w-full lg:hidden '>
                    <div className=''>
                        <div className='container flex items-center justify-between h-16 bg-primary-500 lg:hidden backdrop-blur-sm border-b-[2px]'>
                            <div></div>
                            <Logo className='!h-10 !w-auto' />
                            <button
                                onClick={() => setIsShowMobileMenu(false)}
                                className='no-underline rounded-md'
                            >
                                <Icons.X className='fill-white' />
                            </button>
                        </div>
                        <AnimatePresence>
                            <motion.div
                                className='flex flex-col'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {Menu.map(({ id, route, label }) => (
                                    <Link
                                        className='px-12 text-gray-200 transition-all bg-primary-500 hover:bg-primary-300 py-7 whitespace-nowrap'
                                        key={id}
                                        href={route}
                                        onClick={() =>
                                            setTimeout(() => {
                                                setIsShowMobileMenu(false);
                                            }, 200)
                                        }
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </header>
    );
};

export default TheHeader;
