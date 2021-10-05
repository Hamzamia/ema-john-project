import React from 'react';
import './product.css'

const Product = (props) => {
    // console.log(props.product)
    const { name, img, price, stock, seller } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>

            </div>
        </div>
    );
};

export default Product;