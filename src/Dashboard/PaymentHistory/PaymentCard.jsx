/* eslint-disable react/prop-types */


const PaymentCard = ({item}) => {
    return (
        <tr>
        <td>
          {item.email}
        </td>
        <td>{item?.transactionId}</td>
        <td> 
          {item?.price}
        </td>
        <th>
          {item?.date}
        </th>
      </tr>
    );
};

export default PaymentCard;