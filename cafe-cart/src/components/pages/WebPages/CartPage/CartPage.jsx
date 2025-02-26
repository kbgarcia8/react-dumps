import React from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { useGlobalProvider } from "../../../../context/ContextProvider";
import * as styled from "./CartPage.styles";

const CartPage =({}) => {

    const {cart} = useOutletContext();
    const {database} = useGlobalProvider();

    return(
        <styled.CartPageWrapper>
            <h1>
                This is the temporary Dashboard Cart Page! 
            </h1>
            <styled.CartListContainer>
                {cart.map((item, index) => (
                    <div key={`${item.name}-${index}`}>
                        <img src={`${item.thumbnail}`} alt={`${item.name}-cart-thumbnail`} />
                        <span>{item.quantity}x {item.size} {item.name} - {item.price}</span>
                    </div>
                ))}
            </styled.CartListContainer>
            <styled.CheckoutInformationContainer>
                <div>This is temporary Checkout Informations container</div>
            </styled.CheckoutInformationContainer>                        
        </styled.CartPageWrapper>
    )
}

export default CartPage;