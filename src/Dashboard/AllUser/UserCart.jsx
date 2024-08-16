/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAllUsers from "../../Hooks/useAllUsers";
import { FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";


const UserCart = ({item,index}) => {
  const axiosSecure= useAxiosSecure()
  const [,refetch] = useAllUsers()

  // user item delete
  const handleDelete=(id)=>{
    console.log(id)
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
          axiosSecure.delete(`/userDelete/${id}`).then((res) => {
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

  // update admin with handler
  const handleAdmin=(id)=>{
    axiosSecure.patch(`/user/admin/${id}`)
    .then(res=>{
      console.log(res.data)
      if(res.data.modifiedCount > 0){
        toast.success("admin created successfully")
      }
    })
  }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>
          {item.userName}
        </td>
        <td>{item?.userEmail}</td>
        <td> 
         {
          item.role === "admin" ? <p>Admin</p> :
          <button onClick={()=>handleAdmin(item._id)} className="text-2xl">
            <FaUsers></FaUsers>
          </button>
         }
        </td>
        <th>
          <button
            onClick={()=>handleDelete(item._id)}
            className="btn btn-ghost btn-xs text-2xl text-red-500"
          >
            <MdDelete></MdDelete>
          </button>
        </th>
      </tr>
    );
};

export default UserCart;