
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useManageAllBooking = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()

    const {data:allBookings,refetch}= useQuery({
        queryKey:['allBookings'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/getBooking')
            return res.data
        }
    })
    return [refetch,allBookings]
};

export default useManageAllBooking;