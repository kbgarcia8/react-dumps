import React from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import * as styled from "./CartPage.styles.js";
import CartItem from "../../../organisms/CartItem/index.js";

const CartPage =({}) => {

    const {
        state, 
        clearCart,
        checkout, 
        transactionType,
        nextTransactionType,
        prevTransactionType,
        subtotal, 
        paymentFieldSet,
        handleAddressBankChange,
        addAddressEntry
    } = useOutletContext();
    console.dir(state, { depth: null });
    return(
        <styled.CartPageWrapper>
            <styled.CartListHeaderSpace>
                <styled.OrderQuantityHeader>{"Your Cart:"}</styled.OrderQuantityHeader>                
                <styled.ClearCartButton text={"Clear Cart"} onClick={clearCart}/>
            </styled.CartListHeaderSpace>
            <styled.CartItemsHeaderSpace>
                <styled.CartListHeader $width={"50%"}>{"Item Details"}</styled.CartListHeader>
                <styled.CartListHeader $width={"10%"}>{"Item Price"}</styled.CartListHeader>
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
            <styled.CartTotalSpace>
                <styled.CartTotalInfoHeader $width={"30%"}>{"Total Items:"}</styled.CartTotalInfoHeader>
                <styled.CartTotalInfoHeader $width={"30%"}>{"Transaction Type:"}</styled.CartTotalInfoHeader>
                <styled.CartTotalInfoHeader $width={"30%"}>{"Subtotal:"}</styled.CartTotalInfoHeader>
                {state.length !== 0 ? <styled.CartTotalInfo $width={"30%"}>{`${state.length} items`}</styled.CartTotalInfo> : <styled.CartTotalInfo $width={"30%"}>{'0 items'}</styled.CartTotalInfo>}
                <styled.CartTotalInfo $width={"30%"}>
                    <styled.TransactionTypeStepper
                        stepperState={transactionType}
                        increment={nextTransactionType}
                        incrementButtonText={">"}
                        decrement={prevTransactionType}
                        decrementButtonText={"<"}
                    />
                </styled.CartTotalInfo>
                <styled.CartTotalInfo $width={"30%"}>{subtotal}</styled.CartTotalInfo>
            </styled.CartTotalSpace>
            <styled.CheckoutInformationContainer>
                <styled.CheckoutForm 
                        fieldsets={paymentFieldSet}
                        labelClassName={"payment-label"}
                        hasSubmit={true}
                        submitText={"Checkout"}
                        id={"checkout"}
                        handleEditableInputEntryChange={handleAddressBankChange}
                        handleAddingInputEntry={addAddressEntry}
                        handleSubmit={checkout}
                />
            </styled.CheckoutInformationContainer>                        
        </styled.CartPageWrapper>
    )
}

export default CartPage;