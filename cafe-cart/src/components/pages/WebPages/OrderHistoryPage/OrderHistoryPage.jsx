import React from "react";
import shopLogo from "../../../../assets/pic-only-logo.png"
import GenericButton from "../../../atoms/Button/index.js";
import * as styled from "./OrderHistoryPage.styles.js"
import { useOutletContext } from "react-router-dom";

const emptyHisory = () => (
    <styled.EmptyOrderHistoryMessageContainer>
        <styled.EmptyOrderHistoryMessage>{"Looks like you haven't ordered from us yet.\nOnce you've completed an order it will appear here so you can order again anytime!"}</styled.EmptyOrderHistoryMessage>
    </styled.EmptyOrderHistoryMessageContainer>
)

const orderHistoryButtons = (history, index, deleteOrderHistoryEntry, orderAgain) => (
    <styled.OrderHistoryButtonSpace>
        <GenericButton onClick={deleteOrderHistoryEntry} text={"Delete"} id={`delete-order-history-${history.dateAndTime}}`} dataAttributes={{"data-index": index}} />
        <GenericButton onClick={orderAgain} id={`order-again-history-${history.dateAndTime}}`} text={"Order Again"} dataAttributes={{"data-index": index}}/>
    </styled.OrderHistoryButtonSpace>
)

const OrderHistoryPage =({}) => {

    const {orderHistory, deleteOrderHistoryEntry, orderAgain} = useOutletContext();    

    return(
        <styled.OrderHistoryPageWrapper>
            
            {orderHistory.length === 0
                ?   emptyHisory()
                :   orderHistory.map((history, index) => (
                    <styled.OrderHistoryCardSpace key={`${history.dateAndTime}-${index}`}>
                        <styled.SummaryEntry                            
                            shopLogo={shopLogo}
                            shopName={"Kain at Kape"}
                            shopAddress={"Unit 3B, Sunshine Apartments\n1234 Mabini Street, Barangay Poblacion\nMakati City, Metro Manila\n1226, Philippines"}
                            dateAndTime={`${history.dateAndTime}`}
                            receiptHeader={"Order Summary"}
                            receiptDetails={history}
                            children={orderHistoryButtons(history, index, deleteOrderHistoryEntry, orderAgain)}
                        />
                    </styled.OrderHistoryCardSpace>
                    )
                )
            }
        </styled.OrderHistoryPageWrapper>
    )
}

export default OrderHistoryPage;