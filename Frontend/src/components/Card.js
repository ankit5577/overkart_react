import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import ProductStore from "../services/ProductState";

function Card(prop) {
  console.log("card is called");
  const ProductCtx = useContext(ProductStore);

  const addToCartHandler = (id) => {
    ProductCtx.addToCart(id);
  };

  return (
    <div
      className="
          bg-white
          border
          h-96
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 sm:w-3/5
          md:w-96
          hover:shadow-sm
        "
    >
      <img
        className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
        src={prop.product?.images[0]?.src}
        alt={prop.product?.title + " item"}
      />
      <div
        className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
      >
        <Link to={`/product/${prop.product?._id}`}>
          <div className="flex flex-col justify-start items-baseline">
            <h1 className="text-lg antialiased tracking-wider font-bold mb-0 text-gray-600 pt-2">
              {prop.product?.title}
            </h1>
            <span className="text-xs text-indigo-300 mt-0">
              by {prop.product?.brand}
            </span>
          </div>
        </Link>
        <p className="text-xs text-gray-500 w-4/5 overflow-auto no-scrollbar overflow-ellipsis my-4">
          {prop.product?.description}
        </p>
        <div className="w-full flex justify-between items-center py-2">
          <h1 className="font-bold text-gray-500">₹ {prop.product?.price}</h1>
          <Button
            click={() => addToCartHandler(prop.product?._id)}
            class="border antialiased text-sm text-teal-400 border-teal-400 mr-5 px-3 py-1 rounded-lg 
            hover:bg-teal-400 hover:text-white hover:shadow-lg"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
