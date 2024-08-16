import useCart from "../../Hooks/useCart";
import CartRow from "./CartRow";

const MyCart = () => {
    const [cart] = useCart();

    const totalPice = cart.reduce((total,item)=>{
       return total+ item.price
    },0)

    return (

        <div className="p-10">
            <div className="flex items-center justify-around">
                <h1 className="text-xl md:text-2xl">items{cart.length} </h1>
                <h1 className="text-xl md:text-2xl">total price {totalPice} </h1>
                <button className="btn btn-primary">pay</button>
            </div>

            {/* table container */}
            <div className="overflow-x-auto m-10 max-w-xs md:max-w-max lg:max-w-screen-xl">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          Item Number 
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
        cart?.map((item,index)=>(
          <CartRow
          key={item._id}
          item={item}
          index={index}
          >
          </CartRow>
        ))
       }
      
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default MyCart;