import React from "react";
import PropTypes from "prop-types";
import * as styled from "./OrderReceipt.styles.js"

const OrderReceipt = ({
    shopLogo, 
    shopName, 
    shopAddress, 
    dateAndTime, 
    receiptHeader,
    receiptDetails, //checkoutDetails
    className,
    children
}) => {
    return (
        <styled.OrderReceiptWrapper className={className}>
            <styled.OrderSummaryLogoSpace className={'logo-space'}>
                <styled.OrderSummaryLogo src={shopLogo} alt="logo" />
                <styled.OrderSummaryHeaderSpan className={"shop-details"}>{shopName}</styled.OrderSummaryHeaderSpan>
                <styled.OrderSummaryHeaderSpan className={"shop-details"}>{shopAddress}</styled.OrderSummaryHeaderSpan>
                <styled.OrderSummaryHeaderSpan className={"shop-details"}>{dateAndTime === undefined ? "--- -- ---- --:--" : `${dateAndTime}`}</styled.OrderSummaryHeaderSpan>
            </styled.OrderSummaryLogoSpace>
            <styled.CurrentOrderHeader className={'receipt-header'}>{receiptHeader}</styled.CurrentOrderHeader>
            <styled.CurrentOrderItemListing className={'receipt-order-list'}>
                <styled.ItemList>
                {Object.keys(receiptDetails).length === 0 
                    ? 
                    (<styled.Item className={'receipt-order-item'}>
                        <styled.NoItemMessage className={'no-item-message'}>
                            Nothing here yet, once you checked out your order will appear here!
                        </styled.NoItemMessage>
                    </styled.Item>)
                    : (
                        receiptDetails['cart'].map((item, index) => (
                            <styled.Item 
                                key={`${item.name}-${index}`}
                                className={'receipt-order-item'}                                
                            >
                            {`${item.quantity}x ${item.size} ${item.name} - ${item.total}`}
                            </styled.Item>
                        ))
                    )
                }
                </styled.ItemList>                    
            </styled.CurrentOrderItemListing>
            <styled.CheckoutTotalDetails className={'receipt-total-space'}>
                    <styled.CheckoutTotalDetailsSpan className={'receipt-total-span'}>
                        <styled.CheckoutTotalDetailsSpanMarker className={'receipt-total-marker'}>{"Subtotal: "}</styled.CheckoutTotalDetailsSpanMarker>
                        {`${Object.keys(receiptDetails).length === 0 ? "       0" : `      ${receiptDetails.subtotal}`}`}
                    </styled.CheckoutTotalDetailsSpan>
                    <styled.CheckoutTotalDetailsSpan className={'receipt-total-span'}>
                        <styled.CheckoutTotalDetailsSpanMarker className={'receipt-total-marker'}>{"Transaction Type: "}</styled.CheckoutTotalDetailsSpanMarker>
                        {`${Object.keys(receiptDetails).length === 0 ? "- - -" : `      ${receiptDetails.transactionType}`}`}
                    </styled.CheckoutTotalDetailsSpan>
                    {receiptDetails.transactionType === "Delivery" && 
                        <styled.CheckoutTotalDetailsSpan className={'receipt-total-span'}>
                            <styled.CheckoutTotalDetailsSpanMarker className={'receipt-total-marker'}>{"Delivery Address: "}</styled.CheckoutTotalDetailsSpanMarker>
                            {`      (${receiptDetails.address['name']} - ${receiptDetails.address['number']})   ${receiptDetails.address['location']}`}
                        </styled.CheckoutTotalDetailsSpan>
                    }
                    <styled.CheckoutTotalDetailsSpan className={'receipt-total-span'}>
                        <styled.CheckoutTotalDetailsSpanMarker className={'receipt-total-marker'}>{"Payment Method: "}</styled.CheckoutTotalDetailsSpanMarker>
                        {`${Object.keys(receiptDetails).length === 0 ? "- - -" : `      ${receiptDetails.payment}`}`}
                    </styled.CheckoutTotalDetailsSpan>
            </styled.CheckoutTotalDetails>
            {children}
        </styled.OrderReceiptWrapper>
    )
}

OrderReceipt.propTypes = {
    shopLogo: PropTypes.string,
    shopName: PropTypes.string,
    shopAddress: PropTypes.string,
    dateAndTime: PropTypes.string,
    receiptDetails: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node
};

export default OrderReceipt;