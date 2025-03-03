import React from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { useGlobalProvider } from "../../../../context/ContextProvider";
import * as styled from "./CartPage.styles";
import CartItem from "../../../organisms/CartItem/CartItem";

const CartPage =({}) => {

    const {cart} = useOutletContext();
    console.log(cart)
    return(
        <styled.CartPageWrapper>
            <styled.CartListHeader>
                Your Orders:
            </styled.CartListHeader>
            <styled.CartListContainer>
                {cart.map((item, index) => (
                    <CartItem 
                        key={`${item.name}-${index}`}
                        itemImage={item.thumbnail}
                        itemQuantity={item.quantity}
                        itemSize={item.size}
                        itemName={item.name}
                        itemPrice={item.price}
                        dataIndex={index}
                    />
                ))}
            </styled.CartListContainer>
            <styled.CheckoutInformationContainer>
                <div>This is temporary Checkout Informations container</div>
            </styled.CheckoutInformationContainer>                        
        </styled.CartPageWrapper>
    )
}

export default CartPage;