import { BsFillCartPlusFill, BsFillHouseDoorFill } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import useUserStats from "../../Hooks/useUserStats";
import { FaCalendarAlt, FaCartPlus, FaDollarSign, FaStar, FaUserAlt } from "react-icons/fa";


const UserHome = () => {
    const {user} = useAuth();
    const [userStats] = useUserStats()
    console.log(userStats)

    
    return (
        <div className=" min-h-screen">
            <h1 className="text-2xl pl-20 pt-5">Hi Welcome {user.displayName ? user?.displayName : 'Back'} </h1>
            
            {/* small cards */}
             <div className=" px-20">
             <div className="mt-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center">
                       {/* Total Rooms */}
                       <div className=" relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                        <div
                          className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
                        >
                          <BsFillHouseDoorFill className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-right">
                          <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                          Al Waleed Tower – P2
                          </p>
                          <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                          – United Arab Emirates
                          </h4>
                        </div>
                      </div>

                      {/* Sales Card */}
                      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                        <div
                          className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
                        >
                          <FaDollarSign className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-right">
                          <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                            Home Delivery
                          </p>
                          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                            24 Hours
                          </h4>
                        </div>
                      </div>
                      {/* Users Card */}
                      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                        <div
                          className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
                        >
                          <FaUserAlt className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-right">
                          <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                            Contact
                          </p>
                          <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                          +971507707389
                          </h4>
                        </div>
                      </div>
                     
                     
                    </div>
             </div>

            {/* user profile */}
            <div className="py-10 px-20 flex   ">
                <div className="w-2/5 h-70 bg-[#FFEDD5] p-10 rounded-md">
                   <img src={user?.photoURL} alt="" className="size-40 mx-auto rounded-full" />
                   <h1 className="text-xl text-center font-medium mt-3"> User: {user?.displayName}</h1>
                </div>
                <div className=" bg-[#FEF9C3] h-70 flex-1 p-10 space-y-1">
                  <h1 className="text-3xl mb-5">Your Activities</h1>
                  <p className="flex items-center gap-x-1 text-lg"><FaCartPlus/> Order: {userStats?.totalOrder} </p>
                  <p className="flex items-center gap-x-1 text-lg"><FaCalendarAlt /> Bookings: {userStats?.booking} </p>
                  <p className="flex items-center gap-x-1 text-lg"><FaStar /> Review: {userStats?.review} </p>
                </div>
            </div>
        </div>
    );
};

export default UserHome;