import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Cart.css'

const Cart = () => {

    const [cart] = useAuth();



    const totalPrice = cart.reduce((previous, food) => (previous + food.price) * food.quantity, 0);

    const totalQuantity = cart.reduce((previous, food) => previous + food.quantity, 0)

    const tax = totalPrice * 0.05;
    const grandTotal = totalPrice + tax;

    return (
        <div>
            <div>
                {
                    cart.map(order => <div
                        key={order.menuId}
                    >
                        <div className="d-flex order-food align-items-center">
                            <div className="cart-thumb">
                                <img src={order.menuThumb} alt="" />
                            </div>
                            <div className="cart-details">
                                <h6>{order.menuTitle}</h6>
                                <span>${(order.quantity * order.price).toFixed(2)}</span>
                                <p>delivery free</p>
                            </div>
                            <p className="cart-quantity">{order.quantity}</p>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <h5>ordered meals: {totalQuantity}</h5>
                <p>price: {totalPrice.toFixed(2)}</p>
                <p>tax: {tax.toFixed(2)}</p>
                <p>deliveryFee: 0.00</p>
                <h4>Total {grandTotal.toFixed(2)}</h4>
            </div>

        </div>
    );
};

export default Cart;