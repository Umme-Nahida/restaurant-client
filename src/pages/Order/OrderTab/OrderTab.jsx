/* eslint-disable react/prop-types */
import Cart from "../../../shares/Cart/Cart";


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-5 justify-items-center px-5 md:px-20">
                {
                    items.map(item=>(
                        <Cart
                        key={item._id}
                        item={item}
                        ></Cart>
                    ))
                }
            </div>
    );
};

export default OrderTab;