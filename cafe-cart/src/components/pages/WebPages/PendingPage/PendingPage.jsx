import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import * as styled from "./PendingPage.styles";
import thinkingGIF from "../../../../assets/thinking.gif";
import cookingGIF from "../../../../assets/cooking.gif";
import deliveryGIF from "../../../../assets/delivery.gif";
import orderupGIF from "../../../../assets/orderup.gif";

const PendingPage =({}) => {

    const { checkoutDetails, isPending } = useOutletContext();
    //console.dir(checkoutDetails, { depth: null });
    
    return(
        <styled.PendingPageWrapper>
            <styled.PendingPageAestheticsContainer>
                <styled.PendingPageGIFContainer>
                    <styled.PendingPageGIF src={Object.keys(checkoutDetails).length === 0 ? thinkingGIF : isPending ? cookingGIF : checkoutDetails.transactionType === "Delivery" ? deliveryGIF : orderupGIF}/>
                </styled.PendingPageGIFContainer>
                <styled.PendingMessageContainer>
                    <styled.PendingMessage>
                        {Object.keys(checkoutDetails).length === 0
                         ? 
                         <>
                            It looks like you're still thinking of what to order. Go to <styled.StyledLink  to={`../menu`}>{"Menu"}</styled.StyledLink> to start ordering now!
                         </>
                         : isPending
                            ? "Your order is being prepared"
                            : checkoutDetails.transactionType === "Delivery" 
                                ? "Your order is on its way" 
                                : "Your order is ready for pickup"}
                    </styled.PendingMessage>
                </styled.PendingMessageContainer>
            </styled.PendingPageAestheticsContainer>
            <styled.CurrentOrderContainer>
                <styled.OrderSummaryLogoSpace>
                    <styled.OrderSummaryLogo src={"/src/assets/pic-only-logo.png"} alt="logo" />
                    <styled.OrderSummaryHeaderSpan>{"Kain at Kape"}</styled.OrderSummaryHeaderSpan>
                    <styled.OrderSummaryHeaderSpan>{"Unit 3B, Sunshine Apartments\n1234 Mabini Street, Barangay Poblacion\nMakati City, Metro Manila\n1226, Philippines"}</styled.OrderSummaryHeaderSpan>
                    <styled.OrderSummaryHeaderSpan>{checkoutDetails.dateAndTime === undefined ? "--- -- ---- --:--" : `${checkoutDetails.dateAndTime}`}</styled.OrderSummaryHeaderSpan>
                </styled.OrderSummaryLogoSpace>
                <styled.CurrentOrderHeader>{"Current Order Summary"}</styled.CurrentOrderHeader>
                <styled.CurrentOrderItemListing>
                    <styled.ItemList>
                    {Object.keys(checkoutDetails).length === 0 
                        ? 
                        (<styled.Item>
                            <styled.NoItemMessage>
                                Nothing here yet, once you checked out your order will appear here!
                            </styled.NoItemMessage>
                        </styled.Item>)
                        : (
                            checkoutDetails['cart'].map((item, index) => (
                                <styled.Item 
                                    key={`${item.name}-${index}`}                                      
                                >
                                {`${item.quantity}x ${item.size} ${item.name} - ${item.total}`}
                                </styled.Item>
                            ))
                        )
                    }
                    </styled.ItemList>                    
                </styled.CurrentOrderItemListing>
                <styled.CheckoutTotalDetails>
                        <styled.CheckoutTotalDetailsSpan>
                            <styled.CheckoutTotalDetailsSpanMarker>{"Subtotal: "}</styled.CheckoutTotalDetailsSpanMarker>
                            {`${Object.keys(checkoutDetails).length === 0 ? "       0" : `      ${checkoutDetails.subtotal}`}`}
                        </styled.CheckoutTotalDetailsSpan>
                        <styled.CheckoutTotalDetailsSpan>
                            <styled.CheckoutTotalDetailsSpanMarker>{"Transaction Type: "}</styled.CheckoutTotalDetailsSpanMarker>
                            {`${Object.keys(checkoutDetails).length === 0 ? "" : `      ${checkoutDetails.transactionType}`}`}
                        </styled.CheckoutTotalDetailsSpan>
                        {checkoutDetails.transactionType === "Delivery" && 
                            <styled.CheckoutTotalDetailsSpan>
                                <styled.CheckoutTotalDetailsSpanMarker>{"Delivery Address: "}</styled.CheckoutTotalDetailsSpanMarker>
                                {`      (${checkoutDetails.address['name']} - ${checkoutDetails.address['number']})   ${checkoutDetails.address['location']}`}
                            </styled.CheckoutTotalDetailsSpan>
                        }
                        <styled.CheckoutTotalDetailsSpan>
                            <styled.CheckoutTotalDetailsSpanMarker>{"Payment Method: "}</styled.CheckoutTotalDetailsSpanMarker>
                            {`${Object.keys(checkoutDetails).length === 0 ? "" : `      ${checkoutDetails.payment['name']}`}`}
                        </styled.CheckoutTotalDetailsSpan>
                </styled.CheckoutTotalDetails>
            </styled.CurrentOrderContainer>
        </styled.PendingPageWrapper>
    )
}

export default PendingPage;