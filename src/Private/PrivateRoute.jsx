/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";
// import useUser from "../Hooks/useUser";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // const [isUser,isUserPending] = useUser()
    const location = useLocation();
    
   if(loading){
     return <span className="loading loading-spinner loading-lg text-center"></span>
   }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;