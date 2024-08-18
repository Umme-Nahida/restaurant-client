import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

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
              {...register("recipeName",{required:true})}
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
                className="select select-bordered w-full"
                {...register("category",{ required: true })}
              >
                <option value="female">Category</option>
                <option value="female">salad</option>
                <option value="male">pizza</option>
                <option value="other">soup</option>
                <option value="other">dessert</option>
                <option value="other">popular</option>
                <option value="other">offered</option>
                <option value="other">drinks</option>
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
              {...register("recipeDetails",{ required: true })}
              placeholder="Recipe Details"
              rows={3}
              className="p-5"
            ></textarea>
          </div>
          {/* row 4 */}
          <div className="form-control">
            <input type="file" {...register("img",{ required: true })} className="file-input w-full max-w-xs" />
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
