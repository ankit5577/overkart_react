import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

function Checkout() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const localStorageCartProducts = JSON.parse(
      localStorage.getItem("_cart_items")
        ? localStorage.getItem("_cart_items")
        : "[]"
    );
    if (localStorageCartProducts && Array.isArray(localStorageCartProducts)) {
      setProducts(() => localStorageCartProducts);
    } else {
      setProducts(() => []);
    }
  }, []);

  useEffect(() => {
    setPrice(() => {
      let totalPrice = 0;
      products.forEach((data) => {
        totalPrice += data.quantity * (data.price - data.discount);
      });
      return totalPrice;
    });
    console.log(products);
  }, [products]);

  return (
    <div className="flex md:flex-row flex-col-reverse gap-2">
      <div className="flex md:border-r p-2 flex-[2] flex-col gap-2">
        {products?.length === 0 && (
          <div className="text-4xl text-center flex font-bold text-gray-800">
            <p className="mx-auto">No Cart Items found</p>
          </div>
        )}
        <h2 className="text-gray-800 text-3xl font-light p-2">Cart Items</h2>
        {products &&
          products.map((data, index) => (
            <Link
              to={`../product/${data._id}`}
              className="p-2 border rounded-lg flex flex-row gap-4"
            >
              <div key={index} className="flex-[2] md:flex-[1]">
                <img
                  src={data.image.src}
                  alt={`${data.title} by ${data.brand}`}
                  className="rounded-lg object-contain max-h-80 w-full"
                ></img>
              </div>
              <div className="p-2 flex flex-[3] md:flex-[5] flex-col">
                <h2 className="text-2xl md:text-3xl antialiased text-gray-800 font-semibold">
                  {data.title}{" "}
                </h2>
                <h5 className="text-sm md:text-md font-medium text-gray-600 antialiased">
                  Price:{" "}
                  <span className="text-lg md:text-xl font-semibold text-green-700">
                    {" "}
                    ₹{data.price - data.discount}{" "}
                  </span>
                  <s className="text-red-500 text-xs md:text-sm">
                    {data.price}
                  </s>
                </h5>
                <h3 className="text-sm md:text-md font-medium text-gray-600 antialiased">
                  Quantity:{" "}
                  <span className="text-lg font-semibold text-gray-700">
                    {data.quantity}
                  </span>
                </h3>
                <p className="text-xs text-gray-700 hidden md:block">
                  {data.description}
                </p>
              </div>
            </Link>
          ))}
      </div>
      <div className="flex flex-[2] flex-col flex-grow p-2  border-b md:border-0">
        <h2 className="text-3xl text-gray-800 font-light mb-4">Summary</h2>
        <ul>
          {products.map((data) => (
            <li className="p-2 border-b text-md flex flex-wrap flex-grow gap-2 flex-row">
              <div className="flex-[1] flex">
                <img
                  alt="add"
                  className="self-center"
                  src="https://img.icons8.com/ios-glyphs/30/000000/add--v2.png"
                />
              </div>
              <div className="flex flex-[6] flex-col">
                <p className="text-lg text-gray-800 my-2">{data.title}</p>
                <p className="flex justify-between text-sm">
                  <span>
                    ₹{data.price - data.discount} x {data.quantity}
                  </span>
                  <span>₹{(data.price - data.discount) * data.quantity}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="flex justify-between m-2">
          <span className="text-xl">Total:</span>
          <span className="text-xl">₹{price}</span>
        </p>
        <div className="my-2 flex">
          <Button
            class="text-white hover:shadow-lg rounded-lg text-center mx-auto"
            color="primary"
          >
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
