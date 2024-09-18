import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useGetPayment = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch,data:paymentData}=useQuery({
        queryKey:['paymentData'],
        queryFn: async () => {
           const res= await axiosSecure.get('/getAllPayment')
        //    console.log(res)
           return res.data
        }
    })
    return [paymentData,refetch]
};

export default useGetPayment;