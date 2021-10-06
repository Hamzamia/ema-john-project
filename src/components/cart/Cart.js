import React from 'react';
import('../cart.css');


const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantiy) {
            product.quantiy = 1;
        }
        total = total + product.price * product.quantiy;
        totalQuantity = totalQuantity + product.quantiy;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summery</h3>
            <h5>Item Order: {totalQuantity}</h5>
            <br />
            <p>Total: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand_total: {grandTotal}</p>

            <button className="btn-order">Order</button>
        </div>
    );
};

export default Cart;