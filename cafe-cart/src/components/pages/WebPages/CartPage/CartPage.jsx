import React from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { useGlobalProvider } from "../../../../context/ContextProvider";
import * as styled from "./CartPage.styles";
import CartItem from "../../../organisms/CartItem/CartItem";
import GenericForm from "../../../molecules/Form";

const CartPage =({}) => {

    const {
        state, 
        clearCart, 
        transactionType,
        nextTransactionType,
        prevTransactionType,
        subtotal, 
        paymentFieldSet,
        handleAddressBankChange
    } = useOutletContext();
    {/*console.dir(paymentFieldSet, { depth: null });*/}
    return(
        <styled.CartPageWrapper>
            <styled.CartListHeaderSpace>
                <styled.OrderQuantityHeader>Your Orders:</styled.OrderQuantityHeader>                
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
                <styled.CartTotalInfo $width={"33%"}>{"Total Items:"}</styled.CartTotalInfo>
                <styled.CartTotalInfo $width={"33%"}>{"Transaction Type:"}</styled.CartTotalInfo>
                <styled.CartTotalInfo $width={"33%"}>{"Subtotal:"}</styled.CartTotalInfo>
                {state.length !== 0 ? <styled.CartTotalInfo $width={"33%"}>{`${state.length} items`}</styled.CartTotalInfo> : <styled.CartTotalInfo $width={"33%"}>{'0 items'}</styled.CartTotalInfo>}
                <styled.CartTotalInfo $width={"33%"}>
                    <styled.TransactionTypeStepper
                        stepperState={transactionType}
                        increment={nextTransactionType}
                        incrementButtonText={">"}
                        decrement={prevTransactionType}
                        decrementButtonText={"<"}
                    />
                </styled.CartTotalInfo>
                <styled.CartTotalInfo $width={"33%"}>{subtotal}</styled.CartTotalInfo>
            </styled.CartTotalSpace>
            <styled.CheckoutInformationContainer>
                <styled.CheckoutForm 
                        fieldsets={paymentFieldSet}
                        labelClassName={"payment-label"}
                        hasSubmit={true}
                        submitText={"Checkout"}
                        id={"checkout"}
                        editableOnChange={handleAddressBankChange}
                />
            </styled.CheckoutInformationContainer>                        
        </styled.CartPageWrapper>
    )
}

export default CartPage;