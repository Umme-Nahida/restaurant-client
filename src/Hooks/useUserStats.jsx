import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUserStats = () => {
    const {user}= useAuth()
    const axiosSecure = useAxiosSecure()

    const {data:userStats} = useQuery({
        queryKey:["userStats"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/userStats/${user?.email}`)
            return res.data
        }
    })
    return [userStats]
};

export default useUserStats;