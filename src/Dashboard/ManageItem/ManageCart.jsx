/* eslint-disable react/prop-types */

import { MdDelete, MdEdit } from 'react-icons/md';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'; 
import { useState } from 'react';
import { LineChart } from 'recharts';
import { Link } from 'react-router-dom';

const ManageCart = ({ item, num, refetch }) => {
  // console.log(item)
  const axiosSecure = useAxiosSecure();
  const [openModal, setOpenModal] = useState(false);


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
      <Link to={`/dashboard/updateProduct/${item?._id}`}>
        <button
         
          className="btn btn-ghost btn-xs text-2xl text-red-500"
        >
        
            <MdEdit></MdEdit>
          

          {/* this is modal for update recipe */}
          {/* {
            openModal &&
            <Modal openModal={openModal} setOpenModal={setOpenModal} primary={true}>
              <UpdateProduct/>
            </Modal>
          } */}
        </button>

        </Link>
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