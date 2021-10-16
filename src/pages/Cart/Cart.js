import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    console.log(cart)

    let totalPrice = 0;

    for (const item of cart) {

        if (!item.quantity) {
            item.quantity = 1
        }
        const total = totalPrice + item.price;
        totalPrice = total * item.quantity
    }

    const tax = totalPrice * 0.05;
    const deliveryFee = totalPrice * 0.02;
    const grandTotal = totalPrice + tax + deliveryFee;

    return (
        <div>
            <h5>ordered meals: {cart.length}</h5>
            <p>price: {totalPrice.toFixed(2)}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>deliveryFee: {deliveryFee.toFixed(2)}</p>
            <h4>Total {grandTotal.toFixed(2)}</h4>

            <div>
                {
                    cart.map(order => <div
                        key={order.menuId}
                    >
                        <img className="cart-thumb" src={order.menuThumb} alt="" />
                        <p>{order.menuTitle}</p>
                        <p>price: {totalPrice.toFixed(2)}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;