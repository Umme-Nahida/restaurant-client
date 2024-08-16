/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";


const UserCart = ({item,index}) => {
    return (
        <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={item?.userName} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{item?.name}</td>
        <td>$price</td>
        <th>
          <button
           
            className="btn btn-ghost btn-xs text-2xl text-red-500"
          >
            <MdDelete></MdDelete>
          </button>
        </th>
      </tr>
    );
};

export default UserCart;