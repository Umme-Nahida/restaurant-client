import { useEffect, useState } from "react";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaPaypal,
  FaShoppingCart,
  FaStar,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Dashboard = () => {
  const {user}=useAuth()
  const [isRole,setIsRole] = useState(null)
  const axiosPublic= useAxiosPublic()

  // get user role
  useEffect(()=>{
    axiosPublic.get(`/getUserRole/${user?.email}`)
    .then(res=>{
      setIsRole(res?.data?.role)
    })
  },[user,axiosPublic])
  console.log(isRole)

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-yellow-400 ">
        <ul className="menu space-y-3">
          {isRole === 'admin' ? (
            <>
            <li>
              <NavLink to="/dashboard/adminHome">
                <FaHome></FaHome>
                Admin Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addItem">
                <FaUtensils></FaUtensils>
                add Item
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageItem">
                <FaList></FaList>
                Manage Item
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageBooking">
                <FaBook></FaBook>
                Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allUsers">
                <FaUser></FaUser>
                All users 
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-booking">
                <FaBook></FaBook>
                My Bookings
              </NavLink>
            </li>
          </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaCalendar></FaCalendar>
                  Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <FaPaypal></FaPaypal>
                  Payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaStar></FaStar>
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-booking">
                  <FaBook></FaBook>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* share links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
