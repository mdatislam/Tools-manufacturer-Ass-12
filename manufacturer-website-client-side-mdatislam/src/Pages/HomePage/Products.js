import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://still-spire-24654.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProduct(data);
      });
  }, [products]);

  return (
    <div className="container mx-auto mt-4 py-4">
      <h2 className="uppercase  text-rose-700 text-center  text-3xl font-bold">
        Our Products
      </h2>
      <div className="flex flex-col justify-center h-10 w-48 text-purple-600 font-bold mx-auto text-5xl items-center">
        <div class="divider  h-3 items-center">---</div>
      </div>

      <p className="text-center">
        The manufacture of industrial equipment requires a vast knowledge base
        of <br />
        processes and understanding of fundamental concepts.
      </p>
      <h2 className="text-center my-5 text-Purple-600 text-3xl font-bold py-5">
        Total Manufactured Items:{products.length}
      </h2>
      <div className=" sm:container sm:mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 py-5">
        {products.map((product) => (
          <Product key={Product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
