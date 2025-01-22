import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddItem = () => {
  const axiosSecure = useAxiosSecure();
  const [image,setImage] = useState(" ")
  const image_api_key= import.meta.env.VITE_IMAGE_API_KEY;
  const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_api_key}`;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(image)
    console.log(data);
    const addItem = {
      name:data.name,
      recipe:data.recipe,
      image:image,
      category:data.category,
      price:data.price
    }
    // console.log(addItem)
    const res = await axiosSecure.post('/menuAdd',addItem)
    console.log(res.data)
    if(res.data.insertedId){
      toast.success("item added successfully")
      reset()
    }

  };


  // handle image
    // set a img 
    const handleimage = (event) => {
      console.log(event.target)
      const selectedImage = event.target.files[0];
      const formData = new FormData();
      formData.append('image', selectedImage);
      fetch(image_hosting_api, {
          method: "POST",
          body: formData
      }).then(res => res.json()).then(data => {
          if (data?.data?.display_url) {
              console.log(data?.data?.display_url)
              setImage(data?.data?.display_url)
          }
      })
  }
  
  return (
    <div>
      <SectionTitle
        subTitle={"---What's new?---"}
        heading={"Add An Item "}
      ></SectionTitle>
      <div className="p-8 lg:p-16 bg-slate-200 m-20 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* row 1 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              {...register("name",{required:true})}
              placeholder="Recipe name"
              className="input input-bordered"
              required
            />
          </div>
          {/* row 2 */}
          <div className="flex items-center justify-between gap-x-5">
            <div className="form-control w-full space-y-2 ">
              <label className="label">Category*</label>
              <select
              defaultValue="default"
                className="select select-bordered w-full"
                {...register("category",{ required: true })}
              >
                <option value="default">Category</option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="popular">popular</option>
                <option value="offered">offered</option>
                <option value="drinks">drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="text"
                {...register("price",{ required: true })}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row 3 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe",{ required: true })}
              placeholder="Recipe Details"
              rows={3}
              className="p-5"
            ></textarea>
          </div>
          {/* row 4 */}
          <div className="form-control">
            <input type="file" onChange={handleimage} className="file-input w-full max-w-xs" />
          </div>
          <button className="btn bg-gradient-to-br from-[#835D23] to-[#B58130] text-white">
            Add Item
            <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
