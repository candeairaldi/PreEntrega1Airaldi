import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <Link to="/cart">
      <div className="cart-widget">
            <FaShoppingCart color="white" size={25} />
            <span className="cart-count">({totalQuantity})</span>
      </div>
    </Link>
    );
};
