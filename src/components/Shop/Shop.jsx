import { useEffect, useState } from "react";
import Products from "../Products/Products";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { addToDatabase, getShoppingCart } from "../../utils/localStorageManage";

const Shop = () => {
    const [allproducts, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    useEffect(() => {
        let getlocalStorageData = getShoppingCart('ShoppingCart');

        const newCart = []

        for (let singleProductId in getlocalStorageData) {

            const matchData = allproducts?.find(product => product.id === singleProductId)

            if (matchData) {
                matchData.quantity = getlocalStorageData[singleProductId]
            }

            newCart.push(matchData);
        }

        setCart(newCart);

    }, [allproducts?.length]);



    const handleSubmit = (product) => {
        addToDatabase(product.id);

        const selectItem = cart.find(item => item.id === product.id);
        if (selectItem) {
            selectItem.quantity += 1;

            const reaminingItems = cart.filter(item => item.id !== product.id);

            const newCart = [...reaminingItems, selectItem]
            setCart(newCart)
        }
        else {
            product.quantity = 1;
            const newCart = [...cart, product]
            setCart(newCart)
        }
    }
    return (
        <div className="grid grid-cols-2  lg:grid-cols-4  ">
            <div className=" selection:  lg:col-span-3">
                <Products allproducts={allproducts} handleSubmit={handleSubmit} />
            </div>
            <div className="relative">
                <div className="sticky top-[92px]">
                    <ShoppingCart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;