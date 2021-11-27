
 
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK)
 
export default function CheckoutButton ({price_id, cancelPath }){
 
    const handleClick = async (event) => {
        // Get Stripe.js instance
    
        // Call your backend to create the Checkout Session
        const { sessionId } = await fetch('/api/checkout/session', { 
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({quantity: 1, price_id, cancelPath })
         }).then(res => res.json()) 
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise
        const { error } = await stripe.redirectToCheckout({
            sessionId
        })
 
    }
 
    return (
        <div>
            <div className='checkoutButton' role='link' onClick={handleClick}>
                Checkout
            </div>
        </div>
    )
}

