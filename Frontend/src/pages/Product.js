import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import ProductStore from "../services/ProductState";

function Product() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const productCtx = useContext(ProductStore);
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [showImg, setshowImg] = useState("");

  useEffect(() => {
    console.log("product page useEffect init");
    fetch(`http://localhost:4000/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(() => data.data);
        setshowImg(() => data.data.images[0].src);
        console.log(data.data);
      })
      .then(() => {
        console.log("getting similar products");
        setSimilarProducts(() => {
          let local_products = [];
          let count_image = 0;
          for (let local of productCtx.products) {
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
      });
  }, [id, product.category, product.type, productCtx.products]);

  return (
    <div className="flex flex-row-reverse">
      <div className="hidden md:flex md:flex-1 md:flex-row border-l md:flex-wrap p-2 max-h-screen overflow-auto">
        <h2 className="font-sans text-xl place-self-center font-semibold leading-none tracking-tight text-gray-900 sm:text-xl">
          <span className="inline-block mb-2">Similar Products</span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        {/* similar product list */}
        {similarProducts?.length > 0 ? (
          similarProducts.map((element) => (
            <Link
              to={`../product/${element._id}`}
              key={element._id}
              className="flex gap-2 mt-2 flex-grow flex-wrap"
            >
              <div className="flex flex-grow flex-row border p-2 rounded-xl gap-2 hover:shadow-sm">
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
              <button onClick={() => setshowImg(d.src)}>
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
            <div className="flex flex-grow flex-row overflow-scroll">
              {product?.collections?.map((data) => (
                <span
                  className={`px-2 py-1 text-xs tracking-light text-center self-center justify-self-center
                   bg-gray-200 text-gray-700 rounded-full m-1`}
                >
                  #{data}
                </span>
              ))}
            </div>
          </div>
          <div className="flex p-2 my-2 gap-2">
            <Button
              color="primary"
              class="rounded-md text-white hover:bg-deep-purple-accent-700 hover:shadow-xl"
            >
              Add to cart
            </Button>
            <Button
              color="secondary"
              class="text-white rounded-md hover:bg-teal-800 hover:shadow-xl"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
