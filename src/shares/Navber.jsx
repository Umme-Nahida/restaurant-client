import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const Navber = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogout=()=>{
    logOut() 
    
  }
  const menu = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
      <li>
        <Link to="/ourMenu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Our Shop</Link>
      </li>
      {
        user ? 
        <button onClick={handleLogout}><Link >Sign Out</Link></button>
      : 
      <li>
      <Link to="/login">Login</Link>
    </li> 
      }
    </>
  );
  return (
    <div className="bg-[#FACC15] bg-opacity-70 backdrop-blur-xl fixed z-[99999] w-full text-white ">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end text-end dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
