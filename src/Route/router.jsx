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
            element:<Order></Order>
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
          path:'cart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path:'allUsers',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
        }
      ]
    }
  ]);

export default router;