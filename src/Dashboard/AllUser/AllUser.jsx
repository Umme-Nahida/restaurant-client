import useAllUsers from "../../Hooks/useAllUsers";
import CartRow from "../MyCart/CartRow";


const AllUser = () => {
    const [user] = useAllUsers()
    console.log(user)
    return (
        <div>
            <div>
                <h1>total User {user.length} </h1>
            </div>
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
        user?.map((item,index)=>(
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

export default AllUser;