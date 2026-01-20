import CartProducts from "../../components/CartProducts";
import styles from "./Cart.module.css";

const Cart = ({ cartItems, changeCartQuantity }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.empty_cart}>
      {cartItems.length === 0 ? (
        <h1>Your Cart is empty</h1>
      ) : (
        <div className={styles.cart}>
          <div className={styles.cart_content}>
            <h1>Your cart</h1>
            {cartItems.map((item) => (
              //inicio
              <div key={item.id} className={styles.cart_items}>
                <CartProducts
                  product={item}
                  changeCartQuantity={changeCartQuantity}
                />
              </div>

              // <div key={item.id} className={styles.cart_items}>
              //   <p>{item.title}</p>
              //   <p>Quantity: {item.quantity}</p>
              //   <p>Item price: {item.price}</p>
              //   <p>Price: {(item.price * item.quantity).toFixed(2)}</p>
              // </div>
            ))}
          </div>

          <div className={styles.cart_summary}>
            <div className={styles.total_price}>
              <span> Total price: </span>
              <span> ${totalPrice.toFixed(2)}</span>
            </div>
            <button className={styles.checkout_btn}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
