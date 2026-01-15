import { useState, useEffect } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      if (cancelled) {
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    }

    loadProducts();
  }, [cancelled]);

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
