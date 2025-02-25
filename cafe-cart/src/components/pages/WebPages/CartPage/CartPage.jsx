import React from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const CartPage =({}) => {

    const {cart} = useOutletContext();

    return(
        <>
        <h1>
            This is the temporary Dashboard Cart Page! 
        </h1>
        {cart.map((item, index) => (
            <div key={`${item.name}-${index}`}>{item.quantity}x {item.size} {item.name} - {item.price}</div>
        ))}
        </>
    )
}

export default CartPage;