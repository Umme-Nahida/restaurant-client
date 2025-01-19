import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";


const instance = axios.create({
    baseURL: 'http://localhost:5000',
  });
const useAxiosSecure = () => {
  const userData=useContext(AuthContext)

  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('access-token')
    // console.log("stopped request by interceptor",token)
    config.headers.authorization = `bearer ${token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function(responce){
     return responce;
  },async(error)=>{
    if(error.request.status === 401 || error.request.status === 403){  
      // logout the user
      await userData.logOut()
      console.log(error)
    }
    return Promise.reject(error);
  })
    return instance
};

export default useAxiosSecure;