import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { IWelcomeMessage } from '../types';

const info: IWelcomeMessage = {
    message: 'Say! Hello Nexlent'
};

const Welcome = () => {
    return (
        <div className='h-screen flex items-center flex-col justify-center'>
            <div className='flex mb-2 gap-4'>
                Change theme: <ThemeSwitcher />
            </div>
            <h1 className='text-primary-900'>{info.message}</h1>
            <p>A Smart Software Solutions.</p>
        </div>
    );
};

export default Welcome;
