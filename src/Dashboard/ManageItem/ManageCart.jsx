/* eslint-disable react/prop-types */

import { MdDelete, MdEdit } from 'react-icons/md';

const ManageCart = ({item,num}) => {
  console.log(item)
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
            <MdEdit></MdEdit>
          </button>
        </th>
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

export default ManageCart;