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

const Dashboard = () => {
  const isadmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-yellow-400 ">
        <ul className="menu space-y-3">
          {isadmin ? (
            <>
            <li>
              <NavLink to="/dashboard/home">
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
              <NavLink to="/dashboard/payment">
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
              <NavLink to="/dashboard/bookings">
                <FaBook></FaBook>
                My Bookings
              </NavLink>
            </li>
          </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
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
                <NavLink to="/dashboard/bookings">
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
