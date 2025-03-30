import React from "react";
import PropTypes from "prop-types";
import shopLogo from "../../../../assets/pic-only-logo.png"
import GenericButton from "../../../atoms/Button/Button";
import * as styled from "./OrderHistoryPage.styles"
import { useOutletContext } from "react-router-dom";

const emptyHisory = () => (
    <styled.EmptyOrderHistoryMessageContainer>
        <styled.EmptyOrderHistoryMessage>{"Looks like you haven't ordered from us yet.\nOnce you've completed an order it will appear here so you can order again anytime!"}</styled.EmptyOrderHistoryMessage>
    </styled.EmptyOrderHistoryMessageContainer>
)

const orderHistoryButtons = () => (
    <styled.OrderHistoryButtonSpace>
        <GenericButton text={"Delete"}/>
        <GenericButton text={"Order Again"}/>
    </styled.OrderHistoryButtonSpace>
)

const OrderHistoryPage =({}) => {

    const {orderHistory} = useOutletContext();    

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
                            children={orderHistoryButtons()}
                        />
                    </styled.OrderHistoryCardSpace>
                    )
                )
            }
        </styled.OrderHistoryPageWrapper>
    )
}

export default OrderHistoryPage;