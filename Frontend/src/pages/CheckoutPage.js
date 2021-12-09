import React, { useEffect, useState } from "react";

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
  }, [products]);

  return (
    <div className="flex p-2 flex-col gap-2">
      <h2 className="text-4xl text-gray-800 font-light antialiased">
        Checkout
      </h2>
      <div className="flex flex-row gap-2">
        <div className="flex-[4] md:border-r">
          <ul>
            {products.length === 0 && (
              <div className="text-3xl font-normal text-center">
                No products found
              </div>
            )}
            {products &&
              products.map((data) => (
                <li
                  key={data.title}
                  className="border flex flex-row gap-2 m-2 rounded-lg p-2"
                >
                  <div>
                    <img
                      className="w-24 rounded-lg"
                      src={data.image.src}
                      alt={data.title}
                    ></img>
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold text-gray-800 antialiased">
                      {data.title}
                    </h2>
                    <span className="antialiased font-mono font-gray-400">
                      Quantity:{" "}
                      <span className="font-semibold text-green-700">
                        {data.quantity}
                      </span>
                    </span>
                    <h3 className="antialiased font-mono font-gray-400">
                      Price: ₹{data.price - data.discount}{" "}
                      <s className="text-xs text-red-600">{data.price}</s>
                    </h3>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex-[2] border rounded-lg p-2">
          <h2>Total Price: ₹{price}</h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
