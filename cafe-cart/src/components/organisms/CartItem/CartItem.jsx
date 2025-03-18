import React from "react";
import PropTypes from "prop-types";
import  * as styled from "./CartItem.styles";
import { useOutletContext } from "react-router-dom";
import DeleteIcon from "../../atoms/SVG/DeleteIcon";

const CartItem = ({
    itemImage,
    itemQuantity,
    itemSize,
    itemName,
    itemPrice,
    itemTotal,
    dataIndex,
    dataQuantity,
    className
}) => {

    const {incrementItem,decrementItem,removeFromCart} = useOutletContext();

    return(
        <styled.CartItemWrapper className={className}>
            <styled.ItemDetailsContainer>
                <styled.CartImageContainer>
                    <styled.CartItemImage src={itemImage} alt={`${itemName}-${itemQuantity}-${itemSize}`}/>
                </styled.CartImageContainer>
                <styled.CartItemName>{itemSize} {itemName}</styled.CartItemName>
            </styled.ItemDetailsContainer>
            <styled.CartItemPrice>{itemPrice}</styled.CartItemPrice>
            <styled.StepperContainer>
                <styled.CartItemStepper
                    stepperState={itemQuantity}
                    increment={incrementItem}
                    incrementButtonText={"+"}
                    decrement={decrementItem}
                    decrementButtonText={"-"}
                    dataAttributes={{
                        "data-index": dataIndex,
                        "data-quantity": dataQuantity
                    }}
                />
            </styled.StepperContainer>            
            <styled.CartItemTotal>{itemTotal}</styled.CartItemTotal>
            <styled.RemoveItemButtonSpace>
                <styled.RemoveItemButton svg={<DeleteIcon/>} dataAttributes={{"data-index": dataIndex}} onClick={removeFromCart}/>
            </styled.RemoveItemButtonSpace>
        </styled.CartItemWrapper>
    )
}

export default CartItem;