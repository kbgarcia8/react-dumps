import React from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { useGlobalProvider } from "../../../../context/ContextProvider";
import * as styled from "./CartPage.styles";
import CartItem from "../../../organisms/CartItem/CartItem";

const CartPage =({}) => {

    const {state} = useOutletContext();
    console.log(state)
    return(
        <styled.CartPageWrapper>
            <styled.CartListHeaderSpace>
                <styled.OrderQuantityHeader>Your Orders:</styled.OrderQuantityHeader>
                {state.length !== 0 && <styled.ItemQuantity>{`${state.length} items`}</styled.ItemQuantity>}
                <styled.ClearCartButton text={"Clear Cart"}/>
            </styled.CartListHeaderSpace>
            <styled.CartItemsHeaderSpace>
                <styled.CartListHeader $width={"50%"}>{"Item Details"}</styled.CartListHeader>
                <styled.CartListHeader $width={"15%"}>{"Item Price"}</styled.CartListHeader>
                <styled.CartListHeader $width={"20%"}>{"Item Quantity"}</styled.CartListHeader>
                <styled.CartListHeader $width={"15%"}>{"Item Total Price"}</styled.CartListHeader>
            </styled.CartItemsHeaderSpace>
            <styled.CartListContainer>
                {state.map((item, index) => (
                    <CartItem 
                        key={`${item.name}-${index}`}
                        itemImage={item.thumbnail}
                        itemQuantity={item.quantity}
                        itemSize={item.size}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemTotal={item.total}
                        dataIndex={index}
                        dataQuantity={item.quantity}
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