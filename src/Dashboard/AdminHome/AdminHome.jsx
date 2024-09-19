import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { GiCook } from "react-icons/gi";


const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const {data:stats}= useQuery({
    queryKey:['admin-stats'],
    queryFn:async()=>{
        const res = await axiosSecure.get('/adminStats')
        return res.data
    }
  })

  console.log(stats)
  return (
    <div className="p-10">
      <h1>Hi Welcome {user.displayName ? user?.displayName : "Back"} </h1>
      <div className="grid grid-cols-4 gap-x-5 items-center justify-around">
        {/* box */}
        <div className="stats shadow">
          <div className="stat flex items-center justify-center gap-x-5 min-w-48 bg-red-300 text-white">
            <div className="text-5xl">
              <IoIosAlbums></IoIosAlbums>
            </div>
            <div>
            <div className="stat-value">${stats?.revenueInt} </div>
            <div className="stat-title text-2xl text-white">Revenue</div>
            </div>
          </div>
        </div>
        {/* box 2*/}
        <div className="stats shadow">
          <div className="stat flex items-center justify-center gap-x-5 min-w-48 bg-red-300 text-white">
            <div className="text-5xl">
              <FaUsers></FaUsers>
            </div>
            <div>
            <div className="stat-value">${stats?.users} </div>
            <div className="stat-title text-2xl text-white">Customers</div>
            </div>
          </div>
        </div>
        {/* box 3*/}
        <div className="stats shadow">
          <div className="stat flex items-center justify-center gap-x-5 min-w-48 bg-red-300 text-white">
            <div className="text-5xl">
              <GiCook></GiCook>
            </div>
            <div>
            <div className="stat-value">${stats?.menuIds} </div>
            <div className="stat-title text-2xl text-white">Products</div>
            </div>
          </div>
        </div>
        {/* box 4 */}
        <div className="stats shadow">
          <div className="stat flex items-center justify-center gap-x-5 min-w-48 bg-red-300 text-white">
            <div className="text-5xl">
              <FaShoppingCart></FaShoppingCart>
            </div>
            <div>
            <div className="stat-value">${stats?.order} </div>
            <div className="stat-title text-2xl text-white">Orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
