import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { CiLocationOn } from "react-icons/ci";
import { MdAddIcCall } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useForm } from "react-hook-form"


const Reservation = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='p-20'>
            <SectionTitle heading={'BOOK A TABLE'} subTitle={'Reservation'}></SectionTitle>

            {/* reservation booking form */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='flex flex-col gap-y-2'>
                            <label>Date:</label>
                            <input type="date" name="date" {...register("date", { required: true })} id="" className='px-2 py-2 border ' placeholder='Date ' />
                            {errors.date && <span className='text-red-500'>This field is required</span>}

                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label>Time:</label>
                            <input type="time" name="time" {...register("time", { required: true })} id="" className='px-2 py-2 border ' placeholder='Date ' />
                            {errors.time && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label>Guest:</label>
                            <select name="guest" {...register("guest", { required: true })} className='py-2 px-1 border'>
                                <option value="1 person">1 person</option>
                                <option value="2 person">2 person</option>
                                <option value="3 person">3 person</option>
                                <option value="4 person">4 person</option>
                            </select>
                            {errors.guest && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label>Name:</label>
                            <input type="text" name="name" {...register("name", { required: true })} id="" className='px-2 py-2 border ' placeholder='your name ' />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label>Phone:</label>
                            <input type="text" name="phone" {...register("phone", { required: true })} id="" className='px-2 py-2 border ' placeholder='number ' />
                            {errors.phone && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label>Email:</label>
                            <input type="email" name="email" {...register("email", { required: true })} id="" className='px-2 py-2 border ' placeholder='your email  ' />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>


                    {/* button  */}
                    <div className="text-center mt-5 text-white">
                        <button className='mx-auto bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2' type='submit'>Book A Table </button>
                    </div>
                </form>


            </div>

            {/* vist us sectiion */}
            <div>
                <SectionTitle heading={'OUR LOCATION'} subTitle={'visit us'}></SectionTitle>

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
        </div>
    );
};

export default Reservation;