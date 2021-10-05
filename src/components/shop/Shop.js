import React, { useEffect, useState } from 'react';
import Product from '../products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Products: {products.length}</h2>
                {
                    products.map(product => <Product
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summery</h3>
                <h5>Item Order: {cart.length}</h5>
            </div>

        </div>
    );
};

export default Shop;