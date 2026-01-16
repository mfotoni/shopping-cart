import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Odin Store
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({totalItems})</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
