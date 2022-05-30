import React, { useEffect } from "react";
import { useState } from "react";

import { useQuery } from "react-query";

import Loading from "../../CommonPage/Loading";
import AllOrdersRow from "./AllOrdersRow";
// import AllOrdersRow from "./AllOrdersRow";

const AllOrders = () => {
  /* const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://still-spire-24654.herokuapp.com/orders")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAllOrders(result);
      });
  }, []);
 */
  const {
    isLoading,
    data: allOrders,
    refetch,
  } = useQuery("AllOrderList", () =>
    fetch(`https://still-spire-24654.herokuapp.com/orders`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="text-blue-600 text-xl text-center mb-2">
        {" "}
        Total order found: {allOrders.length}
      </h3>
      <div class="overflow-x-auto container mx-auto px-4 w-full">
        <table class="table w-full table-compact container  px-6 mx-auto">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Order Quantity</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((singleOrder, index) => (
              <AllOrdersRow
                key={singleOrder._id}
                index1={index}
                singleOrder={singleOrder}
              ></AllOrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
