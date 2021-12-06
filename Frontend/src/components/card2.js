import React from "react";
import { Link } from "react-router-dom";

function Card(prop) {
  return (
    <div className="flex flex-1 flex-wrap p-4 antialiased text-gray-900">
      <div className="flex flex-1 relative pb-20">
        <img
          src={prop.product?.images[0]?.src}
          alt={`${prop.product?.brand} ${prop.product?.title} ${prop.product?.category}`}
          className="w-full object-cover object-center rounded-2xl hover:shadow-md flex flex-1"
        />
          <div className="absolute transform translate-x-7 bottom-0">
        <Link to={`/product/${prop.product?._id}`}>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  2 baths &bull; 3 rooms
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {prop.product?.title}
              </h4>
              <div className="mt-1">
                <span className="text-gray-600 text-sm">₹ </span>
                {prop.product?.price}
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span className="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
        </Link>
          </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
