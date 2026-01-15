import styles from "./ProductCard.module.css";

const ProductCard = ({ image, title, price }) => {
  return (
    <article className={styles.card_container}>
      <img src={image} />
      <div className={styles.card_info}>
        <h4>{title}</h4>
        <p>${price.toFixed(2)}</p>
        <button>Add to cart</button>
      </div>
    </article>
  );
};

export default ProductCard;
