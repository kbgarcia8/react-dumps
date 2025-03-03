import React from "react";
import PropTypes from "prop-types";
import  * as styled from "./CartItem.styles";
import { data } from "react-router-dom";

const CartItem = ({
    itemImage,
    itemQuantity,
    itemSize,
    itemName,
    itemPrice,
    dataIndex,
    className
}) => {

    return(
        <styled.CartItemWrapper className={className}>
            <styled.CartImageContainer>
                <styled.CartItemImage src={itemImage} alt={`${itemName}-${itemQuantity}-${itemSize}`}/>
            </styled.CartImageContainer>            
            <styled.CartItemDetails>{itemSize} {itemName} - {itemPrice}</styled.CartItemDetails>
            <styled.CartItemStepper count={itemQuantity} dataIndex={dataIndex}/>
        </styled.CartItemWrapper>
    )
}

export default CartItem;