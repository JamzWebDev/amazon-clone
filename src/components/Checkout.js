import "./Checkout.css"
import React, {useContext} from 'react';
import ShoppingContext from "../context/Shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal";

const Checkout = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { basket, user } = shoppingContext;

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your Shopping Basket</h2>

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
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
