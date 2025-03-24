import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import * as styled from "./PendingPage.styles";
import thinkingGIF from "../../../../assets/thinking.gif";
import cookingGIF from "../../../../assets/cooking.gif";
import deliveryGIF from "../../../../assets/delivery.gif";
import orderupGIF from "../../../../assets/orderup.gif";

const PendingPage =({}) => {

    const [isPending, setIsPending] = useState(true);
    //tempoarary useEffect to simulate a pending state after 5 seconds
    useEffect(() => {
        setTimeout(() => {
            setIsPending(false);
        }, 5000);
        clearTimeout();
    },[]);
    
    const { checkoutDetails } = useOutletContext();
    console.dir(checkoutDetails, { depth: null });
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
                            ? "Your order is being processed"
                            : "Your order is ready for pickup"}
                    </styled.PendingMessage>
                </styled.PendingMessageContainer>
            </styled.PendingPageAestheticsContainer>
            <styled.CurrentOrderContainer>
                <styled.CurrentOrderHeader>{"Current Order Summary"}</styled.CurrentOrderHeader>
                <styled.CurrentOrderItemListing>
                    <styled.ItemList>
                    {Object.keys(checkoutDetails).length === 0 
                        ? 
                        <>Nothing here yet, once you checked out your order will appear here!</>
                        : (checkoutDetails['cart'].map((item, index) => (
                            <styled.Item key={`${item.name}-${index}`} listText={`${item.name} - ${item.quantity} - ${item.size}`} />
                        )))
                    }
                    </styled.ItemList>
                </styled.CurrentOrderItemListing>
            </styled.CurrentOrderContainer>
        </styled.PendingPageWrapper>
    )
}

export default PendingPage;