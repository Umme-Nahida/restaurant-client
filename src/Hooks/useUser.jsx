import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data:isUser,isPending:isUserPending} = useQuery({
        queryKey:['isUser'],
        queryFn:async()=>{
          const res = await axiosSecure(`/logoutUser/${user?.email}`)
          return res.data
        }
    })
    // console.log(isUser)
    return [isUser,isUserPending];
};

export default useUser;