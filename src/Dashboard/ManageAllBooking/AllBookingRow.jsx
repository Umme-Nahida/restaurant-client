/* eslint-disable react/prop-types */

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const AllBookingRow = ({item,index,refetch}) => {
  const axiosSecure= useAxiosSecure()

  const handleUpdate = (status)=>{
    console.log(status)
    axiosSecure.patch(`/updateStatus/${item._id}`,{status})
    .then(res=>{
        // console.log(res.data)
        if(res.data.modifiedCount > 0){
            toast.success('status has been update successfully')
            refetch()
        }
    })
  }

  
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{item?.email ? item?.email : 'no email'}</td>
        <td>{item?.phone}</td>
        <td>{item?.date}</td>
        <td>{item?.time}</td>
        <td> 
          { item.status=='pending' ? <p className="text-yellow-700">{item.status} </p> : item.status==='done' ? <p className="text-green-500">{item?.status} </p> : <p className="text-red-600">{item.status} </p>}
        </td>
        <th>
            <select onChange={(e)=>handleUpdate(e.target.value)} name="status">
                <option value="pending">pending </option>
                <option value="done">done </option>
                <option value="reject">reject </option>
            </select>
          
        </th>
      </tr>
    );
};

export default AllBookingRow;