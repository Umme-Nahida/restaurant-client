/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";


const UserCart = ({item,index}) => {
    return (
        <tr>
        <th>{index + 1}</th>
        <td>
          {item.userName}
        </td>
        <td>{item?.userEmail}</td>
        <td>Admin</td>
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