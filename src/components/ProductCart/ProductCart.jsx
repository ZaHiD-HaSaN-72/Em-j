
import { addToDatabase, getShoppingCart, setShoppingCart } from "../../utils/localStorageManage";

const ProductCart = ({ product, index , handleSubmit}) => {
    const { img, seller, name, ratings, price } = product;
 
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
             
                    <figure><img src={img} alt="Shoes" className=" h-[300px] pt-4" /></figure> 
                     
            
            
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} </p>

                <button onClick={ () => handleSubmit(product )  } className="btn bg-yellow-200  w-full">Add to Cart</button>

            </div>
        </div>
    );
};

export default ProductCart;