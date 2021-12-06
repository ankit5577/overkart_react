import { createContext, useEffect, useState } from "react";

const ProductStore = createContext({
  products: [],
  getProducts: () => {
    return this.products;
  },
});

export const ProductProvider = (props) => {
  const [products, setproducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/product/all")
      .then((response) => response.json())
      .then((product) => setproducts(() => product.data));
    setCartItems(() => {
      const localCartItems = JSON.parse(localStorage.getItem("_cart_items"));
      if (localCartItems !== null && Array.isArray(localCartItems)) {
        return localCartItems;
      }
      return [];
    });
  }, []);

  const addToCart = (id) => {
    setCartItems(() => {
      const already_exists = cartItems.findIndex((data) => data._id === id);
      if (already_exists > -1) {
        const localCart = cartItems;
        localCart[already_exists].quantity += 1;
        localStorage.setItem("_cart_items", JSON.stringify(localCart));
        return localCart;
      }
      // if item does not exists.
      const local_item = {
        quantity: 1,
        _id: id,
      };
      const items = [...cartItems, local_item];
      localStorage.setItem("_cart_items", JSON.stringify(items));
      return items;
    });
  };

  const init_value = {
    products,
    cartItems,
    addToCart,
  };

  return (
    <ProductStore.Provider value={init_value}>
      {props.children}
    </ProductStore.Provider>
  );
};

export default ProductStore;
