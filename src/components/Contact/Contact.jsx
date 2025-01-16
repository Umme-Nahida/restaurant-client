import React from 'react';
import Cover from '../../shares/Cover/Cover';
import ContactForm from './ContactForm';
import SectionTitle from '../SectionTitle/SectionTitle';
import { MdAddIcCall } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <Cover img={'https://i.ibb.co.com/tX4Gbcp/Rectangle1.png'} title={'CONTACT US'} text={'WOULD YOU LIKE TO TRY A DISH'}></Cover>
             
             <SectionTitle heading={'OUR LOCATION'} subTitle={'visit us'}/>
            <div className='lg:px-40 pb-10'>
                {/* contact us section */}
                <div className='grid grid-cols-3 gap-x-1 text-3xl text-center'>
                    <div className='bg-[#D1A054] flex items-center justify-center'><MdAddIcCall></MdAddIcCall></div>
                    <div className='bg-[#D1A054] flex items-center justify-center'><CiLocationOn></CiLocationOn> </div>
                    <div className='bg-[#D1A054] flex items-center justify-center'><FaRegClock></FaRegClock> </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-200 p-5'>
                    <div className='text-center'>
                        <h1>PHONE</h1>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                    <div className='text-center'>
                        <h1>ADDRESS</h1>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                    <div className='text-center'>
                        <h1>WORKING HOURS</h1>
                        <p>+38 (012) 34 56 789</p>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
            </div>


            <SectionTitle subTitle={'---Send Us a Message---'} heading={'CONTACT FORM'}></SectionTitle>
            <ContactForm />
        </div>
    );
};

export default Contact;