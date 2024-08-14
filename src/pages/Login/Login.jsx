import { useEffect, useRef, useState } from "react";
import img from "../../assets/others/authentication1.png";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';



const Login = () => {
  const captchaRef = useRef(null)
  const [disabled,setDisabled] = useState(true)

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
  };

  const handleCaptcha=()=>{
   const user_captcha_value = captchaRef.current.value;
   console.log(user_captcha_value)
   if (validateCaptcha(user_captcha_value)==true) {
     setDisabled(false)
    alert('Captcha Matched');
    captchaRef.current.value = "";
   } else {
    alert('Captcha Does Not Match');
    setDisabled(true)
    captchaRef.current.value = "";
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
              id="password"
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
            <div className="space-y-2 text-sm">
              <label
                htmlFor="password"
                className="block text-zinc-700 dark:text-zinc-300 font-medium"
              >
                <LoadCanvasTemplate />
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="password"
                ref={captchaRef}
                placeholder="Enter the catcha above"
                name="captcha"
                type="text"
                required
              />
              <button onClick={handleCaptcha} className="btn btn-outline btn-xs btn-block">Valided captcha</button>
             
            </div>
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
