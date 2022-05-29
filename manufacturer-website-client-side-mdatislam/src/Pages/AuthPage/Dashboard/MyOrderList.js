import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../CommonPage/Loading";
import OrderRow from "./OrderRow";

const MyOrderList = () => {
  const [user] = useAuthState(auth);

  /*   const [orderList, setOrderList]=useState([])
    useEffect(()=>{
        fetch(`https://still-spire-24654.herokuapp.com/order/${user.email}`)
        .then(res=>res.json())
        .then(result=> {
            console.log(result)
            setOrderList(result)
        })
    },[])  */

  const {
    isLoading,
    data: orderList,
    refetch,
  } = useQuery("orderList", () =>
    fetch(`https://still-spire-24654.herokuapp.com/orders/${user?.email}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="text-blue-600 text-xl text-center mb-2">
        {" "}
        Total order found: {orderList.length}
      </h3>
      <div class="overflow-x-auto container mx-auto px-4 w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Order Quantity</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, index) => (
              <OrderRow
                key={order.id}
                refetch={refetch}
                order={order}
                index={index}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderList;
