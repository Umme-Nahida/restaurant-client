import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import '@stripe/stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {

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