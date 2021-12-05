import React from "react";

function Card(prop) {
  return (
    <div
      className="
          bg-white
          shadow-md
          h-96
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 sm:w-3/5
          md:w-96
          hover:shadow-xl
        "
    >
      <img
        className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
        src={prop.product?.images[0]?.src}
        alt="product"
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
        <div className="flex flex-col justify-start items-baseline">
          <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
            {prop.product?.title}
          </h1>
          <span className="text-xs text-indigo-300 mt-0">
            by {prop.product?.brand}
          </span>
        </div>
        <p className="text-xs text-gray-500 w-4/5 overflow-auto overflow-ellipsis my-4">
          {prop.product?.description}
        </p>
        <div className="w-full flex justify-between items-center py-2">
          <h1 className="font-bold text-gray-500">₹ {prop.product?.price}</h1>
          <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
