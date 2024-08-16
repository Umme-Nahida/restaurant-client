/* eslint-disable react/prop-types */

const CartRow = ({item,index}) => {
    console.log(item)
    return (
        <tr>
        <th>
         {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item?.img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {item?.name}
        </td>
        <td>${item?.preice ? item?.preice : item.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Approve</button>
        </th>
      </tr>
    );
};

export default CartRow;