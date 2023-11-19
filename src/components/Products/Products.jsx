import { useEffect } from "react";
import { useState } from "react";
import ProductCart from "../ProductCart/ProductCart";
import { addToDatabase } from "../../utils/localStorageManage";

const Products = ({ allproducts, handleSubmit  }) => {
    
 
    return (
        <div>  
            <h1 className="text-4xl font-semibold  py-4 text-center  ">All Products</h1>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 w-10/12 mx-auto">
                {
                    allproducts?.map((product, index) => <ProductCart key={product.id} product={product} index={index} handleSubmit={handleSubmit} />)
                }
            </div>
        </div>
    );
};

export default Products;