import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import ProductStore from "../services/ProductState";
import useHttp from "../services/Hooks/use-http";

function Product() {
  const { id } = useParams();
  const productCtx = useContext(ProductStore);
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [showImg, setshowImg] = useState("");
  
  const responseHandler = (data) => {
    setProduct(() => data);
    setshowImg(() => data.images[0].src);
  };

  const {
    isLoading,
    error,
    sendRequest: fetch,
  } = useHttp(`/product/${id}`, {}, responseHandler);

  useEffect(() => {
    setSimilarProducts(() => {
      let local_products = [];
      let count_image = 0;
      for (let local of productCtx.products) {
        console.log("ejhe");
        if (
          local.category === product.category ||
          local.type === product.type
        ) {
          local_products.push(local);
          count_image++;
        }
        if (count_image === 10) {
          break;
        }
      }
      return local_products;
    });
  }, [productCtx.products, product]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch();
  }, [id]);

  return (
    <div className="flex flex-row-reverse">
      <div className="hidden md:flex md:flex-1 md:flex-row border-l md:flex-wrap p-2 max-h-screen overflow-y-scroll ">
        <h2 className="font-sans text-xl place-self-center font-semibold leading-none tracking-tight text-gray-900 sm:text-xl">
          <span className="inline-block mb-2">Similar Products</span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        {/* similar product list */}
        {similarProducts?.length ? (
          similarProducts.map((element, index) => (
            <Link
              to={`../product/${element._id}`}
              key={index}
              className="flex gap-2 mt-2 flex-grow flex-wrap"
            >
              <div className="flex flex-grow flex-row shadow-sm p-2 rounded-xl gap-2 hover:shadow-sm">
                <img
                  className="object-contain w-16 rounded-lg"
                  src={element.images[0].src}
                  alt="similar products"
                ></img>
                <div className="flex flex-col">
                  <h4 className="text-md antialiased tracking-tight font-semibold text-gray-700">
                    {element.title}
                  </h4>
                  <h5 className="text-sm font-light antialiased">
                    ₹{element.price}
                  </h5>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>loading</div>
        )}
      </div>
      <div className="flex flex-[5] flex-col md:flex-row md:p-2 object-contains">
        <div className="flex flex-col max-w-sm mx-auto">
          {product.images?.length > 0 ? (
            <img
              className="max-h-md self-center md:max-h-xl max-w-xs object-cover rounded-md shadow-xs"
              alt={product.title}
              src={showImg}
            />
          ) : (
            <div>Loading</div>
          )}
          <div className="flex flex-row gap-2 flex-wrap mx-auto">
            {product.images?.map((d) => (
              <button key={d.src} onClick={() => setshowImg(d.src)}>
                <img
                  src={d.src}
                  className="w-14 py-2 rounded-md"
                  alt="change"
                ></img>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 md:px-6 py-2">
          <h2 className="font-sans text-3xl place-self-center font-semibold leading-none tracking-light text-gray-800 sm:text-4xl">
            <span className="inline-block mb-2 antialiased ">
              {product.title}{" "}
              {product.new && (
                <span className="bg-teal-accent-700 text-white p-1 rounded-full text-xs">
                  new
                </span>
              )}
            </span>
            <div className="text-xl font-light text-deep-purple-accent-400">
              by {product.brand}
            </div>
          </h2>
          <div className="my-4 font-extralight">{product.description}</div>
          <div className="flex flex-row">
            <div className=" text-gray-800 flex-[1] antialiased">
              {product.discount > 0 ? (
                <div>
                  <p className="font-semibold">
                    Price:{" "}
                    <s className="text-red-400 font-normal text-md">
                      ₹{product.price}
                    </s>{" "}
                    <span className="text-lg font-medium text-green-800">
                      {" "}
                      ₹{product.price - product.discount}{" "}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Savings:{" "}
                    {
                      <i className="text-md font-normal  px-1 py-1 pr-2 bg-green-500 text-white rounded-md">{`+${product.discount}`}</i>
                    }
                  </p>
                </div>
              ) : (
                <p>₹ {product.price}</p>
              )}
            </div>
            <div
              className={`flex flex-grow flex-row ${
                product?.collections?.length > 4
                  ? "overflow-x-scroll"
                  : "overflow-hidden"
              }`}
            >
              {product?.collections?.map((data) => (
                <span
                  key={data}
                  className={`px-2 py-1 text-xs font-medium tracking-light text-center self-center justify-self-center
                  bg-teal-accent-700 text-white rounded-full m-1`}
                >
                  {data}
                </span>
              ))}
            </div>
          </div>
          <div className="flex p-2 my-2 gap-2">
            <div>
              <Button
                color="primary"
                class="rounded-md text-xs antialiased tracking-wider text-white hover:bg-deep-purple-accent-700 hover:shadow-xl"
              >
                Add to cart
              </Button>
            </div>
            <div>
              <Button
                color="secondary"
                class="text-white text-xs antialiased tracking-wider rounded-md hover:bg-teal-accent-900 hover:shadow-xl"
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
