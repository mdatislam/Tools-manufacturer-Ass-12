import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "./../../firebase.init";
import { useState } from "react";

const ConfirmOrder = ({ product, setOrder }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, stock, minimuOrderQuantity } = product;
  /* const {id} = useParams; 
    const [product,setProduct]= useState([]) */
  const url = `http://https://still-spire-24654.herokuapp.com/products/${_id}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const mobile = event.target.mobile.value;
    const address = event.target.address.value;
    const orderQuantity = event.target.order.value;

    // console.log(orderQuantity, stock,minimuOrderQuantity)

    if (orderQuantity > minimuOrderQuantity && orderQuantity < stock) {
      const order = {
        transactionId: _id,
        customerName: user.displayName,
        customerEmail: user.email,
        OrderedProduct: name,
        mobile: mobile,
        orderQuantity: orderQuantity,
        address: address,
      };
      // to update the data

      fetch("http://https://still-spire-24654.herokuapp.com/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            toast("Order Place Successfully");
          } else {
            toast.error(" Something Wrong");
          }
        });
      setOrder(null);
      // to update new stock
      const newStock = parseInt(stock) - orderQuantity;
      console.log(newStock, url);
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newStock }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          //   setProduct(result);
        });
    } else {
      toast.error(
        `Order quantity must be within ${stock} and ${minimuOrderQuantity}`
      );
    }
  };

  return (
    <div>
      <input type="checkbox" id="toolsOrder" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="toolsOrder"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-center mb-5 ">
            {" "}
            <span className="text-pink-600">Order Confirm for :</span>{" "}
            <span className="text-primary">{name}</span>
          </h3>

          <form onSubmit={handleSubmit}>
            <div class="form-control w-full max-w-xs mx-auto">
              <input
                type="text"
                value={user.displayName}
                disabled
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <input
                type="email"
                value={user.email}
                disabled
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <input
                type="text"
                placeholder="type here your Mobile no"
                required
                name="mobile"
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <input
                type="text"
                placeholder="type here your address"
                name="address"
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <div>
                <label class="label">
                  <span class="label-text">
                    <span className="text-pink-500 ">Condition: </span>Order
                    must be within {stock} and {minimuOrderQuantity}{" "}
                  </span>
                </label>
                <input
                  type="number"
                  required
                  name="order"
                  placeholder="Type here order quantity"
                  class="input input-bordered w-full max-w-xs mb-2"
                />
              </div>

              <button
                type="submit"
                class="btn btn-success text-white font-bold  w-full max-w-xs mb-2"
              >
                PLACE ORDER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
