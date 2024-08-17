import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
  });
const useAxiosSecure = () => {
  const usersData = useAuth();  
  console.log(usersData)

  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('access-token')
    console.log("stopped request by interceptor",token)
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
    }
    return Promise.reject(error);
  })
    return instance
};

export default useAxiosSecure;