import { useContext } from "react";
import img from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
        console.log(result.user)
        updateUserProfile(data.name,data.photo)
        .then(()=>{
          toast.success('user created successfully')
          reset();
          navigate('/')
        })

    })

  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-x-4 min-h-screen mx-auto">
        <img src={img} alt="" className="w-[700px]" />
        <div className=" w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
          <h1 className="text-3xl font-semibold tracking-tight">Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2 text-sm">
              <label
                htmlFor="username"
                className="block text-zinc-700 dark:text-zinc-300 font-medium"
              >
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="username"
                placeholder="Enter Name"
                {...register("name", { required: true })}
                name="name"
                type="text"
              />
              {errors.name && (
                <span className="text-red-500">name field is required</span>
              )}
            </div>
            <div className="space-y-2 text-sm">
              <label
                htmlFor="username"
                className="block text-zinc-700 dark:text-zinc-300 font-medium"
              >
                Photo url 
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="username"
                placeholder="Enter photo url"
                {...register("photo", { required: true })}
                name="photo"
                type="url"
              />
              {errors.name && (
                <span className="text-red-500">name field is required</span>
              )}
            </div>
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
                {...register("email", { required: true })}
                name="email"
                type="email"
              />
              {errors.email && (
                <span className="text-red-500">name field is required</span>
              )}
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
                {...register("password", {required:true})}
                name="password"
                type="password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500"> paassword is required</p>
              )}
              <div className="flex justify-end text-xs">
                <a
                  href="#"
                  className="text-zinc-700 hover:underline dark:text-zinc-300"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className=" btn rounded-md btn-block bg-yellow-400 hover:bg-yellow-500"
              >
                Sign up 
              </button>
            </div>
          </form>
          <p className="text-left text-sm text-zinc-700 dark:text-zinc-300">
            have an account? please
            <a href="/login" className="font-semibold underline">
              login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
