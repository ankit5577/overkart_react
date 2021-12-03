import { createContext } from "react";

const ProductStore = createContext();

export const ProductProvider = (props) => {
  const init_value = {};
  return (
    <ProductStore.Provider value={init_value}>
      {props.children}
    </ProductStore.Provider>
  );
};

export default ProductStore;
