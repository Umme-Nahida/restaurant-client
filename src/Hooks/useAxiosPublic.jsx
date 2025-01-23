import axios from "axios";

const axiosPublic= axios.create({
    baseURL: 'https://restaurant-server-fnj6.vercel.app',
  });
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;