import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch,data:user} = useQuery({
        queryKey:['user'],
        queryFn:async()=>{
           const res = await axiosSecure.get('/allUsers',{
            headers:{
                Authorization: `bear ${localStorage.getItem('access-token')}`
            }
           })
           return res.data
        }
    })
    return [user,refetch]
};

export default useAllUsers;