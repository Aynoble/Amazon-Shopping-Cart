import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";


function Checkout() {
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg"
          alt=""
        />
        <div className="checkout_title">
          <h5>{user ? `Hello ${user?.email}` : ""}</h5>
          <h2>Your Shopping Basket</h2>
          
          {basket.map((item) => (
            <CheckoutProduct
              image={item.image}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
            />
          ))}
          
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
