import styles from "./Shop.module.css";

import useFetchProducts from "../../hooks/useFetchProducts";

import ProductCard from "../../components/ProductCard";

const Shop = ({ addToCart }) => {
  const { products, loading } = useFetchProducts();

  return (
    <div className={styles.shop}>
      <h1>Products</h1>
      {loading && <p className="loading">Loading...</p>}
      <div className={styles.products_container}>
        {products &&
          products.map((product) => (
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

export default Shop;
