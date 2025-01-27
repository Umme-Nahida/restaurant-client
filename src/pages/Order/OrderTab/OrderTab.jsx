/* eslint-disable react/prop-types */
import Cart from "../../../shares/Cart/Cart";


const OrderTab = ({items,isError,loading}) => {
    if(loading){
        return  <div className="text-center flex items-center justify-center text-yellow-300">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    }

    if(isError){
        return <div>{isError?.error?.message ? isError?.error.message : <p>This data is not a array </p>
        }</div>
    }
    return (
       <div>
        {
            items.length > 0 ? (
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
            ) : 
            <div className="text-center flex items-center justify-center text-yellow-300">
          <span className="loading loading-bars loading-lg"></span>
        </div>
        }
       </div>
    );
};

export default OrderTab;