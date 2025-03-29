import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import * as styled from "./PendingPage.styles";
import shopLogo from "../../../../assets/assets/pic-only-logo.png"
import thinkingGIF from "../../../../assets/thinking.gif";
import cookingGIF from "../../../../assets/cooking.gif";
import deliveryGIF from "../../../../assets/delivery.gif";
import orderupGIF from "../../../../assets/orderup.gif";
import OrderReceipt from "../../../molecules/OrderReceipt/OrderReceipt"

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
                <OrderReceipt
                    shopLogo={shopLogo}
                    shopName={"Kain at Kape"}
                    shopAddress={"Unit 3B, Sunshine Apartments\n1234 Mabini Street, Barangay Poblacion\nMakati City, Metro Manila\n1226, Philippines"}
                    dateAndTime={`${checkoutDetails.dateAndTime}`}
                    receiptDetails={checkoutDetails}
                />
            </styled.CurrentOrderContainer>
        </styled.PendingPageWrapper>
    )
}

export default PendingPage;