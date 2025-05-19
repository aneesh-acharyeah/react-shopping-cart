// ProductList.js

import { useState } from "react";
import products from "../data/products";

const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            {
                products.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>₹{product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product)}>addToCart</button>
                    </div>
                ))
            }
        </div>
    )
}
export default ProductList;