import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

   const handleSubmit=async(e)=>{
    e.preventDefault()

    if(!stripe || !elements){
        console.log('strive or cart element not fount')
        return;
    }

    const card = elements.getElement(CardElement)

    if(card === null){
        console.log('card is null ')
        return;
    }
    const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
      });
      console.log('result',result)
   }

   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                options={{
                    style:{
                        base:{
                            fontSize:'16px',
                            color:'#953553',
                            '::placeholder':{
                                color:'#FF0000',

                            }
                        },
                        invalid:{
                            color:'#008000'
                        }
                    }
                }}
                ></CardElement>
            </form>
            <button type="submit" disabled={!stripe}>Submit</button>
        </div>
    );
};

export default CheckOutForm;