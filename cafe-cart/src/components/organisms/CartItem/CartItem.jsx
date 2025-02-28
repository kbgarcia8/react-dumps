import React from "react";
import PropTypes from "prop-types";
import  * as styled from "./CartItem.styles";

const CartItem = ({
    itemImage,
    itemQuantity,
    itemSize,
    itemName,
    itemPrice
}) => {

    return(
        <styled.CartItemWrapper>
            <styled.CartImageContainer>
                <styled.CartItemImage src={itemImage} alt={`${itemName}-${itemQuantity}-${itemSize}`}/>
            </styled.CartImageContainer>            
            <styled.CartItemDetails>{itemQuantity}x {itemSize} {itemName} - {itemPrice}</styled.CartItemDetails>
        </styled.CartItemWrapper>
    )
}

export default CartItem;