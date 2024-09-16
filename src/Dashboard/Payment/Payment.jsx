import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import '@stripe/stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe('');

const Payment = () => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
      };

    return (
        <div>
            <SectionTitle subTitle={'Please Payment'} heading={'for purches your product'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                   <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;