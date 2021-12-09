import { createContext, useEffect, useState } from "react";
import useHttp from "./Hooks/use-http";

const ProductStore = createContext({
  products: [],
  getProducts: () => {},
  addToCart: (product) => {},
});

export const ProductProvider = (props) => {
  const [products, setproducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const {
    error,
    isLoading,
    sendRequest: fetch,
  } = useHttp("/product/all", {}, (products) => {
    setproducts(() => products);
  });

  useEffect(() => {
    fetch();
    setCartItems(() => {
      const stored_items = localStorage.getItem("_cart_items");
      const localCartItems = stored_items ? JSON.parse(stored_items) : "";
      if (localCartItems && Array.isArray(localCartItems)) {
        return localCartItems;
      }
      return [];
    });
  }, []);

  const addToCart = (product) => {
    setCartItems(() => {
      const already_exists = cartItems.findIndex(
        (data) => data._id === product._id
      );
      if (already_exists > -1) {
        const localCart = cartItems;
        localCart[already_exists].quantity += 1;
        localStorage.setItem("_cart_items", JSON.stringify(localCart));
        return localCart;
      }
      // if item does not exists.
      const local_item = {
        quantity: 1,
        brand: product.brand,
        description: product.description,
        discount: product.discount,
        image: product.images[0],
        price: product.price,
        _id: product._id,
        stock: product.stock,
        title: product.title,
        varients: product.varients,
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
