import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import ManageCart from "./ManageCart";

const ManageItem = () => {
    const [menu] = useMenu()
    console.log(menu)
    return (
        <div>
            <SectionTitle subTitle={"---Hurry Up!---"} heading={"MANAGE ALL ITEMS"}></SectionTitle>

            {/*manage item table */}
            <div className="overflow-x-auto m-10 max-w-xs md:max-w-max lg:max-w-screen-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, index) => (
              <ManageCart key={index} item={item} num={index}></ManageCart>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageItem;