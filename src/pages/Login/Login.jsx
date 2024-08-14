import { useContext, useEffect, useState } from "react";
import img from "../../assets/others/authentication1.png";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { replace, useLocation, useNavigate } from "react-router-dom";



const Login = () => {
  const [disabled,setDisabled] = useState(true)
  const {loginUser}=useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location)
  
  const from = location?.state?.from.pathname || '/'

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleFormSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      toast.success('user login successfully')
      e.target.reset();
      navigate(from,{replace:true})
    })

  };

  const handleCaptcha=(e)=>{
   const user_captcha_value = e.target.value;
   console.log(user_captcha_value)
   if (validateCaptcha(user_captcha_value)==true) {
     setDisabled(false)
   } else {
    toast.error('Captcha Does Not Match');
    setDisabled(true)
    
}
}

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-x-4 min-h-screen mx-auto">
        <img src={img} alt="" className="w-[700px]"/>
        <div className=" w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
          <h1 className="text-3xl font-semibold tracking-tight">Sign In</h1>

          <form action="#" className="space-y-6" onSubmit={handleFormSignIn}>
            <div className="space-y-2 text-sm">
              <label
                htmlFor="username"
                className="block text-zinc-700 dark:text-zinc-300 font-medium"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="username"
                placeholder="Enter Email"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="space-y-2 text-sm">
            <label
              htmlFor="password"
              className="block text-zinc-700 dark:text-zinc-300 font-medium"
            >
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
             
              placeholder="Enter password"
              name="password"
              type="password"
              required
            />
            <div className="flex justify-end text-xs">
              <a
                href="#"
                className="text-zinc-700 hover:underline dark:text-zinc-300"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          {/* valided email */}
            <div className="space-y-2 text-sm">
              <label
                htmlFor="password"
                className="block text-zinc-700 dark:text-zinc-300 font-medium"
              >
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleCaptcha} 
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                placeholder="Enter the catcha above"
                name="captcha"
                type="text"
                required
              />
             
            </div>
            {/* submit button */}
            <div className="form-control mt-6">
            <button disabled={disabled} type="submit" className=" btn rounded-md btn-block bg-yellow-400 hover:bg-yellow-500">Login</button>
            </div>
          </form>
          <p className="text-left text-sm text-zinc-700 dark:text-zinc-300">
            Don&apos;t have an account?
            <a href="/signup" className="font-semibold underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
