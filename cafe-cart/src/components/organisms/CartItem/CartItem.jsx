import React from "react";
import PropTypes from "prop-types";
import  * as styled from "./CartItem.styles";
import { useOutletContext } from "react-router-dom";

const CartItem = ({
    itemImage,
    itemQuantity,
    itemSize,
    itemName,
    itemPrice,
    dataIndex,
    dataQuantity,
    className
}) => {

    const {incrementItem,decrementItem} = useOutletContext();

    return(
        <styled.CartItemWrapper className={className}>
            <styled.CartImageContainer>
                <styled.CartItemImage src={itemImage} alt={`${itemName}-${itemQuantity}-${itemSize}`}/>
            </styled.CartImageContainer>            
            <styled.CartItemDetails>{itemSize} {itemName}</styled.CartItemDetails>
            <styled.CartItemPrice>{itemPrice}</styled.CartItemPrice>
            <styled.CartItemStepper count={itemQuantity} increment={incrementItem} decrement={decrementItem} dataIndex={dataIndex} dataQuantity={dataQuantity}/>
        </styled.CartItemWrapper>
    )
}

export default CartItem;