import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth() 
    const {data:isAdmin,isPending: isAdminLoading} = useQuery({
        queryKey:['isAdmin'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/user/isAdmin/${user?.email}`)
            return res.data
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;