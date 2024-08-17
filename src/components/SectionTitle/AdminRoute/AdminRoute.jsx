/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    console.log(isAdmin)
    const {user,loading} = useAuth();
    const usersData = useAuth();
    console.log(usersData)
    const location = useLocation();
    console.log(location)
   if(loading || isAdminLoading){
     return <span className="loading loading-spinner loading-lg text-center"></span>
   }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace ></Navigate>
};

export default AdminRoute;