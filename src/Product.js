import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    console.log(basket);
    dispatch({
      type: "ADD_TO_BASKET",

      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price} </strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <img
                  className="star"
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/57/white-medium-star_2b50.png"
                  alt="star"
                />
              </p>
            ))}
        </div>
      </div>
      <img className="product_image" src={image} alt="product_image" />
      <p>
        <button className="product_button" onClick={addToBasket}>
          Add to Basket
        </button>
      </p>
    </div>
  );
}

export default Product;
