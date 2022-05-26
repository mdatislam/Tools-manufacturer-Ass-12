import React from 'react';

const OrderRow = ({order,refetch,index}) => {
    const {customerName,OrderedProduct,orderQuantity}= order
    // refetch()
    return (
        <tr class="hover">
        <th>{index+1}</th>
        <td>{customerName}</td>
        <td>{OrderedProduct}</td>
        <td>{orderQuantity}</td>
        <td>Unpaid</td>
        <td><button class="btn btn-xs btn-error">Cancel</button></td>
       
      </tr>
     
    );
};

export default OrderRow;