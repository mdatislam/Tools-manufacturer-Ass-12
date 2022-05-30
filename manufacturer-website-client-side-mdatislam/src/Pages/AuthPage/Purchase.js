import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ConfirmOrder from "./ConfirmOrder";

const Purchase = () => {
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState(null);

  const {
    _id,
    name,
    img,
    unitPrice,
    stock,
    Description,
    minimuOrderQuantity,
    Brand,
  } = product;

  const { id } = useParams();
  const url = `https://still-spire-24654.herokuapp.com/products/${id}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newStock = parseInt(stock) + parseInt(data.orderQuantity);
    // console.log(newStock);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newStock }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setProduct(result);
      });
  };

  return (
    <div className="sm:container sm:mx-auto px-10 container mx-auto py-5 mt-5">
      <div class="card bg-base-100 shadow-xl flex flex-col  lg:flex-row">
        <figure className="flex-1">
          <img src={img} alt="" />
        </figure>

        <div className="flex-1">
          <div class="card-body ">
            <div className="flex flex-row justify-space">
              <div className="flex-1">
                <h2 class="text-sm font-bold">
                  {" "}
                  <span className="font-bold text-pink-400 text-base">
                    Name
                  </span>{" "}
                  : {name}
                </h2>
                <h2 class="">
                  {" "}
                  <span className="font-bold text-pink-400 text-base">
                    Unit Price
                  </span>{" "}
                  : $ {unitPrice}
                </h2>
                <h2 class="">
                  {" "}
                  <span className="font-bold text-pink-400 text-base">
                    Min Order qty
                  </span>
                  : {minimuOrderQuantity}
                </h2>
              </div>
              <div className="flex-1">
                <h2 class="">
                  {" "}
                  <span className="font-bold text-pink-400 text-base">
                    Brand
                  </span>{" "}
                  : {Brand}
                </h2>
                <h2 class="">
                  <span className="font-bold text-pink-400 text-base">
                    Stock
                  </span>{" "}
                  : {stock}
                </h2>
              </div>
            </div>

            {/* <div class="stats bg-primary text-primary-content">
  <h2>{name}</h2>
  <div class="stat">
    <div class="stat-title">Account balance</div>
    <div class="stat-value">$89,400</div>
    <div class="stat-title">Account balance</div>
    <div class="stat-value">$89,400</div>
   
  </div>
  
  <div class="stat">
    <div class="stat-title">Current balance</div>
    <div class="stat-value">$89,400</div>
   
  </div>
  
</div> */}

            <p>
              <span className="font-bold text-pink-400 text-base">
                Product-info
              </span>{" "}
              : {Description}
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row justify-center items-center">
                <div class="form-control w-48 max-w-xs">
                  <input
                    type="text"
                    placeholder="Type here new stock"
                    class="input input-bordered w-full max-w-xs"
                    {...register("orderQuantity")}
                  />
                </div>
                <input
                  class="btn btn-outline ml-2"
                  type="submit"
                  value="STOCK ADD"
                />
              </div>
            </form>

            <label
              for="toolsOrder"
              onClick={() => setOrder(product)}
              class="btn modal-button mt-4 btn-success text-white text-2xl"
            >
              PLACE ORDER
            </label>
          </div>
          <div>
            {order && (
              <ConfirmOrder
                order={order}
                product={product}
                setOrder={setOrder}
              ></ConfirmOrder>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
