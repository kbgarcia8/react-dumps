import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import * as styled from "./PendingPage.styles";
import thinkingGIF from "../../../../assets/thinking.gif";
import cookingGIF from "../../../../assets/cooking.gif";
import deliveryGIF from "../../../../assets/delivery.gif";
import orderupGIF from "../../../../assets/orderup.gif";

const PendingPage =({}) => {

    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        
    },[]);

    const { checkoutDetails } = useOutletContext();
    return(
        <styled.PendingPageWrapper>
            <styled.PendingPageAestheticsContainer>
                <styled.PendingPageGIFContainer>
                    <styled.PendingPageGIF src={Object.keys(checkoutDetails).length === 0 ? thinkingGIF : isPending ? cookingGIF : checkoutDetails.transactionType === "Delivery" ? deliveryGIF : orderupGIF}/>
                </styled.PendingPageGIFContainer>
                <styled.PendingMessageContainer>
                    <styled.PendingMessage>
                        {Object.keys(checkoutDetails).length === 0
                         ? "It looks like you're still thinking of what to order. Go to Menu to start ordering now!"
                         : isPending
                            ? "Your order is being processed"
                            : "Your order is ready for pickup"}
                    </styled.PendingMessage>
                </styled.PendingMessageContainer>
            </styled.PendingPageAestheticsContainer>
            <styled.CurrentOrderContainer>
                
            </styled.CurrentOrderContainer>
        </styled.PendingPageWrapper>
    )
}

export default PendingPage;