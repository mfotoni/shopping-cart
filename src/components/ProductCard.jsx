import styles from "./ProductCard.module.css";

import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const { image, title, price } = product;

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <article className={styles.card_container}>
      <img src={image} />
      <div className={styles.card_info}>
        <h4>{title}</h4>
        <p>${price.toFixed(2)}</p>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </article>
  );
};

export default ProductCard;
