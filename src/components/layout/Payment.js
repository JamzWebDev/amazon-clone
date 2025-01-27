import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from '../CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ShoppingContext from '../../context/Shopping/shoppingContext';
import CurrencyFormat from 'react-currency-format';

const Payment = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { basket, user, getBasketTotal } = shoppingContext;

    const history = useHistory();

    const stripe = useStripe();
    const element = useElements();

 
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
      //Generate the special stripe secret which will allow us to charge the customer//
      const getClientSecret = async () => {
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
    },[basket]);

    console.log("The secret is =>", clientSecret);

    const handleSubmit = async (event) => {
      event.preventDefault();
      setProcessing(true)

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: element.getElement(CardElement) },
      }).then(({paymentIntent}) => {
        //Payment Intent = payment confirmation
        setSucceeded(true)
        setError(null)
        setProcessing(false);
        history.push("/orders");
      });
    };

    const handleChange = (event) => {
      setDisabled(event.empty);
      setError(event.error? "e.error.message": "")
    }

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 ReactJs Road</p>
            <p>Cape Town, South Africa</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            {/*Stripe code will go here*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-price-container">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
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

export default Payment;
