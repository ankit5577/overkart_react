import { createContext, useEffect, useState } from "react";

const ProductStore = createContext({
  products: [],
  getProducts: () => {
    return this.products;
  },
});

export const ProductProvider = (props) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/product/all")
      .then((response) => response.json())
      .then((product) => setproducts(() => product.data));
  }, []);

  const init_value = {
    products
  };
  
  return (
    <ProductStore.Provider value={init_value}>
      {props.children}
    </ProductStore.Provider>
  );
};

export default ProductStore;
