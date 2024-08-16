/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const CartRow = ({ item, index }) => {
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart()
  const handleDelete = (id) => {
    // console.log(id);
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
        axiosSecure.delete(`/deleteCart/${id}`).then((res) => {
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
  };
  // console.log(item);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={item?.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{item?.name}</td>
      <td>${item?.preice ? item?.preice : item.price}</td>
      <th>
        <button
          onClick={() => handleDelete(item._id)}
          className="btn btn-ghost btn-xs text-2xl text-red-500"
        >
          <MdDelete></MdDelete>
        </button>
      </th>
    </tr>
  );
};

export default CartRow;
