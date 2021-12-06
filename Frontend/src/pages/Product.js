import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(() => data.data);
      });
  }, [id]);
  return (
    <div className="">
      <h1>hello i am {product}</h1>
    </div>
  );
}

export default Product;
