import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAllUsers from "../../Hooks/useAllUsers";
import useGetPayment from "../../Hooks/useGetPayment";
import UserCart from "../AllUser/UserCart";
import PaymentCard from "./PaymentCard";

const PaymentHistory = () => {
    const [user] = useAllUsers()
    const [paymentData] = useGetPayment()
    console.log(paymentData)
    return (
        <div> 
            <SectionTitle subTitle={'---At a Glance!---'} heading={'PAYMENT HISTORY'}></SectionTitle>
            {/* table row added */}

            <div className="p-10">
      <div>
        <h1 className="text-xl md:text-2xl">Total Payments: {paymentData?.length}</h1>
      </div>
      <div className="overflow-x-auto m-10 max-w-xs md:max-w-max lg:max-w-screen-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Category</th>
              <th>Total Price</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentData?.map((item, index) => (
              <PaymentCard key={item._id} item={item} index={index}></PaymentCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            
        </div>
    );
};

export default PaymentHistory;