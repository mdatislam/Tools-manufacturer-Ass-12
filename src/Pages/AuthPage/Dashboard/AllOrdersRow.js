import React from 'react';

const AllOrdersRow = ({index1,singleOrder}) => {
    const {customerName,index,OrderedProduct,orderQuantity}= singleOrder
    return (
        
             <tr class="hover border-collapse">
        <th>{index1+1}</th>
        <td>{customerName}</td>
        <td>{OrderedProduct}</td>
        <td>{orderQuantity}</td>
        <td>Unpaid</td>
        </tr>
        
    );
};

export default AllOrdersRow;