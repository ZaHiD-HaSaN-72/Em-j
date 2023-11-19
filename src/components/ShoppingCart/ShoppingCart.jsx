import { useEffect, useState } from "react";
import { getShoppingCart } from "../../utils/localStorageManage";

const ShoppingCart = ({cart}) => { 
 
    console.log(cart);
    let totalQuantity = 0;
    let totalPrice = 0;
    let shippingCost = 0;
    for(let singleProduct of cart){
        totalQuantity += Number(singleProduct?.quantity);
        totalPrice += Number(singleProduct?.price ) * Number(singleProduct?.quantity);
        shippingCost += Number(singleProduct?.shipping   )  ;
    }

    const tax = (totalPrice * 7) / 100
 
    return (
        <div>

            <div className="bg-blue-100 p-4">
            <h1 className="text-xl lg:text-4xl font-semibold">Order Summary </h1>
            <h1 className="text-2xl mt-4">Product item selected : {totalQuantity} </h1>
             
            <h1 className="text-2xl mt-4">Total Price : {totalPrice} </h1>
            <h1 className="text-2xl mt-4">Shipping Cost : {shippingCost} </h1>
            <h1 className="text-2xl mt-4">Tax : {tax} </h1>
            <h1 className="text-2xl mt-4">Grand Total : {totalPrice + shippingCost +  tax} </h1>
            </div>
           
           
        </div>
    );
};

export default ShoppingCart;