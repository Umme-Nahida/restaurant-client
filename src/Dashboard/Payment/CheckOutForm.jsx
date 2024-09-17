import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const CheckOutForm = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [clientSecret,setClientSecret] = useState('')
    const [tansactionId,setTansactionId] = useState('')
    const [err,setErr]=useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total,item)=>total + item?.price, 0)
    // console.log(totalPrice)

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
            // console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure,totalPrice])



   const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(' hello hi bye bye')

    if(!stripe || !elements){
        console.log('strive or cart element not fount')
        return;
    }

    const card = elements.getElement(CardElement)

    if(card === null){
        console.log('card is null ')
        return;
    }
    
    const {error,paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
    })

    if(error){
        console.log('payment err',error)
        setErr(error.message)
    }else{
        console.log("payment options",paymentMethod)
        setErr('')
    }

    const {paymentIntent, error:confirmedErr} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
          card: card,
          billing_details:{
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous"
          }
        },
      });
       
      if(confirmedErr){
        console.log(confirmedErr)
        setErr(confirmedErr.message)
      }else{
        console.log("payment intent",paymentIntent)
        setErr(" ")
        if(paymentIntent.status === "succeeded"){
            // console.log(paymentIntent.id)
            setTansactionId(paymentIntent.id)
            toast.success('payment has been complete successfully')

            // now save payment to the database
            const payment = {
                email:user.email,
                price:totalPrice,
                date:new Date(),
                transactionId:paymentIntent.id,
                cardId:cart.map(item=>item._id),
                menuId:cart.map(item=>item.menuId),
                status:'pending'
            }

        }
      }

}

    return (
        <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSubmit}>
                <CardElement
                options={{
                    style:{
                        base:{
                            fontSize:'16px',
                            color:'#808080',
                            '::placeholder':{
                                color:'#808080',

                            }
                        },
                        invalid:{
                            color:'#FF0000'
                        }
                    }
                }}
                ></CardElement>
            <button className="btn btn-sm my-5" type="submit" disabled={!stripe || !clientSecret}>Submit</button>
            <p className="text-red-600">{err} </p>
            {tansactionId && <p className="text-green-500">{tansactionId}</p>}
            </form>
        </div>
    );
};

export default CheckOutForm;