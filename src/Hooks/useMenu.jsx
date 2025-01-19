import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useMenu = () => {
    const axiosSecure = useAxiosSecure()

    const {data:menus=[],isLoading:loading,refetch} = useQuery({
      queryKey:['menu'],
      queryFn: async()=>{
        const res = await axiosSecure('/menu')
        console.log(res)
        return res.data
      }
    })

    // useEffect(()=>{
    //   fetch("http://localhost:5000/menu")
    //   .then(res=>res.json())
    //   .then(data=>{
    //     setMenu(data)
    //     setLoading(false) 
    //   })
    // },[])
   console.log(menus)

    return [refetch,menus,loading]
};

export default useMenu;