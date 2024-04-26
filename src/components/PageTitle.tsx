import { FC } from 'react';

interface IProps {
    title?: string;
}
const PageTitle: FC<IProps> = ({ title }) => {
    return (
        <div className='text-center py-4 font-semibold uppercase text-3xl bg-main-500 text-second-500'>
            {title}
        </div>
    );
};

export default PageTitle;
