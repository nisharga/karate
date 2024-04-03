import { FC } from 'react';

interface IProps {
    title?: string;
}
const PageTitle: FC<IProps> = ({ title }) => {
    return (
        <div className='bg-primary-500 text-center py-4 font-semibold uppercase text-3xl text-secondary'>
            {title}
        </div>
    );
};

export default PageTitle;
