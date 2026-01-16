import styles from "./Home.module.css";

import ProductCard from "../../components/ProductCard";

import useFetchProducts from "../../hooks/useFetchProducts";
import { NavLink } from "react-router-dom";

const Home = ({ addToCart }) => {
  const { products, loading } = useFetchProducts();

  return (
    <div className={styles.home}>
      <h1>Discover amazing fake store items from fake store API</h1>
      <p>Your one-stop shop for electronics, jewelry, and fashion</p>
      <NavLink to={"/shop"}>
        <button>Shop now</button>
      </NavLink>
      <h2>Featured Products</h2>
      {loading && <p className="loading">Loading...</p>}
      <div className={styles.products_container}>
        {products &&
          products
            .slice(0, 3)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
