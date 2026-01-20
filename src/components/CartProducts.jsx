import styles from "./CartProducts.module.css";

// import { useState } from "react";

const CartProducts = ({ product, changeCartQuantity }) => {
  const { id, image, title, price, quantity } = product;

  // const [quantity, setQuantity] = useState(1);

  // const handleAddToCart = () => {
  //   addToCart(product, quantity);
  // };

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);

    if (newQuantity >= 0) {
      changeCartQuantity(id, newQuantity);
    }
  };

  return (
    <article className={styles.card_container}>
      <img src={image} />
      <div className={styles.card_info}>
        <h4>{title}</h4>
        <p>${price.toFixed(2)}</p>
        <div className={styles.quantity_control}>
          Quantity:
          <input
            type="number"
            value={quantity}
            min="0"
            onChange={handleQuantityChange}
          />
          {/* <button onClick={handleAddToCart}>Add to cart</button> */}
        </div>
      </div>
    </article>
  );
};

export default CartProducts;
