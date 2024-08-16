import useAllUsers from "../../Hooks/useAllUsers";
import CartRow from "../MyCart/CartRow";
import UserCart from "./UserCart";

const AllUser = () => {
  const [user] = useAllUsers();
  console.log(user);
  return (
    <div className="p-10">
      <div>
        <h1 className="text-xl md:text-2xl">total User {user?.length}</h1>
      </div>
      <div className="overflow-x-auto m-10 max-w-xs md:max-w-max lg:max-w-screen-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((item, index) => (
              <UserCart key={item._id} item={item} index={index}></UserCart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
