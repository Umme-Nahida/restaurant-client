import { Outlet } from "react-router-dom";
import Navber from "../shares/Navber";
import Footer from "../shares/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;