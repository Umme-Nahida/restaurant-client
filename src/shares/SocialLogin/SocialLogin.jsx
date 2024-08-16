
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const {googleSignIn} = useAuth();
    const navigate = useNavigate()
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(res=>{
            const userInfo= {
                userName:res.user.displayName,
                userEmail:res.user.email,
            }
            axiosPublic.post("/user",userInfo)
            .then((res)=>{
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div className="flex items-center justify-center gap-x-5 text-2xl">
            <button onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></button>
            <button><FaFacebook></FaFacebook></button>
            <button><FaLinkedin></FaLinkedin></button>
        </div>
    );
};

export default SocialLogin;