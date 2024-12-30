import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home-Components/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import MyCart from "../Dashboard/MyCart/MyCart";
import AllUser from "../Dashboard/AllUser/AllUser";
import AdminRoute from "../components/SectionTitle/AdminRoute/AdminRoute";
import AddItem from "../Dashboard/MyCart/AddItem/AddItem";
import ManageItem from "../Dashboard/ManageItem/ManageItem";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import UserHome from "../Dashboard/UserHome/UserHome";
import Reservation from "../Dashboard/Reservation/Reservation";
import MyBooking from "../Dashboard/MyBooking/MyBooking";
import AddReview from "../Dashboard/Add-Review/AddReview";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/ourMenu',
            element:<PrivateRoute><OurMenu></OurMenu></PrivateRoute>
        },
        {
            path:'/order/:category',
            element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'userHome',
          element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
        },
        {
          path:'reservation',
          element:<PrivateRoute><Reservation></Reservation></PrivateRoute>
        },
        {
          path:'cart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path:'payment',
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
          path:'payment-history',
          element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        },
        {
          path:'my-booking',
          element:<MyBooking></MyBooking>
        },
        {
          path:'add-review',
          element:<AddReview></AddReview>
        },

        // only admin route
        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'allUsers',
          element:<AllUser></AllUser>
        },
        {
          path:'manageItem',
          element:<ManageItem></ManageItem>
        },
        {
          path:'addItem',
          element:<AddItem></AddItem>
        },
      ]
    }
  ]);

export default router;