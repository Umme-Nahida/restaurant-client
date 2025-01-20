/* eslint-disable react/prop-types */

import { MdDelete, MdEdit } from 'react-icons/md';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const ManageCart = ({ item, num, refetch }) => {
  // console.log(item)
  const axiosSecure = useAxiosSecure();
  const [openModal, setOpenModal] = useState(false);
  const [image,setImage] = useState(" ");
  const image_api_key= import.meta.env.VITE_IMAGE_API_KEY;
  const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_api_key}`
  const { register, handleSubmit, reset } = useForm();

  const handleDelete = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/deleteMenu/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });

  }


  // update recipe start
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
    console.log(addItem)
 

  };




  return (
    <tr>
      <th>{num + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={item?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{item?.name}</td>
      <td>${item?.preice ? item?.preice : item.price}</td>
      <th>
        <button
          className="btn btn-ghost btn-xs text-2xl text-red-500"
        >
          <MdEdit onClick={() => setOpenModal(true)}></MdEdit>

          {/* this is modal for update recipe */}
          {
            openModal &&
            <Modal openModal={openModal} setOpenModal={setOpenModal} primary={true}>
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
                        {...register("name", { required: true })}
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
                          {...register("category", { required: true })}
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
                          {...register("price", { required: true })}
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
                        {...register("recipe", { required: true })}
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
            </Modal>
          }
        </button>
      </th>
      <th>
        <button
          onClick={() => handleDelete(item?._id)}
          className="btn btn-ghost btn-xs text-2xl text-red-500"
        >
          <MdDelete></MdDelete>
        </button>
      </th>
    </tr>
  );
};

export default ManageCart;