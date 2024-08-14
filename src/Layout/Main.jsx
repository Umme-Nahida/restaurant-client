import { Outlet, useLocation } from "react-router-dom";
import Navber from "../shares/Navber";
import Footer from "../shares/Footer";

const Main = () => {
    const location = useLocation();
    const isLoginPage = location.pathname.includes('login')

    return (
        <div>
            {isLoginPage || <Navber></Navber>}
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            {isLoginPage || <Footer></Footer>}
        </div>
    );
};

export default Main;