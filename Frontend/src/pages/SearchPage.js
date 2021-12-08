import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import ProductStore from "../services/ProductState";

function Search() {
  const { query } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productCtx = useContext(ProductStore);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    setProducts(() => {
      let searchedProducts = productCtx.products.filter((data) => {
        let searchWithIn = data.title + data.brand + data.price.toString() + data.category + data.type;
        return searchWithIn.includes(query.toLowerCase().trim());
      });
      setLoading(false);
      return searchedProducts;
    });
  }, [query, productCtx.products]);

  return (
    <div className="flex flex-grow flex-col gap-2">
      {loading && <Loading fullscreen={true}></Loading>}
      {(products.length && !loading) === 0 && (
        <div className="text-4xl text-center flex font-bold text-gray-800">
          <p className="mx-auto">No Product found</p>
        </div>
      )}
      {products &&
        !loading &&
        products.map((data, index) => (
          <Link
            key={index}
            to={`../product/${data._id}`}
            className="p-2 border rounded-lg max-h-[200px] flex flex-row gap-4"
          >
            <div className="w-[200px]">
              <img
                src={data.images[0].src}
                alt={`${data.title} by ${data.brand}`}
                className="object-fit w-28 rounded-md"
              ></img>
            </div>
            <div className="p-2  flex flex-grow flex-col">
              <h2 className="text-xl md:text-3xl antialiased text-gray-800 font-semibold">
                {data.title}{" "}
                {data.collections.map((collection) => (
                  <span className="bg-gray-200 p-2 ml-2 text-xs rounded-2xl">
                    {collection}
                  </span>
                ))}
              </h2>
              <h5 className="text-sm md:text-md font-medium text-gray-600 antialiased mb-2 ">
                Price:{" "}
                <span className="text-lg md:text-xl font-semibold text-teal-700">
                  {" "}
                  ₹{data.price - data.discount}{" "}
                </span>
                <s className="text-red-500 text-xs md:text-sm">{data.price}</s>
              </h5>

              <p className="text-xs text-gray-700">{data.description}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Search;
