import { ContentArea } from './ContentArea';
import { Sidebar } from './Sidebar';

const Profile = () => {
    return (
        <div className='bg-success'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-6 py-8'>
                    <div className='col-span-12 md:col-span-5 lg:col-span-3 '>
                        <Sidebar />
                    </div>
                    <div className='col-span-12 md:col-span-7 lg:col-span-9 '>
                        <ContentArea />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
