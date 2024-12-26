import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Reservation = () => {
    return (
        <div className='p-20'>
            <SectionTitle heading={'BOOK A TABLE'} subTitle={'Reservation'}></SectionTitle>

            {/* reservation booking form */}
            <div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label>Date:</label>
                        <input type="date" name="" id="" className='px-2 py-2 border ' placeholder='Date ' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label>Time:</label>
                        <input type="time" name="" id="" className='px-2 py-2 border ' placeholder='Date ' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label>Guest:</label>
                        <select name='guest' className='py-2 px-1 border'>
                            <option value="1 person"> 1 person</option>
                            <option value="2 person">2 person</option>
                            <option value="3 person">3 person</option>
                            <option value="4 person">4 person</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label>Name:</label>
                        <input type="text" name="" id="" className='px-2 py-2 border ' placeholder='your name ' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label>Phone:</label>
                        <input type="text" name="" id="" className='px-2 py-2 border ' placeholder='number ' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label>Email:</label>
                        <input type="email" name="" id="" className='px-2 py-2 border ' placeholder='your email  ' />
                    </div>
                </div>

                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2' type='submit'>Book A Table </button>

            </div>

            {/* vist us sectiion */}
            <div>
                <SectionTitle heading={'OUR LOCATION'} subTitle={'visit us'}></SectionTitle>
            </div>
        </div>
    );
};

export default Reservation;