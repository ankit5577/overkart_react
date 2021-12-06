import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [showImg, setshowImg] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(() => data.data);
        setshowImg(() => data.data.images[0].src);
      });
  }, [id]);

  return (
    <div className="flex flex-row-reverse">
      <div className="hidden md:flex flex-[1] flex-col flex-grow w-20 border-l p-2">
        <h2 className="font-sans text-xl place-self-center font-semibold leading-none tracking-tight text-gray-900 sm:text-xl">
          <span className="inline-block mb-2">Similar Products</span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="flex flex-[5]  flex-col md:flex-row p-2 object-contains">
        <div className="flex flex-col max-w-sm">
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
        <div className="flex-1 px-6 py-2">
          <h2 className="font-sans text-3xl place-self-center font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">{product.title}</span>
            <div className="text-xl font-light text-deep-purple-accent-400">
              by {product.brand}
            </div>
          </h2>
          <div className="my-4 font-extralight">{product.description}</div>
          <h3 className="text-4xl font-bold text-gray-800">
            ₹ {product.price}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Product;
