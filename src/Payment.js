import React, { useState }from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import axios from "./axios"


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
    
    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [Succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_menthod: {
                    card: elements.getElement(CardElement),
            
                },
            })

    };
    

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

        return (
        <div className="payment">
            <div className="payment__container">
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            <div className="payment__section">
                <div className="payment__title">
                <h3>Delivery Address</h3>
                </div>

                <div className="payment__address">
                <p>{user?.email}</p>
                <p> 123 Addisababa st</p>
                <p>Alexandria, VA</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                <h3>Review items and delivery</h3>
                </div>

                <div className="payment__items">
                {basket.map((item) => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                <h3>Payment Method</h3>
                        </div>
                        <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => <h3>Order Total: {value}</h3>}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || Succeeded}>
                                        <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                                    </button>
                                    
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                        </div>
            </div>
            </div>
        </div>
        );
    }

export default Payment
