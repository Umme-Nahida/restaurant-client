import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home-Components/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";


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
            element:<OurMenu></OurMenu>
        },
      ]
    },
  ]);

export default router;