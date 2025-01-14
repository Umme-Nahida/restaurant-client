/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const BookingRow = ({ item, index }) => {
    console.log('booking',item)
  const axiosSecure = useAxiosSecure();
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
      <td>
      {index + 1}. {item?.name}
      </td>
      <td>{item?.email}</td>

      <td>{item?.phone}</td>
      <td>{item?.date}</td>
      <td>{item?.guest}</td>
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

export default BookingRow;
