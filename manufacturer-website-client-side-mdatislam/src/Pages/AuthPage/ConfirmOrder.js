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

  const [isDisabled, setDisabled] = useState(false);
  // const [putOrder,setPutOrder] = useState( null)
  const url = `https://still-spire-24654.herokuapp.com/products/${_id}`;
  const handleChange = (e) => {
    const target = e.target.value;
    const min = parseInt(minimuOrderQuantity);
    const max = parseInt(stock);
    // const target=putOrder
    console.log(target, min, max);
    if (min > target || target > max) {
      setDisabled(true);
    }
    // setPutOrder(target)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mobile = event.target.mobile.value;
    const address = event.target.address.value;
    const orderQuantity = event.target.order.value;

    console.log(orderQuantity, stock, minimuOrderQuantity);

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

    fetch("https://still-spire-24654.herokuapp.com/order", {
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
        event.target.reset();
      });
    /*  } else  {
      
      setDisabled(true)
      event.target.reset()
    } */
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
                  onBlur={handleChange}
                  name="order"
                  placeholder="Type here order quantity"
                  class="input input-bordered w-full max-w-xs mb-2"
                />
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                class="btn btn-success text-white font-bold  w-full max-w-xs mb-2 uppercase"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
